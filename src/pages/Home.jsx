import React from 'react';
import HeroSection from '../components/LandingPage/HeroSection/HeroSection';
import Features from '../components/LandingPage/Features/Features';
import HowItWorks from '../components/LandingPage/HowItWorks/HowItWorks';
import Testimonials from '../components/LandingPage/Testimonials/Testimonials';
import Pricing from '../components/LandingPage/Pricing/Pricing';
import FAQ from '../components/LandingPage/FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Features/>
            <HowItWorks/>
            <Testimonials/>
            <Pricing/>
            <FAQ/>
        </div>
    );
};

export default Home;
