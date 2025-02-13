import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Smartphone, Apple } from "lucide-react";

export default function DownloadPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Download HyTunes</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Get ready to experience music like never before
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-semibold mb-4">Android</h2>
              <p className="text-muted-foreground mb-6">
                Available on Google Play Store for all Android devices
              </p>
              <Button className="w-full" size="lg">
                <Download className="mr-2" /> Download for Android
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Apple className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-semibold mb-4">iOS</h2>
              <p className="text-muted-foreground mb-6">
                Coming soon to the Apple App Store
              </p>
              <Button className="w-full" size="lg" disabled>
                <Download className="mr-2" /> Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}