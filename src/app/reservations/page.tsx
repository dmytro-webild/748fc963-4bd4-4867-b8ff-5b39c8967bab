"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import Link from "next/link";

export default function ReservationsPage() {
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

      <div id="reservations" data-section="reservations" className="mx-auto px-4 md:px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-foreground">
              Reserve Your Table
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Book your perfect table at Blackheart Cafe. Whether it's a casual hangout with friends, a romantic date, or a celebration with loved ones — we have the perfect spot for you.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-full p-8 shadow-sm border border-accent/20">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Quick Reservation Info</h2>
              <div className="space-y-4 text-foreground/80">
                <div>
                  <p className="font-medium text-foreground">Hours of Operation</p>
                  <p>Monday - Sunday: 10:00 AM - 11:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Party Size</p>
                  <p>We accommodate groups from 2 to 30+ people</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Seating Options</p>
                  <p>Regular tables, lounge seating, and private event spaces available</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-full p-8 shadow-sm border border-accent/20">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">How to Reserve</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-cta flex items-center justify-center text-white font-semibold">1</div>
                  <div>
                    <p className="font-medium text-foreground">Call Us Directly</p>
                    <p className="text-foreground/80">
                      <a href="tel:7903926787" className="text-primary-cta hover:underline">7903926787</a> or <a href="tel:7004607314" className="text-primary-cta hover:underline">7004607314</a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-cta flex items-center justify-center text-white font-semibold">2</div>
                  <div>
                    <p className="font-medium text-foreground">Email Your Details</p>
                    <p className="text-foreground/80">
                      <a href="mailto:info@blackheartcafe.com" className="text-primary-cta hover:underline">info@blackheartcafe.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-cta flex items-center justify-center text-white font-semibold">3</div>
                  <div>
                    <p className="font-medium text-foreground">Visit Us in Person</p>
                    <p className="text-foreground/80">
                      Katari Hill Road, Gaya<br />
                      Walk-ins are always welcome!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-full p-8 shadow-sm border border-accent/20">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Special Services</h2>
              <div className="space-y-4 text-foreground/80">
                <div>
                  <p className="font-medium text-foreground">🎂 Birthday Parties</p>
                  <p>We offer decorated spaces, special menu options, and a festive atmosphere for your celebrations.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">👥 Private Events</p>
                  <p>Looking for a private space? We can arrange private dining areas for corporate events or intimate gatherings.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">🍽️ Catering</p>
                  <p>Let us bring Blackheart Cafe's amazing food to your event. Custom menus available on request.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <Link
                href="/"
                className="px-8 py-3 rounded-full bg-primary-cta text-primary-cta-text font-medium hover:opacity-90 transition"
              >
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full border border-primary-cta text-primary-cta font-medium hover:bg-primary-cta/10 transition"
              >
                Get in Touch
              </Link>
            </div>
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