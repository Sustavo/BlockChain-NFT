import { ImageWallet, WalletBox, WalletCircle, WalletName } from './styles'

//img
import TrustWallet from '../../img/WallestsSupport/Trust Wallet.svg'

type PrivateProps = {
    image: string;
    title: string;
}

export default function walletsSupport({ image, title }: PrivateProps) {
    return(
        <WalletBox>
            <WalletCircle>
                <ImageWallet src={image}     />
            </WalletCircle>
            <WalletName>{title}</WalletName>
        </WalletBox>
    )
}