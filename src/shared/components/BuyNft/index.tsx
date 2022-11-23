import { BuyNftFavorite, BuyNftFavoriteImage, BuyNftImage, Container } from "./styles";
import MonkayApe from "../../img/BuyNft/Monkey Ape.svg"
import Hearth from "../../img/BuyNft/Hearth.svg"

export default function BuyNft() {
    return(
        <Container>
            <BuyNftImage src={MonkayApe} />
        </Container>
    )
}