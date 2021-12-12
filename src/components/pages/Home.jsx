import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import background from "../../backgrounds/home-galaxy.mp4";
import styled from "styled-components/macro";
import {
  LightButton,
  LinkContainer,
  VideoBackground,
} from "../../globalStyles";
import { TextContainer, InnerWrapper } from "../../globalStyles";
import { useEffect } from "react";

function Home() {
  return (
    <>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <InnerWrapper>
        <TextContainer>
          Hey Earthing! <br />
          How are you feeling today?
        </TextContainer>
        <LinkContainer>
          <Link to="/ChooseProblem">
            <LightButton>I'm not doing very well...</LightButton>
          </Link>
          <Link to="/ChooseProblem">
            <LightButton>
              I'm fine, but there's someone I'm worried about...
            </LightButton>
          </Link>
          <Link to="/ChooseProblem">
            <LightButton>I'm fine, and I want to stay this way!</LightButton>
          </Link>
        </LinkContainer>
      </InnerWrapper>
    </>
  );
}

export default Home;
