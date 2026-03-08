"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import MediaAbout from "@/components/sections/about/MediaAbout";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Coffee, Star, Flame, Heart, Quote, Camera, ArrowRight } from "lucide-react";

export default function HomePage() {
  const navigationItems = [
    { name: "Home", id: "/" },
    { name: "Menu", id: "/menu" },
    { name: "About", id: "/about" },
    { name: "Reservations", id: "/reservations" },
    { name: "Contact", id: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Quick Links",      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",      items: [
        { label: "Birthday Parties", href: "/events" },
        { label: "Reserve Table", href: "/reservations" },
        { label: "Private Events", href: "/events" },
        { label: "Catering", href: "/contact" },
      ],
    },
    {
      title: "Contact",      items: [
        { label: "Call: 7903926787", href: "#" },
        { label: "Call: 7004607314", href: "#" },
        { label: "Email: info@blackheartcafe.com", href: "#" },
        { label: "Katari Hill Road, Gaya", href: "#" },
      ],
    },
  ];

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
          navItems={navigationItems}
          brandName="Blackheart Cafe"
          bottomLeftText="Where Gaya Comes to Chill"
          bottomRightText="7903926787"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="The Most Loved Cafe in Gaya"
          description="Amazing food, cozy ambience, and the perfect place to chill with friends, family, or someone special. Experience unforgettable moments at Blackheart Cafe."
          tag="Welcome"
          tagIcon={Coffee}
          tagAnimation="slide-up"
          buttons={[
            { text: "View Menu", href: "/menu" },
            { text: "Reserve Table", href: "/reservations" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          leftCarouselItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/enjoying-cup-coffee_1098-17179.jpg",              imageAlt: "Stylish cafe interior with warm lighting"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/sharming-elegant-young-african-american-woman-with-long-curly-hair-wearing-jumpsuit-posing-cafe-terrace-outdoor-against-christmas-decoration-new-year-eve_627829-5684.jpg",              imageAlt: "Cozy seating area"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/moments-chilling-couple-love-sitting-terrace-drinking-morning-coffee-enjoying-breakfast_273443-2956.jpg",              imageAlt: "Couple enjoying coffee together"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/team-young-colleagues-having-meeting-cafe_273609-16250.jpg",              imageAlt: "Friends having fun at the cafe"},
          ]}
          rightCarouselItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/chicken-croquettes-served-with-french-fries-mayo-ketchup_140725-10463.jpg",              imageAlt: "Crispy chicken signature dish"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-cooked-rice-with-seasonings-dark-floor-food-dish-dark-meal-photo_140725-82282.jpg",              imageAlt: "Signature biryani"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/chocolate-panna-cotta_2829-12874.jpg",              imageAlt: "Refreshing cold coffee"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/thai-style-spicy-meal-chicken-grilled-with-spicy-papaya-salad-cold-drink_1150-6311.jpg",              imageAlt: "Grilled chicken specialty"},
          ]}
          carouselPosition="right"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Why People Love Blackheart Cafe"
          description="Trusted by the youth of Gaya for exceptional food and vibes"
          tag="Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Stylish Ambience",            "Perfect Hangout Spot",            "Crispy Chicken & Biryani",            "Great for Celebrations",            "Most Popular in Gaya",            "Affordable Cafe",            "Youth Friendly"]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="featured-dishes" data-section="featured-dishes">
        <ProductCardTwo
          title="Featured Specialties"
          description="Try our most loved dishes handpicked by our team"
          tag="Popular"
          tagIcon={Flame}
          tagAnimation="slide-up"
          buttons={[{ text: "Explore Full Menu", href: "/menu" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",              brand: "Signature",              name: "Crispy Chicken",              price: "₹250",              rating: 5,
              reviewCount: "2.1k",              imageSrc: "http://img.b2bpic.net/free-photo/crispy-chicken-with-ketchup-fresh-vegetable-salad_141793-2925.jpg",              imageAlt: "Crispy chicken platter"},
            {
              id: "2",              brand: "Signature",              name: "Biryani Special",              price: "₹300",              rating: 5,
              reviewCount: "1.9k",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-boiled-rice-plate-with-boiled-potatoes-pumpkin_141793-3942.jpg",              imageAlt: "Aromatic biryani rice"},
            {
              id: "3",              brand: "Grill Masters",              name: "Grilled Chicken",              price: "₹280",              rating: 5,
              reviewCount: "1.7k",              imageSrc: "http://img.b2bpic.net/free-photo/steak-plate-with-vegetables-drink_23-2148167648.jpg",              imageAlt: "Perfectly grilled chicken"},
          ]}
        />
      </div>

      <div id="experience" data-section="experience">
        <MediaAbout
          title="Not Just a Cafe — It's a Vibe"
          description="Blackheart Cafe has become one of Gaya's favorite hangout spots. From relaxed coffee dates to birthday celebrations, people come here to enjoy great food, music, and an atmosphere that feels alive. Whether you're meeting friends, planning a date, or celebrating a special moment — we create the perfect setting."
          tag="Experience"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[{ text: "Book Your Celebration", href: "/events" }]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/laughing-chatting-afterworks-meeting-with-coworkers-cozy-small-local-cafe_8353-10284.jpg"
          imageAlt="Friends celebrating at Blackheart Cafe"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Loved by Our Community"
          description="Real reviews from people who've made Blackheart Cafe their favorite hangout"
          tag="Testimonials"
          tagIcon={Quote}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              title: "Best Cafe in Gaya",              quote: "Amazing ambience and good food. Perfect place to hang out with friends. The staff is friendly and the vibe is always positive.",              name: "Sumit Kumar",              role: "Local Visitor",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15567.jpg",              imageAlt: "Sumit Kumar"},
            {
              id: "2",              title: "Perfect for Couples",              quote: "Had a wonderful date here with my girlfriend. The cozy atmosphere, good music, and delicious food made it special. Definitely coming back!",              name: "Aman Kumar",              role: "Regular Customer",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-outdoors-portrait_158595-3563.jpg",              imageAlt: "Aman Kumar"},
            {
              id: "3",              title: "Love the Decor",              quote: "The interior design is stunning. It feels like a high-end cafe but the prices are affordable. Great for family hangouts too.",              name: "Mathan Kumar",              role: "Frequent Visitor",              imageSrc: "http://img.b2bpic.net/free-photo/dreamer-stylish-macho-man-gray-suit-hat-glasses-posed-roof_627829-7653.jpg",              imageAlt: "Mathan Kumar"},
            {
              id: "4",              title: "Birthday Party Success",              quote: "Organized my birthday party here and it was fantastic. The team helped with decorations, the food was amazing, and my friends loved it. Highly recommended!",              name: "Priya Singh",              role: "Event Customer",              imageSrc: "http://img.b2bpic.net/free-photo/thoughtful-blond-business-woman-sitting-couch_23-2148095700.jpg",              imageAlt: "Priya Singh"},
          ]}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <FeatureCardTwentySix
          title="Gallery"
          description="Moments captured at Blackheart Cafe - where memories are made"
          tag="Gallery"
          tagIcon={Camera}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              title: "Interior Design",              description: "Stylish decor creating the perfect ambience",              imageSrc: "http://img.b2bpic.net/free-photo/restaurant-private-room-with-table-14-persons-wooden-ceiling-brick-walls-fireplace_140725-8452.jpg",              imageAlt: "Cafe interior design",              buttonIcon: ArrowRight,
            },
            {
              title: "Food Excellence",              description: "Delicious dishes prepared with care",              imageSrc: "http://img.b2bpic.net/free-photo/top-close-up-view-cake-cake-with-berries-jam-lemons-green-candies-cookies_140725-71815.jpg",              imageAlt: "Food plating and presentation",              buttonIcon: ArrowRight,
            },
            {
              title: "Social Gatherings",              description: "Perfect place for friends to meet",              imageSrc: "http://img.b2bpic.net/free-photo/happy-excited-friends-reunited_23-2149165087.jpg",              imageAlt: "Friends enjoying time together",              buttonIcon: ArrowRight,
            },
            {
              title: "Birthday Celebrations",              description: "Memorable moments for special days",              imageSrc: "http://img.b2bpic.net/free-photo/after-party-girls_23-2147640555.jpg",              imageAlt: "Birthday party setup",              buttonIcon: ArrowRight,
            },
            {
              title: "Evening Vibes",              description: "Romantic atmosphere in the evenings",              imageSrc: "http://img.b2bpic.net/free-photo/guy-girl-hugging-each-other-background-night-port_1153-3421.jpg",              imageAlt: "Evening ambience and lighting",              buttonIcon: ArrowRight,
            },
            {
              title: "Signature Drinks",              description: "Refreshing beverages and mocktails",              imageSrc: "http://img.b2bpic.net/free-photo/woman-having-iced-coffee-break-outside_23-2149567283.jpg",              imageAlt: "Cold coffee and beverages",              buttonIcon: ArrowRight,
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Blackheart Cafe"
          copyrightText="© 2025 Blackheart Cafe. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}