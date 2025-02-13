import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music2, Download, Headphones, Wifi, Ban, Calendar } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-primary-foreground">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ 
            backgroundImage: 'url("/hero-banner.jpg")',
            backgroundColor: 'rgba(98, 0, 234, 0.9)'
          }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="font-poppins text-5xl font-bold mb-6">
              Your Music, Your Way
            </h1>
            <p className="text-xl mb-8">
              Stream over 10,000 songs with HyTunes' premium music experience. No ads, just music.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Download className="mr-2" /> Download Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">
            Why Choose HyTunes?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Music2 className="h-8 w-8" />}
              title="Built-in Equalizer"
              description="Customize your sound with professional-grade audio controls"
            />
            <FeatureCard
              icon={<Headphones className="h-8 w-8" />}
              title="Background Playback"
              description="Keep the music playing while using other apps"
            />
            <FeatureCard
              icon={<Wifi className="h-8 w-8" />}
              title="Offline Access"
              description="Download your favorite tracks for offline listening"
            />
            <FeatureCard
              icon={<Ban className="h-8 w-8" />}
              title="Ad-Free Experience"
              description="No interruptions, just pure music enjoyment"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Music Festival 2024"
              date="March 15, 2024"
              description="Join us for an amazing day of live music and entertainment"
            />
            <EventCard
              title="HyTunes Awards"
              date="April 20, 2024"
              description="Celebrating the best artists and songs of the year"
            />
            <EventCard
              title="Summer Concert Series"
              date="June 1-30, 2024"
              description="A month-long celebration of music across all genres"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="font-poppins text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function EventCard({
  title,
  date,
  description
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <Calendar className="h-8 w-8 text-primary mb-4" />
        <h3 className="font-poppins text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-primary mb-2">{date}</p>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}