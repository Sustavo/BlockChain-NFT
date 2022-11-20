import { Bar, Bracket, Button } from "../ExploreMoreButton/styles";
import './ConnectWalletButton.component.css'

export default function ConnectWalletButton() {
    return(
        <div className="container">
                    <Bar></Bar> 
                <div className="organizeButton">
                    <div className="breakparts">
                        <Bracket></Bracket>
                        <Bracket></Bracket>
                    </div>
                    <Button>Connect Wallet</Button>
                    <div className="breakparts">
                        <Bracket></Bracket>
                        <Bracket></Bracket>
                    </div>
                </div>
                <Bar></Bar>  
            </div>
    )
}