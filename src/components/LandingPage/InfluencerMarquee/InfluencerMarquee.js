import React from 'react';
import { Container, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import InfluencerCard from "./InfluencerCard";

const InfluencerMarquee = () => {
    const influencerData = Array.from({ length: 20 }, (_, index) => ({
        platform: 'Instagram', // You can change these values as needed
        accountName: `Influencer ${index + 1}`,
        followerCount: `${Math.floor(Math.random() * 1000000)}`, // Random follower count for demo
        imageUrl: `https://placekitten.com/140/140?image=${index + 1}`, // Placeholder image for demo
    }));

    return (
        <div>
            <Container sx={{ marginBottom: "20px" }}>
                <Typography variant={"h2"} sx={{ textAlign: "left" }}>
                    Trusted by Influencers Across the Globe!
                </Typography>
            </Container>
            <Marquee gradient gradientWidth={200}>
                {influencerData.map((influencer, index) => (
                    <InfluencerCard key={index} {...influencer} />
                ))}
            </Marquee>
        </div>
    );
};

export default InfluencerMarquee;
