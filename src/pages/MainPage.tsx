import React from "react";
import { PageContainer } from "../styles/styles";

const MainPage = () => {
  return (
    <PageContainer>
      <h2>About What is this?</h2>
      <p>
        The Rick and Morty API is a REST(ish) and GraphQL API based on the
        television show Rick and Morty. You will have access to about hundreds
        of characters, images, locations and episodes. The Rick and Morty API is
        filled with canonical information as seen on the TV show.
      </p>
      <h2>Who are you?</h2>
      <p>
        We are Axel Fuhrmann, a guy who likes to develop things and Talita, the
        "Rick and Morty data scientist" and hardcore fan.
      </p>
      <h2>Why did you build this?</h2>
      <p>
        Because we were really interested in the idea of writing an open source
        project and also because Rick and Morty is our favorite show at that
        moment, so why not?
      </p>
      <h2>Technical stuff?</h2>
      <p>
        The entire project is hosted on Digital Ocean and Netlify. GraphQL cache
        is handled through Stellate. We use Node and MongoDB to serve the API.
      </p>
    </PageContainer>
  );
};

export default MainPage;
