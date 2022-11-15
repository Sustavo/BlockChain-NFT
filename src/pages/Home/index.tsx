//Components
import NftHeader from "../../shared/components/NftHeader"
import WalletsSupport from "../../shared/components/WalletsSupport"

//Images
import LivingOfTheArt from '../../shared/img/Living of the Art.svg'
import StatueOfVughae from '../../shared/img/Statue of vughae.svg'
import BleedingGhost from '../../shared/img/Bleeding Ghost.svg'

//Images wallets
import Alpha from '../../shared/img/WallestsSupport/Alpha.svg'
import Binance from '../../shared/img/WallestsSupport/Binance.svg'
import Coingecko from '../../shared/img/WallestsSupport/Coingecko.svg'
import Metamask from '../../shared/img/WallestsSupport/Metamask.svg'
import TrustWallet from '../../shared/img/WallestsSupport/Trust Wallet.svg'

//CSS
import './home.component.css'

export default function Home(){
    return (
        // <div className="container">
        //     <div className="BleedingGhost">
        //         <NftHeader image={BleedingGhost} price='$ 152,793.17' title='Bleeding Ghost' />
        //     </div>

        //     <div className="LivingOfTheArt">
        //         <NftHeader image={LivingOfTheArt} price='$ 543,576.13' title='Living of the art' />
        //     </div>
            
        //     <div className="StatueOfVughae">
        //         <NftHeader image={StatueOfVughae} price='$ 452,968.48' title='Statue Of Vughae' />
        //     </div>
        // </div>
        <div className="containerWallSup">
            <WalletsSupport image={Alpha} title="Alpha" />
            <WalletsSupport image={Binance} title="Binance" />
            <WalletsSupport image={Coingecko} title="Coingecko" />
            <WalletsSupport image={Metamask} title="Metamask" />
            <WalletsSupport image={TrustWallet} title="Trust Wallet" />
        </div>
    )
}