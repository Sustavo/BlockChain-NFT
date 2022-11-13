import { ImageSell, OrganizePost, Price, PriceTitle } from "./styles";
import './nftHeader.component.css'

type PrivateProps = {
    image: string;
    title: string;
    price: string
}

export default function nftHeader({ image, title, price }: PrivateProps) {
    return(
        <OrganizePost>
            <ImageSell src={image} />
            <div className="flex1">
                <PriceTitle>{title}</PriceTitle>
                <Price>{price}</Price> 
            </div>
        </OrganizePost>
        )
}