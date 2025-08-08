import React from 'react'
import './styles/home.css'
import { PostCard } from '@cards'

const Home = () => {
    return (
        <main>
            <PostCard
                packname="Bedrock UI+"
                thumbnail="bedrockuiplus.png"
                linkSlug="bedrock-ui-plus-b69-2"
            />
            <PostCard
                packname="Improved+"
                thumbnail="improvedplus.png"
                linkSlug="improved-plus-b69"
            />
            <PostCard
                packname="Note And Calculator"
                thumbnail="notesandcalculator.png"
                linkSlug="note-and-calculator-b69"
            />
            <PostCard
                packname="HUD+ Reworked"
                thumbnail="hudplusreworked.png"
                linkSlug="hud-plus-b69"
            />
            <PostCard
                packname="No Lava&Water Fog"
                thumbnail="nolavawaterfog.png"
                linkSlug="no-lava-water-fog-b69-2"
            />
        </main>
    )
}

export default Home
