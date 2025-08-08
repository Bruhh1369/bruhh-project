import React from "react";
import { GreenButton } from "@buttons";
import "./ore-ui-card.css";

export const PostCard = ({ packname = "pack-name", thumbnail = "pack-thumbnail", linkSlug }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p>{packname}</p>
      </div>
      <div className="card-main">
        <img
          src={`/post-images/${thumbnail}`}
          alt={thumbnail}
        />
      </div>
      <div className="card-footer">
        <GreenButton
          secondClass="card-button"
          childElement={<p>Learn more...</p>}
          hyperLink={`https://mcpedl.com/${linkSlug}`}
        />
      </div>
    </div>
  )
};