import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryCard.scss';

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
        <Link to={`/card/${cardData.id}`}>
        <div className='card'>
            <img src={cardData.cover} alt="Picture cover" />
            <h2>{cardData.title}</h2>
        </div>
        </Link>
    );
};
