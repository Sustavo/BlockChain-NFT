//Images
import LivingOfTheArt from '../../img/Living of the Art.svg'
import StatueOfVughae from '../../img/Statue of vughae.svg'
import BleedingGhost from '../../img/Bleeding Ghost.svg'

//Components
import NftHeader from "../NftHeader";

//CSS
import './NftHeaderFull.component.css'

export default function NftHeaderFull() {
    return(
        <div className="container">
            <div className="BleedingGhost">
                <NftHeader image={BleedingGhost} price='$ 152,793.17' title='Bleeding Ghost' />
            </div>

            <div className="LivingOfTheArt">
                <NftHeader image={LivingOfTheArt} price='$ 543,576.13' title='Living of the art' />
            </div>
            
            <div className="StatueOfVughae">
                <NftHeader image={StatueOfVughae} price='$ 452,968.48' title='Statue Of Vughae' />
            </div>
        </div>
    )
}