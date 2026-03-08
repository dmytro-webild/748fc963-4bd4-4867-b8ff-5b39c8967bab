"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Heart } from "lucide-react";

export default function MenuPage() {
  const navigationItems = [
    { name: "Home", id: "/" },
    { name: "Menu", id: "/menu" },
    { name: "About", id: "about" },
    { name: "Reservations", id: "reservations" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Quick Links",
      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "About Us", href: "about" },
        { label: "Contact", href: "contact" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Birthday Parties", href: "events" },
        { label: "Reserve Table", href: "reservations" },
        { label: "Private Events", href: "events" },
        { label: "Catering", href: "contact" },
      ],
    },
    {
      title: "Contact",
      items: [
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
      background="noise"
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

      <div id="menu-intro" data-section="menu-intro">
        <MediaAbout
          title="Explore Our Full Menu"
          description="Discover the complete range of delicious dishes we've crafted for you. From our signature crispy chicken to aromatic biryani, cold coffee specials, and grilled masterpieces — every dish is prepared with love and authentic flavors. Whether you're looking for something light, hearty, or indulgent, our menu has something for everyone."
          tag="Menu"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[{ text: "Reserve a Table", href: "reservations" }]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/enjoying-cup-coffee_1098-17179.jpg?_wi=2"
          imageAlt="Blackheart Cafe menu highlights"
          useInvertedBackground={false}
        />
      </div>

      <div id="all-dishes" data-section="all-dishes">
        <ProductCardTwo
          title="All Our Dishes"
          description="Browse through our complete collection of mouth-watering specialties"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Signature",
              name: "Crispy Chicken",
              price: "₹250",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "http://img.b2bpic.net/free-photo/crispy-chicken-with-ketchup-fresh-vegetable-salad_141793-2925.jpg?_wi=2",
              imageAlt: "Crispy chicken platter",
            },
            {
              id: "2",
              brand: "Signature",
              name: "Biryani Special",
              price: "₹300",
              rating: 5,
              reviewCount: "1.9k",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-boiled-rice-plate-with-boiled-potatoes-pumpkin_141793-3942.jpg?_wi=2",
              imageAlt: "Aromatic biryani rice",
            },
            {
              id: "3",
              brand: "Grill Masters",
              name: "Grilled Chicken",
              price: "₹280",
              rating: 5,
              reviewCount: "1.7k",
              imageSrc: "http://img.b2bpic.net/free-photo/steak-plate-with-vegetables-drink_23-2148167648.jpg?_wi=2",
              imageAlt: "Perfectly grilled chicken",
            },
            {
              id: "4",
              brand: "Signature",
              name: "Cold Coffee",
              price: "₹150",
              rating: 5,
              reviewCount: "1.5k",
              imageSrc: "http://img.b2bpic.net/free-photo/chocolate-panna-cotta_2829-12874.jpg?_wi=2",
              imageAlt: "Refreshing cold coffee",
            },
            {
              id: "5",
              brand: "Grill Masters",
              name: "Tandoori Chicken",
              price: "₹320",
              rating: 5,
              reviewCount: "1.3k",
              imageSrc: "http://img.b2bpic.net/free-photo/thai-style-spicy-meal-chicken-grilled-with-spicy-papaya-salad-cold-drink_1150-6311.jpg?_wi=2",
              imageAlt: "Tandoori chicken specialty",
            },
            {
              id: "6",
              brand: "Signature",
              name: "Butter Chicken",
              price: "₹290",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "http://img.b2bpic.net/free-photo/chicken-croquettes-served-with-french-fries-mayo-ketchup_140725-10463.jpg?_wi=2",
              imageAlt: "Creamy butter chicken",
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