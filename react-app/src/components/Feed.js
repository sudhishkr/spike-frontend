import React from "react";

const Feed = props => {
  const story = props.story;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <div className="info">
          <tr />
          <h4>{story.restuarant}</h4>
          <tr />
          <p>{story.incident_report}</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Feed;
