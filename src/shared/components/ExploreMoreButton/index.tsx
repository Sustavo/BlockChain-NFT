
import './ExploreMoreButton.component.css'
import {Bracket, Button, Bar} from './styles'

export default function ExploreMoreButton() {
    return(
        <>
            <div className="container">
                    <Bar></Bar> 
                <div className="organizeButton">
                    <div className="breakparts">
                        <Bracket></Bracket>
                        <Bracket></Bracket>
                    </div>
                    <Button>Explore More</Button>
                    <div className="breakparts">
                        <Bracket></Bracket>
                        <Bracket></Bracket>
                    </div>
                </div>
                <Bar></Bar>  
            </div>
        
        </>
    )
}