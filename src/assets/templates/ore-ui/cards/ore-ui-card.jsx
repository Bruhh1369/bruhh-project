import { PackButton } from "@buttons";
import React from "react";
import "./ore-ui-card.css";

export const PostCard = ({ postlist }) => {

  return postlist.map(e => (
    <div className="card">
      <div className="card-header">
        <p>{e.packname}</p>
      </div>
      <div className="card-main">
        <img
          src={`/post-images/${e.thumbnail}`}
          alt={e.thumbnail}
        />
      </div>
      <div className="card-footer">
        <PackButton
          to={`/pack/${e.linkSlug}`}
          secondClass="card-button"
          childElement={<p>Learn more...</p>}
        />
      </div>
    </div>
  ))
};