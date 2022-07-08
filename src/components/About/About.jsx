import profileImage from "../../img/barbara-profile.jpg";
import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-image">
          <img
            className="profile-image"
            src={profileImage}
            alt="Bárbara Oliveira"
          />
        </div>
        <div className="about-text">
          <h2>Prazer, Bárbara</h2>
          <p>
            Aluna da Reprograma, fazendo migração de carreira após meus 27 anos
            e vindo da área da educação. Estudando para me tornar uma
            Desenvolvedora Front-End.
          </p>
        </div>
      </div>
      <div className="line">
        <hr />
      </div>
    </>
  );
}

export default About;
