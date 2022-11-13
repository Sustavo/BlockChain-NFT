import styled from 'styled-components'
import './futuristButton.component.css'
import {Bracket, Button, Bar} from './styles'

export default function FButton() {
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