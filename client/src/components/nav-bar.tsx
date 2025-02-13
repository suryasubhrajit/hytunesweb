import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

export default function NavBar() {
  const { user, logoutMutation } = useAuth();

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold text-primary">HyTunes</a>
            </Link>
            <div className="ml-8 space-x-4">
              <Link href="/about">
                <a className="text-muted-foreground hover:text-foreground">
                  About
                </a>
              </Link>
              <Link href="/download">
                <a className="text-muted-foreground hover:text-foreground">
                  Download
                </a>
              </Link>
              <Link href="/blog">
                <a className="text-muted-foreground hover:text-foreground">
                  Blog
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </Link>
              <Link href="/donate">
                <a className="text-muted-foreground hover:text-foreground">
                  Donate
                </a>
              </Link>
            </div>
          </div>
          {user?.isAdmin && (
            <div className="flex items-center space-x-4">
              <Link href="/admin">
                <Button variant="outline">Admin</Button>
              </Link>
              <Button
                variant="ghost"
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}