import { ConnectWalletLine, ConnectWalletList, ConnectWalletListImg, ConnectWalletListTitle, ConnectWalletOrganize, ConnectWalletTitle, Container } from "./styles";

import Metamask from "../../img/WallestsSupport/Metamask.svg"
import Binance from "../../img/WallestsSupport/Binance.svg"
import Alpha from "../../img/WallestsSupport/Alpha.svg"
import Coingecko from "../../img/WallestsSupport/Coingecko.svg"
import TrustWallet from "../../img/WallestsSupport/Trust Wallet.svg"

export default function ConnectWallet() {
    return(
        <Container>
            <ConnectWalletTitle>Connect Wallet</ConnectWalletTitle>
            <ConnectWalletLine/>
            <ConnectWalletList>
                <ConnectWalletOrganize>
                    <ConnectWalletListImg src={Metamask} />
                    <ConnectWalletListTitle>Metamask</ConnectWalletListTitle>
                </ConnectWalletOrganize>
                <ConnectWalletOrganize>
                    <ConnectWalletListImg src={Binance} />
                    <ConnectWalletListTitle>BNB Smart Chain</ConnectWalletListTitle>
                </ConnectWalletOrganize>
                <ConnectWalletOrganize>
                    <ConnectWalletListImg src={TrustWallet} />
                    <ConnectWalletListTitle>Trust Wallet</ConnectWalletListTitle>
                </ConnectWalletOrganize>
                <ConnectWalletOrganize>
                    <ConnectWalletListImg src={Alpha} />
                    <ConnectWalletListTitle>Alpha Wallet</ConnectWalletListTitle>
                </ConnectWalletOrganize>
                <ConnectWalletOrganize>
                    <ConnectWalletListImg src={Coingecko} />
                    <ConnectWalletListTitle>CoinGecko Wallet</ConnectWalletListTitle>
                </ConnectWalletOrganize>
            </ConnectWalletList>
        </Container>
    )
}