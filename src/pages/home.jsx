import React from 'react'
import './styles/home.css'
import { PostCard } from '@cards'

const Home = () => {

    const posts = [
        {
            packname: "Bedrock UI+",
            thumbnail: "bedrockuiplus.png",
            linkSlug: "bedrock-ui-plus-b69-2"
        },
        {
            packname: "Note And Calculator",
            thumbnail: "notesandcalculator.png",
            linkSlug: "note-and-calculator-b69"
        },
        {
            packname: "HUD+ Reworked",
            thumbnail: "hudplusreworked.png",
            linkSlug: "hud-plus-b69"
        },
        {
            packname: "No Lava&Water Fog",
            thumbnail: "nolavawaterfog.png",
            linkSlug: "no-lava-water-fog-b69-2"
        }
    ]

    return (
        <main>
            <PostCard
                postlist={posts}
            />
        </main>
    )
}

export default Home
