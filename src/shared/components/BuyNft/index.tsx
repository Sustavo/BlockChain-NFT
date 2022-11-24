import { BuyNftFavorite, BuyNftFavoriteImage, BuyNftFavoriteText, BuyNftImage, BuyNftPerfilImage, BuyNftPerfilText, BuyNftPerfilTitle, Container, ContainerImg, ContainerPerfil, ContainerPerfilText } from "./styles";
import MonkayApe from "../../img/BuyNft/Monkey Ape.svg"
import Hearth from "../../img/BuyNft/Hearth.svg"
import Avatar from "../../img/Avatar.svg"
import { Flex } from "../../../globaStyle";

export default function BuyNft() {
    return(
            <Container>
                <ContainerImg>
                    <BuyNftImage src={MonkayApe} />    
                    <BuyNftFavorite>
                        <BuyNftFavoriteImage src={Hearth} />
                        <BuyNftFavoriteText>314</BuyNftFavoriteText>
                    </BuyNftFavorite>
                </ContainerImg>
                <ContainerPerfil>
                    <BuyNftPerfilImage src={Avatar} />
                    <ContainerPerfilText>
                        <BuyNftPerfilTitle>Monkey Ape</BuyNftPerfilTitle>
                        <BuyNftPerfilText>By @JSmith</BuyNftPerfilText>
                    </ContainerPerfilText>
                </ContainerPerfil>

            </Container>



    )
}