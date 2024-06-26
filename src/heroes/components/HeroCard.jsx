import { Link } from "react-router-dom";

const CharactersByHero = ({alter_ego,characters}) => {
  if(alter_ego === characters) return(<></>);

  return <p>{characters}</p>
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <CharactersByHero characters={characters} alter_ego={alter_ego}></CharactersByHero>
              <p className="card-text">
                <small>{first_appearance}</small>
              </p>
              <p className="card-text">{first_appearance}</p>
              <Link to={`/hero/${id}`}> Más informacion</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
