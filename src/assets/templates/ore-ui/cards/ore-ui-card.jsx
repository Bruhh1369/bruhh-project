import React from "react";
import { PackButton } from "@buttons";
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
        <PackButton
          to={`/pack/${linkSlug}`}
          secondClass="card-button"
          childElement={<p>Learn more...</p>}
        />
      </div>
    </div>
  )
};