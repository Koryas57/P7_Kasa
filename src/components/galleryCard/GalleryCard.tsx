import React from 'react';
import { NavLink } from 'react-router-dom';
import './GalleryCard.scss';

// We use an interface to easily use data from the database when needed 
export interface CardData {
    id: string,
    title: string,
    cover: string,
    pictures : string[],
    description : string,
    host: {
            name:string, 
            picture:string
    },
    rating: string,
    location: string,
    equipments: string[],
    tags: string[],

}

interface GalleryCardProps {
    cardData: CardData
}

export const GalleryCard:React.FC<GalleryCardProps> = ({cardData}) => {
    return (
        // We use the gotten id to fill the path of the cards according to the database 
        <NavLink to={`/card/${cardData.id}`}>
        <div className='card'>
            {/* Then we use the cover image and title to make the gallery */}
            <img src={cardData.cover} alt="Picture cover" />
            <h2>{cardData.title}</h2>
        </div>
        </NavLink>
    );
};
