import { useEffect, useState } from "react";
import RepositoryCard from "../RepositoryCard/RepositoryCard";
import "./Repositories.css";

function Repositories() {
  const [repositories, setRepositories] = useState([]);

  const fetchRepositories = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/babigoliveira/repos"
      );
      const repositories = await response.json();
      setRepositories(repositories);
    } catch (error) {
      console.error("Falha ao obter repositórios", error);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <>
      <h2 className="cards-title">Outros projetos do meu GitHub:</h2>
      <div className="main">
        <div className="repository-container">
          {repositories.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Repositories;
