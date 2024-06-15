// src/GitHubCard.js
import React from "react";
import Card from "react-bootstrap/Card";

const GitHubCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="your-photo-url" alt="Your Name" />
      <Card.Body>
        <Card.Title>Your GitHub Username</Card.Title>
        <Card.Text>
          A brief blurb about you. This can be anything like your interests,
          what you do, etc.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GitHubCard;
