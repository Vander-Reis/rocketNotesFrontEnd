import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/Vander-Reis.png"
                    alt="Foto do usuário"
                 />

                 <div>
                    <span>Bem-vindo</span>
                    <strong>Vander Reis</strong>
                 </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    );
}