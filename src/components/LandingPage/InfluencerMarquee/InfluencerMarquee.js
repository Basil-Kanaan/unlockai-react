import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import InfluencerCard from "./InfluencerCard";

// Import the image files
import bearwindows from '../../../assets/images/InfluencerMarquee/bearwindows-21.7K.jpg';
import benbacalestates from '../../../assets/images/InfluencerMarquee/benbacalestates-46.7K.jpg';
import colossalproperties from '../../../assets/images/InfluencerMarquee/colossalproperties-26.7K.jpg';
import davidhatef from '../../../assets/images/InfluencerMarquee/davidhatef-10.8K.jpg';
import kobikarp from '../../../assets/images/InfluencerMarquee/kobikarp-159K.jpg';
import livingproofphotography from '../../../assets/images/InfluencerMarquee/livingproof.photography-162K.jpg';
import maspropertymarbella from '../../../assets/images/InfluencerMarquee/masproperty.marbella-95.3K.jpg';
import modernmiami from '../../../assets/images/InfluencerMarquee/modernmiami-21.3K.jpg';
import msluxuryhomes from '../../../assets/images/InfluencerMarquee/msluxuryhomes-30.5K.jpg';
import nestseekers from '../../../assets/images/InfluencerMarquee/nestseekers-322k.jpg';
import nikolklein from '../../../assets/images/InfluencerMarquee/nikolklein-24.7K.jpg';
import pamandtoniteam from '../../../assets/images/InfluencerMarquee/pamandtoniteam-17K.jpg';
import prestigetony from '../../../assets/images/InfluencerMarquee/prestige_tony-68K.jpg';
import rockwelldevelopers from '../../../assets/images/InfluencerMarquee/rockwelldevelopers-22.8K.jpg';
import sykesstyle from '../../../assets/images/InfluencerMarquee/sykesstyle-27.2K.jpg';
import volaredevelopments from '../../../assets/images/InfluencerMarquee/volaredevelopments-4,323.jpg';
import whitelightphoto from '../../../assets/images/InfluencerMarquee/whitelightphoto-19.4k.jpg';

const InfluencerMarquee = () => {
    const influencerData = [
        { platform: 'Instagram', accountName: 'bearwindows', followerCount: '21.7K', imageUrl: bearwindows },
        { platform: 'Instagram', accountName: 'benbacalestates', followerCount: '46.7K', imageUrl: benbacalestates },
        { platform: 'Instagram', accountName: 'colossalproperties', followerCount: '26.7K', imageUrl: colossalproperties },
        { platform: 'Instagram', accountName: 'davidhatef', followerCount: '10.8K', imageUrl: davidhatef },
        { platform: 'Instagram', accountName: 'kobikarp', followerCount: '159K', imageUrl: kobikarp },
        { platform: 'Instagram', accountName: 'livingproofphotography', followerCount: '162K', imageUrl: livingproofphotography },
        { platform: 'Instagram', accountName: 'maspropertymarbella', followerCount: '95.3K', imageUrl: maspropertymarbella },
        { platform: 'Instagram', accountName: 'modernmiami', followerCount: '21.3K', imageUrl: modernmiami },
        { platform: 'Instagram', accountName: 'msluxuryhomes', followerCount: '30.5K', imageUrl: msluxuryhomes },
        { platform: 'Instagram', accountName: 'nestseekers', followerCount: '322k', imageUrl: nestseekers },
        { platform: 'Instagram', accountName: 'nikolklein', followerCount: '24.7K', imageUrl: nikolklein },
        { platform: 'Instagram', accountName: 'pamandtoniteam', followerCount: '17K', imageUrl: pamandtoniteam },
        { platform: 'Instagram', accountName: 'prestigetony', followerCount: '68K', imageUrl: prestigetony },
        { platform: 'Instagram', accountName: 'rockwelldevelopers', followerCount: '22.8K', imageUrl: rockwelldevelopers },
        { platform: 'Instagram', accountName: 'sykesstyle', followerCount: '27.2K', imageUrl: sykesstyle },
        { platform: 'Instagram', accountName: 'volaredevelopments', followerCount: '4,323', imageUrl: volaredevelopments },
        { platform: 'Instagram', accountName: 'whitelightphoto', followerCount: '19.4k', imageUrl: whitelightphoto },
    ];


    return (
        <Box sx={{ my: 10 }}>
            <Container sx={{ marginBottom: "20px" }}>
                <Typography variant={"h2"} sx={{ textAlign: "left" }}>
                    Trusted by Influencers<br />Across the Globe
                </Typography>
            </Container>
            <Marquee gradient gradientWidth={200}>
                {influencerData.map((influencer, index) => (
                    <InfluencerCard key={index} {...influencer} />
                ))}
            </Marquee>
        </Box>
    );
};

export default InfluencerMarquee;
