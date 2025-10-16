"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Zap } from 'lucide-react';

const assetMap = [
  { id: "hero-image", url: "https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Warm and inviting Italian cafe with a variety of pizzas and drinks displayed on a counter." },
  { id: "about-image", url: "https://images.pexels.com/photos/7973630/pexels-photo-7973630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Explore a picturesque Italian street lined with historic buildings and a cozy restaurant." },
  { id: "feature-image-one", url: "https://images.pexels.com/photos/1435900/pexels-photo-1435900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of a homemade pizza topped with arugula, mozzarella, and tomatoes." },
  { id: "feature-image-two", url: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Appetizing gourmet pizza cooked in a wood-fired oven, showcasing artisanal toppings." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroBillboard
            title="Welcome to Our Pizzeria"
            description="Experience the authentic taste of Italy with every slice."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[
              { text: "Explore Menu", href: "menu" },
              { text: "Contact Us", href: "contact" }
            ]}
            className="bg-red-100"
            titleClassName="text-red-900"
            descriptionClassName="text-red-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <SplitAbout
            bulletPoints={[
              { title: "Authenticity", description: "Every pizza is crafted using traditional recipes." },
              { title: "Quality", description: "We use only the freshest ingredients." }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url}
            className="bg-red-100"
            bulletTitleClassName="text-red-900"
            bulletDescriptionClassName="text-red-900"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FeatureCardTwo
            features={[
              { title: "Fresh Ingredients", description: "We source local and fresh ingredients for the best taste.", icon: Zap },
              { title: "Traditional Oven", description: "Our pizzas are baked to perfection in a traditional oven.", icon: Zap }
            ]}
            className="bg-red-100"
            cardTitleClassName="text-red-900"
            cardDescriptionClassName="text-red-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactCenter
            tag="Newsletter"
            title="Stay Updated with Our Offers"
            description="Join our mailing list for the latest news and pizza deals."
            onSubmit={(email) => console.log(email)}
            className="bg-red-100"
            titleClassName="text-red-900"
            descriptionClassName="text-red-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Home", href: "home" }, { label: "Menu", href: "menu" }] },
              { items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            logoText="Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
