import * as nanocurrency from 'nanocurrency';
class NanoGenerator {
    generateWallet = async () => {
        let wallet = {};
        wallet.seed = await nanocurrency.generateSeed();
        wallet.secret_key = nanocurrency.deriveSecretKey(wallet.seed, 0);
        wallet.public_key = nanocurrency.derivePublicKey(wallet.secret_key);
        wallet.public_address = nanocurrency.deriveAddress(wallet.public_key, {useNanoPrefix: true});
        return wallet;
    };
}

export default NanoGenerator;
