import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import MiniBarBubble from "../../MiniBarBubble/MiniBarBubble";
import FAQAccordion from './FAQAccordion';

const FAQ = ({ id }) => {
    // FAQ Dictionary
    const QA = {
        "What are the Plan Options?": "Unlock AI provides various plan options to suit your needs, including different features and subscription durations. Explore our Plans page for more details.",
        "Can I cancel anytime?": "Absolutely! Unlock AI offers flexibility, and you can cancel your subscription at any time with no additional charges.",
        "Is there a free trial for UnlockAI?": "Yes, Unlock AI offers a free trial period. You can explore the platform and its features before deciding on a subscription.",
        "Can I post across Instagram, Facebook, TikTok & Youtube?": "Yes, Unlock AI supports multi-platform posting. You can seamlessly publish your content on Instagram, Facebook, TikTok, and YouTube.",
        "Can Unlock AI help me craft my next post?": "Certainly! Unlock AI provides AI-driven content suggestions to help you create engaging and effective posts.",
        "How can I contact customer support?": "Our customer support team is available 24/7. You can reach out to us via email at support@example.com or call our helpline at +1-XXX-XXX-XXXX.",
    };

    return (
        <Box id={id} sx={{ textAlign: 'center', py: 20 }}>
            {/* FAQ Title */}
            <MiniBarBubble
                backgroundColor="rgba(96, 2, 124, 0.15)"
                color="#60027C"
            >
                <Typography variant={"body1"} color={"#60027C"}>
                    FAQ
                </Typography>
                <Typography variant={"body1"} color={"rgba(96, 2, 124, 0.5)"}>
                    Help Center
                </Typography>
            </MiniBarBubble>

            {/* Have a question? */}
            <Typography variant="h2" sx={{ my: 4 }}>
                Have a question?
            </Typography>

            {/* Support Team */}
            <Typography variant="body1" color={"gray"} sx={{ mx: 'auto', mb: 5, maxWidth: 400 }}>
                Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.
            </Typography>

            {/* FAQ Accordions */}
            <Container maxWidth={"md"}>
                {Object.keys(QA).map((summary, index) => (
                    <FAQAccordion
                        key={index}
                        summary={summary}
                        details={QA[summary]}
                    />
                ))}
            </Container>
        </Box>
    );
};

export default FAQ;
