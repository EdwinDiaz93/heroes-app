import React, { useMemo } from 'react'
import queryString from 'query-string'


import { useLocation } from 'react-router';
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    const location=useLocation();
    
    const {q=""}=queryString.parse(location.search);
    
    const {search,handleChange,reset}=useForm({
        search:q,
    });

    const heroesFiltered= useMemo(() => getHeroesByName(q), [q]) ;

    const handleSearch=e=>{
        e.preventDefault();        

        
        history.push(`?q=${search}`);

        reset();
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <h1>
                Search Screen
            </h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form
                        onSubmit={handleSearch}
                    >
                            <input
                                type="text"
                                placeholder="Find Your Hero"
                                className="form-control"
                                name="search"
                                onChange={handleChange}
                                value={search}
                                autoComplete="off"
                            />
                            <button
                                type="submit"
                                className="btn btn-block btn-outline-primary mt-3"
                            >
                                Search
                            </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4 >
                        Results
                    </h4>
                    <hr/>
                    {(q==="")
                        && 
                        <div className="alert alert-info">
                        Search a Hero
                        </div>
                    }
                    {(q!==""&&heroesFiltered.length===0)
                        && 
                        <div className="alert alert-info">
                        There is no hero with {q}
                        </div>
                    }
                        {heroesFiltered.map(hero=>(
                            <HeroeCard
                                key={hero.id}
                                {...hero}
                            />
                        ))}
                    <hr/>
                </div>
            </div>
        </div>
    )
}
