import React from 'react';
import './CardPage.scss'
import { Navigate, useParams } from 'react-router';
import { CardData } from '../../components/galleryCard/GalleryCard';
import cards_data from '../../data/logements.json'
import { Collapse } from '../../components/collapse/Collapse';
import { Carrousel } from '../../components/carrousel/Carrousel';

export const CardPage:React.FC = () => {
    const {id} = useParams()
    const dataGroup = cards_data.find((dataGroup: CardData) => dataGroup.id === id)
    
    if(!dataGroup){
        return <Navigate to="/error404" />
    }

    
    return (
        <div className="CardsPage">
                <Carrousel id={id} />
                <div className="info">
                    <div className='sec12'>
                        <div className='info-section info-section1'>
                            <div className='title-and-loc'>
                                <h2>{dataGroup.title}</h2>
                                <p>{dataGroup.location}</p>
                            </div>
                            <div className='tags'>
                                {dataGroup.tags.map((tag, index) => (
                                    <p key={index}>{tag}</p>
                                ))}
                            </div>
                        </div>
                        <div className='info-section info-section2'>
                            <div className='account-info'>
                                <p>{dataGroup.host.name}</p>
                                <img src={dataGroup.host.picture} alt="pp" />
                            </div>
                            <div className='stars-rating'>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <i
                                        key={index}
                                        className={`fa-solid fa-star ${index < +dataGroup.rating ? 'active-star' : 'disabled-star'}`}
                                    >
                                    </i>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='info-section info-section3'>
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
            </div>
    );
};

