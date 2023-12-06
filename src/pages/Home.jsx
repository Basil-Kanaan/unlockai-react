import React from 'react';
import HeroSection from '../components/LandingPage/HeroSection/HeroSection';
import Features from '../components/LandingPage/Features/Features';
import HowItWorks from '../components/LandingPage/HowItWorks/HowItWorks';
import Testimonials from '../components/LandingPage/Testimonials/Testimonials';
import Pricing from '../components/LandingPage/Pricing/Pricing';
import FAQ from '../components/LandingPage/FAQ/FAQ';
import InfluencerMarquee from "../components/LandingPage/InfluencerMarquee/InfluencerMarquee";
import Footer from "../components/LandingPage/Footer/Footer";

const Home = () => {

    return (
        <div>
            <HeroSection/>
            <InfluencerMarquee/>

            <Features/>
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;
