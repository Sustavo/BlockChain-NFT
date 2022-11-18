//Images wallets
import Alpha from '../../img/WallestsSupport/Alpha.svg'
import Binance from '../../img/WallestsSupport/Binance.svg'
import Coingecko from '../../img/WallestsSupport/Coingecko.svg'
import Metamask from '../../img/WallestsSupport/Metamask.svg'
import TrustWallet from '../../img/WallestsSupport/Trust Wallet.svg'

//Components
import WalletsSupport from '../WalletsSupport'
//CSS
import { ContainerWallSup } from './styles'

export default function WalletsSupportFull() {
    return(
    <ContainerWallSup>
        <WalletsSupport image={Alpha} title="Alpha" />
        <WalletsSupport image={Binance} title="Binance" />
        <WalletsSupport image={Coingecko} title="Coingecko" />
        <WalletsSupport image={Metamask} title="Metamask" />
        <WalletsSupport image={TrustWallet} title="Trust Wallet" />
    </ContainerWallSup>

    )
}