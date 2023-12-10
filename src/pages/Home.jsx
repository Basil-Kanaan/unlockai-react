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
            <Hero id={""}/>
            <CTA id={""}
                 left={<>Expand your reach<br/><span className={"gradient-text"}>in a few Clicks!</span></>}
                 right={<>
                     Supercharge your game with{' '}
                     <span className={"gradient-text"}
                           style={{fontWeight: 800, fontSize: "1.2rem"}}>UnlockAI!</span> Create, schedule, and engage
                     with ease. <br/><br/> <span className={"gradient-text"}
                                                 style={{fontWeight: 800, fontSize: "1.2rem"}}>🚀 ELEVATE</span> your
                     online presence with a click – it's time to shine and
                     stand out! <br/><br/>Ready to level up?!
                 </>}
            />
            <InfluencerMarquee id={""}/>

            <Features id={"features-section"}/>
            <CTA id={""}
                 left={<>AI Scheduling,<br/><span className={"gradient-text"}>For You!</span></>}
                 right={
                     <>
                         <span className={"gradient-text"}
                               style={{fontWeight: 800, fontSize: "1.2rem"}}>UnlockAI</span> allows you to create and
                         schedule your social media posts all in one! Talk to experts to get the best
                         advice.
                     </>
                 }
            />
            <Testimonials id={"testimonials-section"}/>
            <Pricing id={"pricing-section"}/>
            <FAQ id={"faq-section"}/>
            <Suggestions/>
            <Trial id={""}/>
            <Footer/>

            <button className="try-for-free-button">TRY FOR FREE</button>
            <Background/>
        </div>
    );
};

export default Home;
