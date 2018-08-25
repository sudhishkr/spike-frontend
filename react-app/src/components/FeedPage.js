"use strict";

import Feed from "./Feed";
import React from "react";

const FeedPage = props => {
  if (!props.stories) {
    return <div className="article-preview">Loading...</div>;
  }

  if (props.stories.length === 0) {
    return <div className="article-preview">No feeds here... yet.</div>;
  }

  return (
    <div>
      {props.stories.map(story => {
        return <Feed story={story} key={story.name} />;
      })}
    </div>
  );
};

export default FeedPage;
