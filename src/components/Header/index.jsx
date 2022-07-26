import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth';
import { Container, Profile, Logout } from "./styles";

export function Header() {

    const { signOut } = useAuth();
    console.log(useAuth());

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

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>

        </Container>
    );
}