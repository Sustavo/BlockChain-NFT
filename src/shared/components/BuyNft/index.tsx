import { BuyNftImage, Container } from "./styles";
import MonkayApe from "../../img/BuyNft/Monkey Ape.svg"

export default function BuyNft() {
    return(
        <Container>
            <BuyNftImage src={MonkayApe} />
        </Container>
    )
}