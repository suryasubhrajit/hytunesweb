import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Coffee, Star, Trophy } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support HyTunes</h1>
          <p className="text-xl text-muted-foreground">
            Help us keep the music playing by supporting our project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Coffee className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Buy us a coffee</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">$5</p>
              <Button className="w-full">Donate</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Heart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Supporter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">$10</p>
              <Button className="w-full">Donate</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Star className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Premium</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">$25</p>
              <Button className="w-full">Donate</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Trophy className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Champion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">$50</p>
              <Button className="w-full">Donate</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center text-muted-foreground">
          <p>
            Your donations help us maintain the servers, develop new features,
            and expand our music library.
          </p>
        </div>
      </div>
    </div>
  );
}
