import gitImage from "../../img/git.png";
import htmlImage from "../../img/html-5.png";
import cssImage from "../../img/css-3.png";
import javascriptImage from "../../img/script-java.png";
import Card from "../Card/Card";
import "./Skills.css";

function Skills() {
  return (
    <>
      <h2 className="skills-title">4 projetos feitos na reprograma</h2>
      <div className="card-list">
        <Card title="Git:" image={gitImage}>
          O Git é um sistema para controlar versão de códigos e é usado pela
          grande maioria das pessoas desenvolvedoras atualmente. Isso significa
          dizer que usando o git a gente pode esquecer o medo de perder alguma
          alteração que a gente fez no nosso código. Ou se a gente precisar
          trabalhar em equipe fica super fácil de identificar quem mexeu em cada
          linha de código ou como resolver conflitos se as pessoas mexerem nas
          mesmas linha
        </Card>
        <Card title="HTML:" image={htmlImage}>
          HTML é uma abreviação de Hyper Text Markup Language (linguagem de
          marcação em hipertexto). Ou seja, não se trata de uma linguagem de
          programação, pois não tem lógica (algoritmos, processos etc). Ele cria
          a estrutura de uma página ou aplicação web, determinando a separação
          de layout e conteúdo
        </Card>
        <Card title="CSS:" image={cssImage}>
          CSS é abreviação de Cascading Style Sheet (folha de estilos em
          cascata). É a linguagem que define estilos para o HTML, portanto, não
          se trata de linguagem de programação. CSS tem 'cascata' no nome,
          devido a sua forma de determinar a propriedade de um elemento -
          levando em consideração hierarquia de seletores e de chamadas de
          estilo (inline, internal e external). Para fazer o link de um arquivo
          .css em um documento .html, devemos inserir a tag no do documento, com
          o href do caminho do arquivo.
        </Card>
        <Card title="JavaScript:" image={javascriptImage}>
          Segundo o livro "Estrutura de dados e algoritmos com javascript", de
          Loiane Groner: "Javascript é uma das linguagens de programação mais
          populares atualmente, é conhecida como a linguagem da internet porque
          os navegadores a entendem de modo nativo, sem a instalação de qualquer
          plugin." Praticamente todos os sites e aplicações web usam javascript,
          até outras ferramentas que são usadas para web, no fim das contas vão
          precisar transformar o código em javascript para que o navegador
          entenda.
        </Card>
      </div>
    </>
  );
}

export default Skills;
