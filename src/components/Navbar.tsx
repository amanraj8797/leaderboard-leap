
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container max-w-7xl mx-auto flex h-16 items-center px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            PathWise
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/paths" className="text-sm font-medium hover:text-primary transition-colors">
            Paths
          </Link>
          <Link to="/leaderboard" className="text-sm font-medium hover:text-primary transition-colors">
            Leaderboard
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="default" size="sm">Sign In</Button>
        </div>
      </div>
    </header>
  );
};
