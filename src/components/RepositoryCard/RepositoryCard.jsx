import arrow from "../../img/avanco-rapido.png";
import "./RepositoryCard.css";

const url = "https://api.github.com/users/babigoliveira/repos";

function RepositoryCard({ repo }) {
  return (
    <div className="repository-card">
      <h3 className="repositoryCard-title">{repo.name}</h3>
      <a href={repo.html_url} target="_blank" className="repositoryCard-icon">
        <img src={arrow} />
      </a>
    </div>
  );
}

export default RepositoryCard;
