//Components
import NftHeader from "../../shared/components/NftHeader"

//Images
import LivingOfTheArt from '../../shared/img/Living of the Art.svg'
import StatueOfVughae from '../../shared/img/Statue of vughae.svg'
import BleedingGhost from '../../shared/img/Bleeding Ghost.svg'

//CSS
import './home.component.css'

export default function Home(){
    return (
        <div className="container">
            <NftHeader image={LivingOfTheArt} price='$ 543,576.13' title='Living of the art' />
            <NftHeader image={StatueOfVughae} price='$ 543,576.13' title='Living of the art' />
            <NftHeader image={BleedingGhost} price='$ 543,576.13' title='Living of the art' />
        </div>
    )
}