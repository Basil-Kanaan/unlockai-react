import React, { useEffect, useState } from 'react';
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
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
    const [navBarHeight, setNavBarHeight] = useState(0);

    useEffect(() => {
        // Get the height of the NavBar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            setNavBarHeight(navbar.offsetHeight);
        }

        // Update the height when the window is resized
        const handleResize = () => {
            setNavBarHeight(navbar.offsetHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className={"landing-body"} style={{ paddingTop: navBarHeight }}>
                    <Hero id={""}/>
                    <CTA id={""}
                         left={<span style={{fontSize: "5rem"}}>Expand your reach<br/><span className={"gradient-text"}>in a few Clicks!</span></span>}
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
                         left={<span style={{fontSize: "5rem"}}>AI Scheduling,<br/><span className={"gradient-text"}>For You!</span></span>}
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
                </div>

            <NavBar/>
            <Background/>
            <button className="try-for-free-button">TRY FOR FREE</button>
        </div>
    );
};

export default Home;
