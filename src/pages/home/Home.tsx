import React from 'react';
import './Home.scss'
import { CardData } from '../../components/galleryCard/GalleryCard';
import { GalleryCard } from '../../components/galleryCard/GalleryCard';
import logements from '../../data/logements.json';


export const Home:React.FC = () => {
    return (
        <>
            <section className="tagline">
                <p>Chez vous, partout et ailleurs</p>
            </section>
            <section className="gallery">
            {logements.map((cardData: CardData)=>(
            <GalleryCard key={cardData.id} cardData={cardData} />
            ))}
            </section>
        </>
    );
};

