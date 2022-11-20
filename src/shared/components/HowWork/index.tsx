import { Container, HowWorkCircle, HowWorkDashedBorderImg, HowWorkCircleImg, HowWorkTitle, MainCointainer } from "./styles";
import Wallet from "../../img/HowWork/Wallet.svg"
import Collection from "../../img/HowWork/Collection.svg"
import AddNft from "../../img/HowWork/AddNft.svg"
import ListSale from "../../img/HowWork/List Sale.svg"
import DashedBorder from "../../img/HowWork/DashedBorder.svg"

export default function HowWork() {
    return(
        <MainCointainer>
            <Container>
                <HowWorkCircle>
                    <HowWorkCircleImg src={Wallet} />
                </HowWorkCircle>
                <HowWorkTitle>Set up your wallet</HowWorkTitle>
            </Container>
            <HowWorkDashedBorderImg src={DashedBorder} />
            <Container>
                <HowWorkCircle>
                    <HowWorkCircleImg src={Collection} />
                </HowWorkCircle>
                <HowWorkTitle>Create your collection</HowWorkTitle>
            </Container>
            <HowWorkDashedBorderImg src={DashedBorder} />
            <Container>
                <HowWorkCircle>
                    <HowWorkCircleImg src={AddNft} />
                </HowWorkCircle>
                <HowWorkTitle>Add your NFTs</HowWorkTitle>
            </Container>
            <HowWorkDashedBorderImg src={DashedBorder} />
            <Container>
                <HowWorkCircle>
                    <HowWorkCircleImg src={ListSale} />
                </HowWorkCircle>
                <HowWorkTitle>List them for sale</HowWorkTitle>
            </Container>
        </MainCointainer>
    )

}