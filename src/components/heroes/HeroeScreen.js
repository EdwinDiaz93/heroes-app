import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { heroImages } from '../../helpers/heroImages';
import {  getHeroesById} from '../../selectors/getHeroesById';




export const HeroeScreen = ({history}) => {

    
    const {goBack,length,push}=history;

    const {heroeId} =useParams();    

    const hero=useMemo(() => getHeroesById(heroeId), [heroeId]);

    if(!hero){
        return <Redirect to="/"/>;
    }

    const handleReturn=()=>{

        if(length<=2){
           push('/');
        }else{ 
            goBack();
        }

    }

    const {superhero,publisher,alter_ego,first_appearance,characters,}=hero;
    
    

    return (
        <div className="row mt-5">
            <div className="col-md-4">
                <img
                    // src={`../assets//heroes/${heroeId}.jpg`}
                    src={heroImages(`./${heroeId}.jpg`).default}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter Ego:</b>{alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b>{publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance:</b>{first_appearance}
                    </li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>

        </div>
    )
}
