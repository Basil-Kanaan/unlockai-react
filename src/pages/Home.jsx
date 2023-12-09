import React from 'react';
import Hero from '../components/LandingPage/Hero/Hero';
import Features from '../components/LandingPage/Features/Features';
import Testimonials from '../components/LandingPage/Testimonials/Testimonials';
import Pricing from '../components/LandingPage/Pricing/Pricing';
import FAQ from '../components/LandingPage/FAQ/FAQ';
import InfluencerMarquee from "../components/LandingPage/InfluencerMarquee/InfluencerMarquee";
import Footer from "../components/LandingPage/Footer/Footer";

import "../styles/home.css";
import CTA from "../components/LandingPage/CTA/CTA";
import Trial from "../components/LandingPage/Trial/Trial";
import Background from "../components/LandingPage/Background/Background";
import Suggestions from "../components/LandingPage/Suggestions/Suggestions";

const Home = () => {

        return (
            <div>
                    <Hero id={""} />
                    <CTA id={""}
                         left="Expand your Reach in a few Clicks!"
                         right="Supercharge your game with UnlockAI! Create, schedule, and engage with ease. 🚀 Elevate your online presence with a click – it's time to shine and stand out! Ready to level up?"
                    />
                    <InfluencerMarquee id={""}/>

                    <Features id={"features-section"}/>
                    <CTA id={""}
                         left="AI Scheduling, for You!"
                         right="UnlockAI allows you to create and schedule your social media posts all in one! Talk to experts to get the best advice."
                         button="Unlock your Potential"
                    />
                    <Testimonials id={"testimonials-section"} />
                    <Pricing id={"pricing-section"} />
                    <FAQ id={"faq-section"} />
                    <Suggestions />
                    <Trial id={""} />
                    <Footer />

                <button className="try-for-free-button">TRY FOR FREE</button>
                <Background />
            </div>
        );
};

export default Home;
