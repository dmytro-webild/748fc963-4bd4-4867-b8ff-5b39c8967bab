"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import MediaAbout from "@/components/sections/about/MediaAbout";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FooterBase from "@/components/sections/footer/FooterBase";
import Link from "next/link";

export default function AboutPage() {
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
          navItems={[
            { name: "Home", id: "/" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "/about" },
            { name: "Reservations", id: "reservations" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Blackheart Cafe"
          bottomLeftText="Where Gaya Comes to Chill"
          bottomRightText="7903926787"
        />
      </div>

      <div id="experience" data-section="experience">
        <MediaAbout
          title="Not Just a Cafe — It's a Vibe"
          description="Blackheart Cafe has become one of Gaya's favorite hangout spots. From relaxed coffee dates to birthday celebrations, people come here to enjoy great food, music, and an atmosphere that feels alive. Whether you're meeting friends, planning a date, or celebrating a special moment — we create the perfect setting."
          tag="Experience"
          tagIcon="Heart"
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Book Your Celebration",
              href: "/events",
            },
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/laughing-chatting-afterworks-meeting-with-coworkers-cozy-small-local-cafe_8353-10284.jpg"
          imageAlt="friends celebrating cafe happy moment"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Loved by Our Community"
          description="Real reviews from people who've made Blackheart Cafe their favorite hangout"
          tag="Testimonials"
          tagIcon="Quote"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",
              title: "Best Cafe in Gaya",
              quote:
                "Amazing ambience and good food. Perfect place to hang out with friends. The staff is friendly and the vibe is always positive.",
              name: "Sumit Kumar",
              role: "Local Visitor",
              imageSrc:
                "http://img.b2bpic.net/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15567.jpg",
              imageAlt: "Sumit Kumar",
            },
            {
              id: "2",
              title: "Perfect for Couples",
              quote:
                "Had a wonderful date here with my girlfriend. The cozy atmosphere, good music, and delicious food made it special. Definitely coming back!",
              name: "Aman Kumar",
              role: "Regular Customer",
              imageSrc:
                "http://img.b2bpic.net/free-photo/handsome-man-outdoors-portrait_158595-3563.jpg",
              imageAlt: "Aman Kumar",
            },
            {
              id: "3",
              title: "Love the Decor",
              quote:
                "The interior design is stunning. It feels like a high-end cafe but the prices are affordable. Great for family hangouts too.",
              name: "Mathan Kumar",
              role: "Frequent Visitor",
              imageSrc:
                "http://img.b2bpic.net/free-photo/dreamer-stylish-macho-man-gray-suit-hat-glasses-posed-roof_627829-7653.jpg",
              imageAlt: "Mathan Kumar",
            },
            {
              id: "4",
              title: "Birthday Party Success",
              quote:
                "Organized my birthday party here and it was fantastic. The team helped with decorations, the food was amazing, and my friends loved it. Highly recommended!",
              name: "Priya Singh",
              role: "Event Customer",
              imageSrc:
                "http://img.b2bpic.net/free-photo/thoughtful-blond-business-woman-sitting-couch_23-2148095700.jpg",
              imageAlt: "Priya Singh",
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Blackheart Cafe"
          copyrightText="© 2025 Blackheart Cafe. All rights reserved."
          columns={[
            {
              title: "Quick Links",
              items: [
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Menu",
                  href: "#menu",
                },
                {
                  label: "About Us",
                  href: "/about",
                },
                {
                  label: "Contact",
                  href: "#contact",
                },
              ],
            },
            {
              title: "Services",
              items: [
                {
                  label: "Birthday Parties",
                  href: "/events",
                },
                {
                  label: "Reserve Table",
                  href: "#reservations",
                },
                {
                  label: "Private Events",
                  href: "/events",
                },
                {
                  label: "Catering",
                  href: "#contact",
                },
              ],
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Call: 7903926787",
                  href: "#",
                },
                {
                  label: "Call: 7004607314",
                  href: "#",
                },
                {
                  label: "Email: info@blackheartcafe.com",
                  href: "#",
                },
                {
                  label: "Katari Hill Road, Gaya",
                  href: "#",
                },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}