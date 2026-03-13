import React from "react";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import QuickCategories from "../components/landing/QuickCategories";
import BrandsSection from "../components/landing/BrandsSection";
import Bestsellers from "../components/landing/Bestsellers";
import PromoBanner from "../components/landing/PromoBanner";
import Testimonials from "../components/landing/Testimonials";
import CustomerCarousel from "../components/landing/CustomerCarousel";
import TrustBar from "../components/landing/TrustBar";
import NewsletterCTA from "../components/landing/NewsletterCTA";
import Footer from "../components/landing/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <QuickCategories />
            <BrandsSection />
            <Bestsellers />
            <PromoBanner />
            <Testimonials />
            <CustomerCarousel />
            <TrustBar />
            <NewsletterCTA />
            <Footer />
        </div>
    );
}