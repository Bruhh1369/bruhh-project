import { useParams } from 'react-router-dom';
import React from 'react'
import './packs.css';

const packs = {
    "bedrock-ui-plus-b69-2": {
        title: "Bedrock UI+",
        pictures: ["/post-images/bedrockuiplus.png"],
        description: "A modern UI pack that enhances the user interface of Minecraft Bedrock Edition."
    },
    "improved-plus-b69": {
        title: "Improved+",
        description: "An improved texture pack that enhances the visual quality of Minecraft Bedrock Edition."
    },
    "note-and-calculator-b69": {
        title: "Note And Calculator",
        description: "A utility pack that adds a note-taking and calculator feature to Minecraft Bedrock Edition."
    }
}

const packPicts = () => {
    packs.pictures.map((i) => {
        return (
            <img src={i} alt="" />
        )
    })
}

const PacksInfo = () => {
    const { slug } = useParams();
    const pack = packs[slug];

    if (!pack) {
        return <div className="pack-not-found">Pack not found</div>;
    }


    return (
        <div className="pack-info">
            <packPicts />
            <h1>{pack.title}</h1>
            <p>{pack.description}</p>
        </div>
    );
}

export default PacksInfo;