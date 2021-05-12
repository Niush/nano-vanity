import NanoGenerator from './NanoGenerator';

function main() {
    let attempts = 0;
    let nextUpdate = 0;
    let lastAttempts = 0;
    let aps = 0;
    let start = 0;
    let finished = 0;
    let elapsed = 0;

    async function findWallet(prefix, isSuffix=false) {
        let generated_prefix = null;
        let now = null;
        let wallet = null;

        start = Date.now();

        const nanogenerator = new NanoGenerator();

        do {
            attempts++;
            now = Date.now();
            wallet = await nanogenerator.generateWallet();

            if (isSuffix) {
                // Check if suffix (i.e. end) of address matches prefix (i.e. provided) string
                generated_prefix = wallet.public_address.substring(wallet.public_address.length - prefix.length);
            } else {
                // Else Check 7th and starting character for prefix (i.e. provided) string
                generated_prefix = wallet.public_address.substring(6, 6 + prefix.length);
            }

            if (now > nextUpdate) {
                aps = attempts - lastAttempts;
                lastAttempts = attempts;
                nextUpdate = now + 1000;
                elapsed = ((now-start)/1000);
                postMessage({
                    action:'update',
                    attempts:attempts,
                    aps:aps,
                    elapsed:elapsed,
                    average_aps:attempts/elapsed,
                });
            }
        } while (generated_prefix !== prefix);

        finished = Date.now();

        return wallet;
    }

    addEventListener('message', async (event) => { // eslint-disable-line no-restricted-globals
        if (event.data.action === 'start') {
            const prefix = event.data.params.prefix;
            const isSuffix = event.data.params.isSuffix;
            const wallet = await findWallet(prefix, isSuffix);
            elapsed = (finished-start)/1000;
            postMessage({
                action:'finished',
                wallet:wallet,
                attempts:attempts,
                aps:aps,
                elapsed:elapsed,
                average_aps:attempts/elapsed,
            });
        }
    })
}

main();
