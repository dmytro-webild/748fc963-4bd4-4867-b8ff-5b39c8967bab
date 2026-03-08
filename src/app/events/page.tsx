"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FooterBase from "@/components/sections/footer/FooterBase";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumSizeLargeTitles"
      background="circleGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "/" },
            { name: "Menu", id: "/menu" },
            { name: "About", id: "/about" },
            { name: "Reservations", id: "/reservations" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="Blackheart Cafe"
          bottomLeftText="Where Gaya Comes to Chill"
          bottomRightText="7903926787"
        />
      </div>

      <div id="gallery" data-section="gallery">
        <FeatureCardTwentySix
          title="Gallery"
          description="Moments captured at Blackheart Cafe - where memories are made"
          tag="Gallery"
          tagIcon={ArrowRight}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              title: "Interior Design",              description: "Stylish decor creating the perfect ambience",              imageSrc:
                "http://img.b2bpic.net/free-photo/restaurant-private-room-with-table-14-persons-wooden-ceiling-brick-walls-fireplace_140725-8452.jpg",              imageAlt: "Cafe interior design",              buttonIcon: ArrowRight,
            },
            {
              title: "Food Excellence",              description: "Delicious dishes prepared with care",              imageSrc:
                "http://img.b2bpic.net/free-photo/top-close-up-view-cake-cake-with-berries-jam-lemons-green-candies-cookies_140725-71815.jpg",              imageAlt: "Food plating and presentation",              buttonIcon: ArrowRight,
            },
            {
              title: "Social Gatherings",              description: "Perfect place for friends to meet",              imageSrc:
                "http://img.b2bpic.net/free-photo/happy-excited-friends-reunited_23-2149165087.jpg",              imageAlt: "Friends enjoying time together",              buttonIcon: ArrowRight,
            },
            {
              title: "Birthday Celebrations",              description: "Memorable moments for special days",              imageSrc:
                "http://img.b2bpic.net/free-photo/after-party-girls_23-2147640555.jpg",              imageAlt: "Birthday party setup",              buttonIcon: ArrowRight,
            },
            {
              title: "Evening Vibes",              description: "Romantic atmosphere in the evenings",              imageSrc:
                "http://img.b2bpic.net/free-photo/guy-girl-hugging-each-other-background-night-port_1153-3421.jpg",              imageAlt: "Evening ambience and lighting",              buttonIcon: ArrowRight,
            },
            {
              title: "Signature Drinks",              description: "Refreshing beverages and mocktails",              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-having-iced-coffee-break-outside_23-2149567283.jpg",              imageAlt: "Cold coffee and beverages",              buttonIcon: ArrowRight,
            },
          ]}
        />
      </div>

      <div id="experience" data-section="experience">
        <MediaAbout
          title="Plan Your Celebration Here"
          description="From intimate gatherings to grand birthday bashes, Blackheart Cafe is the perfect venue for your special moments. Our dedicated team ensures every detail is perfect, from decorations to food arrangements. Contact us today to discuss your event and let us create memories that last a lifetime."
          tag="Book Now"
          tagIcon={Calendar}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Contact Us",              href: "#contact"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/after-party-girls_23-2147640555.jpg"
          imageAlt="Birthday party decoration cafe setup"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Blackheart Cafe"
          copyrightText="© 2025 Blackheart Cafe. All rights reserved."
          columns={[
            {
              title: "Quick Links",              items: [
                {
                  label: "Home",                  href: "/"},
                {
                  label: "Menu",                  href: "/menu"},
                {
                  label: "About Us",                  href: "/about"},
                {
                  label: "Contact",                  href: "/contact"},
              ],
            },
            {
              title: "Services",              items: [
                {
                  label: "Birthday Parties",                  href: "/events"},
                {
                  label: "Reserve Table",                  href: "/reservations"},
                {
                  label: "Private Events",                  href: "/events"},
                {
                  label: "Catering",                  href: "/contact"},
              ],
            },
            {
              title: "Contact",              items: [
                {
                  label: "Call: 7903926787",                  href: "#"},
                {
                  label: "Call: 7004607314",                  href: "#"},
                {
                  label: "Email: info@blackheartcafe.com",                  href: "#"},
                {
                  label: "Katari Hill Road, Gaya",                  href: "#"},
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}