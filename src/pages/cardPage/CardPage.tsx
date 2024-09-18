import React from 'react';
import './CardPage.scss'
import { Navigate, useParams } from 'react-router';
import { CardData } from '../../components/galleryCard/GalleryCard';
import cards_data from '../../data/logements.json'
import { Collapse } from '../../components/collapse/Collapse';
import { Carrousel } from '../../components/carrousel/Carrousel';

export const CardPage:React.FC = () => {
    const {id} = useParams() // We use useParams to pick the id from the URL
    const dataGroup = cards_data.find((dataGroup: CardData) => dataGroup.id === id) // We browse our interface CardData to find the id of the rent
    
    if(!dataGroup){
        return <Navigate to="/error404" />
    }

    
    return (
        <div className="housing-section">
                <Carrousel id={id} /> {/* Displaying Carousel Component with housing images according to them id */}
                <div className="housing-info">
                        {/* In the first section we pick the title, location and tags strings to fill our template */}
                        
                            <div className='title-and-location'>
                                <h2>{dataGroup.title}</h2>
                                <p>{dataGroup.location}</p>
                            </div>
                            <div className='tags'>
                                {dataGroup.tags.map((tag, index) => (
                                    <p key={index}>{tag}</p>
                                ))}
                            </div>
                        
                        {/* Here we display the host name, profile picture and the stars rating system with a ternary expression */}
                        
                            <div className='host-section'>
                                <div className='stars-rating'>
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <i
                                            key={index}
                                            className={`fa-solid fa-star ${index < + dataGroup.rating ? 'active-star' : 'disabled-star'}`}
                                            >
                                            </i>
                                         ))}
                                </div>
                                <div className="host-info">
                                    <p>{dataGroup.host.name}</p>
                                    <img src={dataGroup.host.picture} alt="Photo de profil de l'hôte" />
                                </div>
                            </div>
                </div>
                        {/* In the last section we call our Collapse Components with description and equipments list from dataGroup */}
                            <div className='collapse-section'>
                        <Collapse
                            title="Description"
                            content={dataGroup.description}
                        />
                        <Collapse
                            title="Équipement"
                            content={dataGroup.equipments.map((equipment, index) => (<span key={index}>{equipment}</span>))}
                        />
                            </div>
        </div>
    );
};

