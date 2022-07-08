import jtmk from "../../img/jtmk.gif";
import maravilhosa from "../../img/maravilhosa.gif";
import seriesPopulares from "../../img/seriesPopulares.gif";
import filmesGhibli from "../../img/filmesGhibli.gif";
import digimons from "../../img/digimons.gif";
import diarioReprograma from "../../img/diarioReprograma.gif";
import Card from "../Card/Card";
import "./Skills.css";

function Skills() {
  return (
    <>
      <h2 className="skills-title">
        Alguns projetos feitos durante a reprograma
      </h2>
      <div className="main">
        <div className="card-list">
          <Card
            title="JT Marketing Digital"
            image={jtmk}
            anchor="https://jt-marketing-digital-barbara-oliveira.netlify.app/"
          >
            Foi o meu primeiro projeto feito na reprograma, onde aprendi HTML,
            CSS e responsividade.
          </Card>
          <Card
            title="M de Maravilhosa"
            image={maravilhosa}
            anchor="https://m-de-maravilhosa-barbara-oliveira.netlify.app/"
          >
            Desafio elaborado pela reprograma, em que poderiamos escolher a
            nossa Maravilhosa, sendo ela, uma icone brasileira. Onde pude
            treinar mais o HTML,CSS,responsividade e o mobile first.
          </Card>
          <Card
            title="Series mais populares"
            image={seriesPopulares}
            anchor="https://series-mais-populares-barbara-oliveira.netlify.app/"
          >
            Foi minha primeira utilização de uma API e consumindo pelo fetch,
            mostrando em cards como catálogo de séries e filmes. Utilizei o
            Boostrap para fazer um carrossel que deu mais dinamismo na página,
            me desfiando com mais uma ferramenta que não havia usado
            anteriormente.
          </Card>
          <Card
            title="Filmes Ghibli"
            image={filmesGhibli}
            anchor="https://filmes-ghibli-barbara-oliveira.netlify.app/"
          >
            Utilizei uma api pública e solicitei que retonasse um catálogo de
            todos os filmes e alguns dados deles como uma galeria de filmes para
            treinar meus conhecimentos de fetch e css.
          </Card>
          <Card
            title="Digimons"
            image={digimons}
            anchor="https://digimons-barbara-oliveira.netlify.app/"
          >
            Foi utilizado uma chamada através do axios de uma API publica e
            solicitei que o usuário fizesse a busca de todos os digimonse por
            nome ou por nivel, gerando novos resultados aos continuar
            pesquisando.
          </Card>
          <Card
            title="Meu diário da reprograma"
            image={diarioReprograma}
            anchor="https://meu-diario-reprograma-barbara-oliveira.netlify.app/"
          >
            Foi meu primeiro projeto em react. Nele utilizei um pouco de
            componentes, props e children. Contei um pouco sobre como foi os
            aprendizados que obtive fazendo o reprograma e o que seria cada uma
            das ferramentas que me foram disponibilizadas.
          </Card>
        </div>
      </div>
    </>
  );
}

export default Skills;
