import { CarouselImg, CarouselsideImg, CarouselsidethreeImg, CarouselsidetwoImg, Container } from "./styles";

//images
import Art from '../../img/Carousel/art.svg'
import Girl from '../../img/Carousel/Girl.svg'
import Astronaut from '../../img/Carousel/Astronaut.svg'
import Monkey from '../../img/Carousel/Monkey.svg'
import Girl2 from '../../img/Carousel/Girl2.svg'
import Monkey2 from '../../img/Carousel/Monkey2.svg'
import GirlArt from '../../img/Carousel/GirlArt.svg'

export default function Carousel() {
    return(
        <Container>
            <CarouselsidethreeImg src={Art} style={{marginRight: '-125px'}} />
            <CarouselsidetwoImg src={Girl2} style={{marginRight: '-124px'}} />
            <CarouselsideImg src={Astronaut} style={{marginRight: '-108px'}} />
            <CarouselImg src={Monkey} style={{marginRight: '-98px'}} />
            <CarouselsideImg src={Girl} style={{marginRight: '-124px'}} />
            <CarouselsidetwoImg src={Monkey2} style={{marginRight: '-125px'}} />
            <CarouselsidethreeImg src={GirlArt} style={{marginRight: '-108px'}} />
            

        </Container>
        
    )

}