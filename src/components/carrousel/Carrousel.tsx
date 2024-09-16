import React, { useState } from 'react';
import cards_data from '../../data/logements.json'
import { CardData } from '../galleryCard/GalleryCard';
import './Carrousel.scss'

interface CarrouselProps {
    id ?: string,
}

export const Carrousel:React.FC<CarrouselProps> = ({id}) => {
    const images = (cards_data as CardData[]).find( card => card.id === id)?.pictures || [];
    
    const [currentIndexImage , setCurrentIndexImage] = useState<number>(0);

            const nextImage = () => {
                setCurrentIndexImage((currentIndexImage +1)% images.length)
            }
            const prevImage = () => {
                setCurrentIndexImage ((currentIndexImage -1 + images.length)% images.length)
            }

            
    return (
        <div className="imgDiv">
                {images.map((imgUrl, index) => (
                    <img src={imgUrl} alt="Photo descriptive" key={index} className={index===currentIndexImage? "active":"disabled"}/>
                ))
                }
                {images.length > 1 &&
                <>
                    <div className='left-right-div'>
                        <span className='left' onClick={prevImage}><i className="fa-solid fa-chevron-left"></i></span>
                        <span className='right' onClick={nextImage}><i className="fa-solid fa-chevron-right"></i></span>
                    </div>
                    <p>{currentIndexImage + 1}/{images.length}</p>
                </>
            }
        </div>
    );
};
