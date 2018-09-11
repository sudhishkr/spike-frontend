import React from "react";
import { CardTitle, CardText } from "mdbreact";

const Feed = props => {
  const story = props.story;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <div className="info">
          <CardTitle>{story.restuarant}</CardTitle>
          <CardText>{story.incident_report}</CardText>
        </div>
      </div>
    </div>
  );
};

export default Feed;
