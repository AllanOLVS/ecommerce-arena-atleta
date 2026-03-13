import React from "react";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import QuickCategories from "../components/landing/QuickCategories";
import TrustBar from "../components/landing/TrustBar";
import Bestsellers from "../components/landing/Bestsellers";
import BrandsSection from "../components/landing/BrandsSection";
import PromoBanner from "../components/landing/PromoBanner";
import Testimonials from "../components/landing/Testimonials";
import CustomerCarousel from "../components/landing/CustomerCarousel";
import Footer from "../components/landing/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <QuickCategories />
            <TrustBar />
            <Bestsellers />
            <BrandsSection />
            <PromoBanner />
            <Testimonials />
            <CustomerCarousel />
            <Footer />
        </div>
    );
}