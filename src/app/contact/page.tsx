"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Menu", id: "/menu" },
    { name: "About", id: "/about" },
    { name: "Reservations", id: "/reservations" },
    { name: "Contact", id: "/contact" },
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
          navItems={navItems}
          brandName="Blackheart Cafe"
          bottomLeftText="Where Gaya Comes to Chill"
          bottomRightText="7903926787"
        />
      </div>

      <div id="contact" data-section="contact" className="mx-auto px-4 md:px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/80">
              Have a question or suggestion? We'd love to hear from you! Reach out to Blackheart Cafe through any of the following methods.
            </p>
          </div>

          <div className="space-y-6">
            {/* Phone Contact */}
            <div className="bg-card rounded-full p-8 shadow-sm border border-accent/20 hover:border-primary-cta/40 transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-cta/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-cta" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-foreground/80 mb-3">
                    Reach us directly to make reservations or ask any questions.
                  </p>
                  <div className="space-y-2">
                    <a href="tel:7903926787" className="block text-primary-cta hover:underline font-medium">
                      +91 790-3926-787
                    </a>
                    <a href="tel:7004607314" className="block text-primary-cta hover:underline font-medium">
                      +91 700-4607-314
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-card rounded-full p-8 shadow-sm border border-accent/20 hover:border-primary-cta/40 transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-cta/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-cta" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-foreground/80 mb-3">
                    Send us an email and we'll get back to you as soon as possible.
                  </p>
                  <a href="mailto:info@blackheartcafe.com" className="text-primary-cta hover:underline font-medium">
                    info@blackheartcafe.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Contact */}
            <div className="bg-card rounded-full p-8 shadow-sm border border-accent/20 hover:border-primary-cta/40 transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-cta/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-cta" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Visit Us</h3>
                  <p className="text-foreground/80 mb-3">
                    Drop by Blackheart Cafe for a warm welcome and amazing experiences.
                  </p>
                  <p className="font-medium text-foreground">
                    Katari Hill Road<br />
                    Gaya, Bihar, India
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-full p-8 shadow-sm border border-accent/20 hover:border-primary-cta/40 transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-cta/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-cta" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Hours of Operation</h3>
                  <div className="space-y-2 text-foreground/80">
                    <p>Monday - Sunday: <span className="font-medium text-foreground">10:00 AM - 11:00 PM</span></p>
                    <p className="text-sm mt-3">
                      📞 Walk-ins are always welcome! For large group reservations or special events, we recommend calling ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Section */}
          <div className="mt-12 bg-gradient-to-br from-primary-cta/5 to-primary-cta/10 rounded-full p-8 border border-primary-cta/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Have a Special Request?</h3>
            <p className="text-foreground/80 mb-6">
              Whether it's a catering inquiry, private event booking, or special celebration planning — let us know what we can do for you. Our team is here to make your experience at Blackheart Cafe unforgettable.
            </p>
            <div className="flex gap-4">
              <Link
                href="/reservations"
                className="px-6 py-3 rounded-full bg-primary-cta text-primary-cta-text font-medium hover:opacity-90 transition"
              >
                Make a Reservation
              </Link>
              <a
                href="mailto:info@blackheartcafe.com"
                className="px-6 py-3 rounded-full border border-primary-cta text-primary-cta font-medium hover:bg-primary-cta/10 transition"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="flex justify-center mt-12">
            <Link
              href="/"
              className="px-8 py-3 rounded-full border border-foreground/30 text-foreground font-medium hover:bg-foreground/5 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div id="footer" data-section="footer" className="mx-auto px-4 md:px-6 py-12 border-t border-accent/20 bg-primary-button">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-background">Quick Links</h3>
              <ul className="space-y-2 text-background/80">
                <li><Link href="/" className="hover:text-background transition">Home</Link></li>
                <li><Link href="/menu" className="hover:text-background transition">Menu</Link></li>
                <li><Link href="/about" className="hover:text-background transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-background transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-background">Services</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition">Birthday Parties</a></li>
                <li><Link href="/reservations" className="hover:text-background transition">Reserve Table</Link></li>
                <li><a href="#" className="hover:text-background transition">Private Events</a></li>
                <li><a href="#" className="hover:text-background transition">Catering</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-background">Contact</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="tel:7903926787" className="hover:text-background transition">Call: 7903926787</a></li>
                <li><a href="tel:7004607314" className="hover:text-background transition">Call: 7004607314</a></li>
                <li><a href="mailto:info@blackheartcafe.com" className="hover:text-background transition">Email: info@blackheartcafe.com</a></li>
                <li><a href="#" className="hover:text-background transition">Katari Hill Road, Gaya</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/80 text-sm">© 2025 Blackheart Cafe. All rights reserved.</p>
            <button className="text-background/80 hover:text-background text-sm transition">Privacy Policy</button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}