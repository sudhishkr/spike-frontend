"use strict";

import Feed from "./Feed";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

const FeedPage = props => {
  if (!props.stories) {
    return <div className="article-preview">Loading...</div>;
  }

  if (props.stories.length === 0) {
    return <div className="article-preview">No feeds here... yet.</div>;
  }

  return (
    <div
      style={{
        marginLeft: 200,
        width: 1000
      }}
    >
      {props.stories.map(story => {
        return (
          <Card>
            <CardBody cascade>
              <Feed story={story} key={story.name} />
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default FeedPage;
