import React from 'react';
import "./About.scss"
import aboutImg from "../../assets/Image_source_2.png"
import aboutContent from "../../data/string.json"
import { Collapse } from '../../components/collapse/Collapse';

export const About:React.FC = () => {
    return (
        <div>
            <img src={aboutImg} alt="image de Montagne" className='tagline' />
            <div className="content">
                {/* We use the content from the database with the entries method, then with the map method we select the title and content as parameters  */}
                { Object.entries( aboutContent).map(([title, content]) => (
                    // Then we can use them as props to fill our collapse element 
                    < Collapse title={title} content={content} key={title} />
                ))           
                }
            </div>
        </div>
    );
};
