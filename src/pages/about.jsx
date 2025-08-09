import React, { useState } from 'react'
import './styles/about.css'
import clsx from 'clsx'

const ProfileCard = (props) => {
    return (
        <div className="profile-card">
            <div className="profile-card-main">
                <img
                    src="webicon.png"
                    alt="pfp"
                />
            </div>
            <div className="profile-card-footer">
                <p>{props.description}</p>
            </div>
        </div>
    )
}

const TsValues = ({ rank }) => {
    const ranks = {
        "Beginner": 1,
        "Pre-Intermediate": 2,
        "Intermediate": 3,
        "Advanced": 4,
        "Professional": 5
    };
    const valueCount = ranks[rank] || 1

    return (
        <>
            {[...Array(5)].map((_, i) => (
                <div key={i} className={i < valueCount ? "value-1" : "value-0"}></div>
            ))}
        </>
    );
}
const TsWrapper = ({ name = "Unknown", rank = "Beginner" }) => {
    return (
        <div className="ts-wrapper">
            <p>{name} - {rank}</p>
            <div className="ts-renderer">
                <img src={`/svgs/${name}.svg`} alt={name} className="ts-icon" />
                <TsValues rank={rank} />
            </div>
        </div>
    )
}

const FAQCard = ({ description, question }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="faq-card-item">
            <button className={clsx("faq-button")} onClick={() => setOpen((prev) => !prev)}>
                <p>{question}</p>
                <span className="faq-button-icon">
                    <p>{open ? "-" : "+"}</p>
                </span>
            </button>
            <div className="faq-description">
                {open && <p>{description}</p>}
            </div>
        </div>
    );
}



const About = () => {

    const faqData = [
        {
            question: "What is this project?",
            answer: "This project is a demonstration of a React application with a profile page."
        },
        {
            question: "How can I contribute?",
            answer: "You can contribute by submitting pull requests or reporting issues on the GitHub repository."
        },
        {
            question: "Who is the author?",
            answer: "The author of this project is a passionate developer who loves coding."
        }
    ]

    return (
        <div className="profile-page">
            <ProfileCard
                description="lorem dfn djnehdftgyed wwytdyaub  wqyhdjb  yewhdbwdyh ywedhwbn hvsdbabasbxhabsxaxjsedrftyugyut5ewuytftrtytdsygeuedcshvcahddbcusbgfubwhi linen rein dhcudgfyugdcuygdyudhbfyuebecsefgyuewgfeawhbhbashb bhsxjhashxb fdgydunsqwertyuiopoiughdvcuhgsdfuihdjfnawf        h"
            />
            <div className="ts-card">
                <div className="ts-card-header">
                    <p>Tech Stack</p>
                </div>
                <div className="ts-card-main">
                    <TsWrapper
                        name="JSON UI"
                        rank="Advanced"
                    />
                    <TsWrapper
                        name="CSS"
                        rank="Advanced"
                    />
                    <TsWrapper
                        name="JavaScript"
                        rank="Intermediate"
                    />
                    <TsWrapper
                        name="React"
                        rank="Intermediate"
                    />
                    <TsWrapper
                        name="C++"
                        rank="Beginner"
                    />
                </div>
            </div>
            <div className="faq-card">
                <div className="faq-card-header">
                    <p>FAQ's</p>
                </div>
                <div className="faq-card-main">
                    {faqData.map((faq, index) => {
                        return (
                            <FAQCard
                                key={index}
                                question={faq.question}
                                description={faq.answer}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About