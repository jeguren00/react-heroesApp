import { HeroCard } from "../components";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);
    const { searchText, onInputChange } = useForm({ searchText: q });
    const heroes = getHeroesByName(q);
    const onSearchSubmit = (event) => {
        event.preventDefault();
        //if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText}`);
    };
    const showSearch = q.length === 0;
    const showError = q.length > 0 && heroes.length === 0;

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit} aria-label="form">
                        <input
                            type="text"
                            placeholder="Search a hero"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-primary mt-1 ml-1"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {/* {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroes.length == 0 && (
              <div className="alert alert-danger">
                There are no results for <b>{q}</b>
              </div>
            )
          )} */}
                    <div
                        className="alert alert-primary animate__animated animate__fadeIn"
                        style={{ display: showSearch ? "" : "none" }}
                        aria-label="searchdiv"
                    >
                        Search a hero
                    </div>
                    <div
                        className="alert alert-danger animate__animated animate__fadeIn"
                        aria-label="notfounddiv"
                        style={{ display: showError ? "" : "none" }}
                    >
                        There are no results for <b>{q}</b>
                    </div>
                    {heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero}></HeroCard>
                    ))}
                </div>
            </div>
        </>
    );
};
