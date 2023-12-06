import React from 'react';
import {Container, Typography} from "@mui/material";
import Marquee from "react-fast-marquee";
import InfluencerCard from "./InfluencerCard";

const InfluencerMarquee = () => {

    return (
        <div>
            <Container sx={{marginBottom: "20px"}}>
                <Typography variant={"h2"} sx={{textAlign: "left"}}>
                    Trusted by Influencers Across the Globe!
                </Typography>
            </Container>
            <Marquee gradient gradientWidth={200}>
                <InfluencerCard />
                <InfluencerCard />
                <InfluencerCard />
                <InfluencerCard />
                <InfluencerCard />
            </Marquee>
        </div>
    );
};

export default InfluencerMarquee;
