import { BuyNftButton, BuyNftButtonBorder, BuyNftButtonDiv, BuyNftEthereumImage, BuyNftFavorite, BuyNftFavoriteImage, BuyNftFavoriteText, BuyNftImage, BuyNftOnsale, BuyNftOnsalePriceDolar, BuyNftOnsalePriceEth, BuyNftPerfilImage, BuyNftPerfilText, BuyNftPerfilTitle, Container, ContainerEth, ContainerImg, ContainermakeEth, ContainerOnsale, ContainerPerfil, ContainerPerfilText, ContainerPrice, ContainerSeparete } from "./styles";
import MonkayApe from "../../img/BuyNft/Monkey Ape.svg"
import Hearth from "../../img/BuyNft/Hearth.svg"
import Avatar from "../../img/Avatar.svg"
import Ethereum from "../../img/Ethereum.svg"
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
                <ContainerSeparete>
                    <ContainerOnsale>
                        <BuyNftOnsale>On Sale</BuyNftOnsale>
                        <BuyNftOnsale>🔥</BuyNftOnsale>
                    </ContainerOnsale>
                    <ContainermakeEth>
                        <ContainerEth>
                            <BuyNftEthereumImage src={Ethereum} />
                            <BuyNftOnsalePriceEth>4.89 ETH</BuyNftOnsalePriceEth>
                        </ContainerEth>
                        <ContainerPrice>
                            <BuyNftOnsalePriceDolar>($ 654,874.86)</BuyNftOnsalePriceDolar>
                        </ContainerPrice>
                    </ContainermakeEth>
                </ContainerSeparete>
                <BuyNftButtonDiv>
                    <BuyNftButtonBorder />
                    <BuyNftButton>Buy Now</BuyNftButton>
                    <BuyNftButtonBorder />
                </BuyNftButtonDiv>
            </Container>
    )
}