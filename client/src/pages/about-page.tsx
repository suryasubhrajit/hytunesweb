import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About HyTunes</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              At HyTunes, we believe that music should be accessible, high-quality, and 
              enjoyed without interruptions. Our mission is to provide music lovers with 
              the best possible listening experience through innovative technology and 
              a vast library of songs.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">The HyTunes Difference</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Over 10,000 songs in our growing library</li>
              <li>• Professional-grade equalizer for perfect sound</li>
              <li>• Seamless offline listening capabilities</li>
              <li>• Zero advertisements - pure music experience</li>
              <li>• Regular updates and new features</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              Have questions or feedback? We'd love to hear from you. Reach out to our 
              support team at support@hytunes.com
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
