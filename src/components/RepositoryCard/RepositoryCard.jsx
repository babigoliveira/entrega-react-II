import "./RepositoryCard.css";

const url = "https://api.github.com/users/babigoliveira/repos";

function RepositoryCard({ repo }) {
  return (
    <div className="repositoryCard">
      <h3 className="repositoryCard-title">{repo.name}</h3>
      <p className="repositoryCard-text">{repo.description}</p>
      <a href={repo.html_url} className="repositoryCard-text">
        GitHub
      </a>
    </div>
  );
}

export default RepositoryCard;
