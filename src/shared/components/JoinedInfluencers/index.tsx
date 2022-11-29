import { Container, ContainerChecked, ContainerImg, ContainerPerfil, ContainerTexts, ContainerUnderside, LargerImg, PerfilAccount, PerfilButton, PerfilChecked, PerfilImg, PerfilText, SmallerImg } from "./styles";

//Images
import Astronaut from '../../img/JoinedInfluencers/Astronaut.svg'
import Girl from '../../img/JoinedInfluencers/girl.svg'
import Avatar from '../../img/Avatar.svg'
import Checked from '../../img/Checked.svg'

export default function JoinedInfluencers() {
    return(
        <Container>
            <ContainerImg>
                <ContainerPerfil>
                  <LargerImg src={Girl} />
                  <PerfilImg src={Avatar} />
                </ContainerPerfil>
                <SmallerImg src={Astronaut} />
            </ContainerImg>
            <ContainerUnderside>
            <ContainerTexts>
                <ContainerChecked>
                    <PerfilText>John Smith</PerfilText>
                    <PerfilChecked src={Checked} />
                </ContainerChecked>
                <PerfilAccount>@Jsmith</PerfilAccount>
            </ContainerTexts>
            <PerfilButton>Follow</PerfilButton>
                
            </ContainerUnderside>
        </Container>
    )
}