import { useParams } from 'react-router-dom';
import React from 'react'
import './packs.css';
import { GreenButton } from '@buttons';

const packs = {
    "bedrock-ui-plus-b69-2": {
        title: "Bedrock UI+",
        pictures: ["/post-images/bedrockuiplus.png"/*, "/post-images/hudplusreworked.png", "/post-images/bedrockuiplus.png","/post-images/bedrockuiplus.png","/post-images/bedrockuiplus.png","/post-images/bedrockuiplus.png"*/],
        description: "A modern UI pack that enhances the user interface of Minecraft Bedrock Edition."
    },
    "improved-plus-b69": {
        title: "Improved+",
        pictures: ["/post-images/bedrockuiplus.png", "/post-images/hudplusreworked.png"],
        description: "An improved texture pack that enhances the visual quality of Minecraft Bedrock Edition."
    },
    "note-and-calculator-b69": {
        title: "Note And Calculator",
        pictures: ["/post-images/bedrockuiplus.png", "/post-images/hudplusreworked.png"],
        description: "A utility pack that adds a note-taking and calculator feature to Minecraft Bedrock Edition."
    }
}


const PacksInfo = () => {
    const { slug } = useParams();
    const pack = packs[slug];

    if (!pack) {
        return <div className="pack-not-found">Pack not found</div>;
    }

    return (
        <div className="pack-info">
            <div className="carousel">
                {pack.pictures.map(picture => 
                    <img src={picture} alt={pack.title} className="carousel-image" />
                )}
                <div className="carousel-buttons">
                    <a className="carousel-left"></a>
                    <div className="carousel-spacer"></div>
                    <a className="carousel-right"></a>
                </div>
            </div>
        </div>
    );
}

export default PacksInfo;