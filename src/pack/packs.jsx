import { useParams } from 'react-router-dom';
import React from 'react'
import './packs.css';
import { GreenButton } from '@buttons';

const packs = {
    "bedrock-ui-plus-b69-2": {
        title: "Bedrock UI+",
        pictures: ["/post-images/bedrockuiplus.png", "/post-images/hudplusreworked.png"],
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
    const [currentIndex, setCurrentIndex] = React.useState(0);

    if (!pack) {
        return <div className="pack-not-found">Pack not found</div>;
    }

    const pictures = pack.pictures || [];
    const hasPictures = pictures.length > 0;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="pack-info">
            <div className="carousel">
                {hasPictures && (
                    <>
                        <img className="carousel-img" src={pictures[currentIndex]} alt={pack.title} />
                    </>
                )}
            </div>
            <div className="carousel-btns">
                {hasPictures && (
                    <>
                        <button className="carousel-btn left" onClick={handlePrev}>&lt;</button>
                        <button className="carousel-btn right" onClick={handleNext}>&gt;</button>
                    </>
                )}
            </div>
            <div className="pack-desc">
                <h1>{pack.title}</h1>
                <p>{pack.description}</p>
            </div>
            <div className="download">
                <GreenButton
                    hyperLink={`https://mcpedl.com/${slug}`}
                    childElement={<p>Download</p>}
                />
            </div>
        </div>
    );
}

export default PacksInfo;