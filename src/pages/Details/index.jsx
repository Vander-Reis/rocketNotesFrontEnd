import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odio, qui obcaecati optio nemo molestias reiciendis reprehenderit eos laudantium distinctio temporibus est nobis repellendus aliquid itaque aperiam, assumenda non natus!</p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://google.com">Link 1</a>
              </li>

              <li>
                <a href="https://google.com">Link 2</a>
              </li>

              <li>
                <a href="https://google.com">Link 3</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
