import React from "react";
import styled from "styled-components";
import heroVideo from "../assets/hero_video.mp4";


const HeroDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100vw;
    height: 80vh;
    isolation: isolate;
    padding: 3rem;
`;


const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 80vh;
    object-fit: cover;
    z-index: -1;
`;


const HeroVideoTitle = styled.h1`
text-align: left;
`;

const HeroVideoDesc = styled.p`
font-size: 1.5rem;
width: 45%;
margin-left: 0;
`;


function Hero() {
  return (
    <HeroDiv>
        <Video autoPlay loop>
            <source src={heroVideo} type="video/mp4" />
        </Video> 
        <div>
            <HeroVideoTitle>House of Ninjas</HeroVideoTitle>
            <HeroVideoDesc>Years after retiring from their formidable ninja lives, 
            a dysfunctional family must return to shadowy missions to 
            counteract a string of looming threats.</HeroVideoDesc>
        </div>

    </HeroDiv>

  );
  
}

export default Hero;