import { GreenButton } from "@buttons";
import React from "react";
import "./ore-ui-card.css";

export const PostCard = ({ postlist }) => {

    if (!postlist || postlist.length === 0) return <p>No posts available.</p>;


    return postlist.map((e, i) => (
        <div key={i} className="card">
            <div className="card-header">
                <p>{e.title}</p>
            </div>
            <div className="card-main">
                <img
                    src={e.image}
                    alt={e.title}
                />
            </div>
            <div className="card-footer">
                <GreenButton
                    hyperLink={`https://mcpedl.com/${e.slug}`}
                    secondClass="card-button"
                    childElement={<p>Learn more...</p>}
                />
            </div>
        </div>
    ))
};