import React from 'react';
import Hero from '../components/LandingPage/Hero/Hero';
import Features from '../components/LandingPage/Features/Features';
import HowItWorks from '../components/LandingPage/HowItWorks/HowItWorks';
import Testimonials from '../components/LandingPage/Testimonials/Testimonials';
import Pricing from '../components/LandingPage/Pricing/Pricing';
import FAQ from '../components/LandingPage/FAQ/FAQ';
import InfluencerMarquee from "../components/LandingPage/InfluencerMarquee/InfluencerMarquee";
import Footer from "../components/LandingPage/Footer/Footer";

import "../styles/home.css";
import CTA from "../components/LandingPage/CTA/CTA";
import Trial from "../components/LandingPage/Trial/Trial";

const Home = () => {

    return (
        <div>
            <Hero/>
            <CTA
                left="Unlock Your Social Media Mastery With UnlockAI"
                right="UnlockAI simplifies social media with advanced AI. We tune into your brand’s voice, aiding in content creation, scheduling, and audience engagement. Our intuitive tools let you grow your presence effortlessly while we manage the details. With UnlockAI, strategically enhance your digital footprint."
            />
            <InfluencerMarquee/>

            <Features/>
            <CTA
                left="AI Scheduling, so you don’t have to!"
                right="UnlockAI allows you to create and schedule your social media posts all in one! Talk to experts to get the best advice."
            />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Trial />
            <Footer />

            <button className="try-for-free-button">TRY FOR FREE</button>
        </div>
    );
};

export default Home;
