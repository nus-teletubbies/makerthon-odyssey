import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import background from "../../backgrounds/choose-page-galaxy.mp4";
import styled from "styled-components/macro";
import {
  VideoBackground,
  WholePage,
  LightButton,
  Wrapper,
  Button,
} from "../../styles/globalStyles";
import {
  TextContainer,
  LinkContainer,
  NavigationButtonContainer,
  SelectedLightButton,
} from "../../styles/featurePageStyles";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { containerVariants } from "../../styles/animatedStyles";
import "../../styles/animations.css";

function ChooseProblem() {
  const [displayEmotion, setDisplayEmotion] = useState(true);
  const [emotion, setEmotion] = useState("");
  const [displayEvent, setDisplayEvent] = useState(false);
  const [event, setEvent] = useState("");

  const handleSelectEmotion = (emotion) => {
    setEmotion(emotion);
  };

  const handleConfirmEmotion = () => {
    setDisplayEmotion(false);
    setDisplayEvent(true);
  };

  const handleSelectEvent = (event) => {
    setEvent(event);
  };

  const handleBackToSelectEmotion = () => {
    setEmotion("");
    setEvent("");
    setDisplayEmotion(true);
    setDisplayEvent(false);
  };

  const handleConfirmEvent = () => {
    setDisplayEvent(false);
  };

  const handleBackToSelectEvent = () => {
    setEvent("");
    setDisplayEvent(true);
  };

  const AnimatedSelectionButton = (label, selection) => {
    return (
      <SelectedLightButton
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => selection(label)}
      >
        {label}
      </SelectedLightButton>
    );
  };

  return (
    <motion.div
      className="page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <WholePage>
        {displayEmotion ? (
          <Wrapper>
            <TextContainer>Tell me how you feel...</TextContainer>
            <LinkContainer>
              {AnimatedSelectionButton("a bit sad", handleSelectEmotion)}
              {AnimatedSelectionButton("very sad", handleSelectEmotion)}
            </LinkContainer>
            <NavigationButtonContainer>
              {emotion && <Button onClick={handleConfirmEmotion}>NEXT</Button>}
            </NavigationButtonContainer>
          </Wrapper>
        ) : (
          <>
            {displayEvent ? (
              <Wrapper>
                <TextContainer>What makes you feel this way...?</TextContainer>
                <LinkContainer>
                  {AnimatedSelectionButton("School", handleSelectEvent)}
                  {AnimatedSelectionButton(
                    "Work/Internship",
                    handleSelectEvent
                  )}
                  {AnimatedSelectionButton("Private Life", handleSelectEvent)}
                </LinkContainer>
                <NavigationButtonContainer>
                  <Button onClick={handleBackToSelectEmotion}>PREVIOUS</Button>
                  {event && <Button onClick={handleConfirmEvent}>NEXT</Button>}
                </NavigationButtonContainer>
              </Wrapper>
            ) : (
              <Wrapper>
                <TextContainer>
                  You're {emotion} about {event}
                </TextContainer>
                <NavigationButtonContainer>
                  <Button onClick={handleBackToSelectEvent}>PREVIOUS</Button>
                  <Link to="/EmotionPlanet">
                    <Button>CONFIRM</Button>
                  </Link>
                </NavigationButtonContainer>
              </Wrapper>
            )}
          </>
        )}
      </WholePage>
    </motion.div>
  );
}

export default ChooseProblem;
