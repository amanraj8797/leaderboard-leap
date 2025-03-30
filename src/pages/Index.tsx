
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div className="space-y-6 py-8">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Your Personalized Learning
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Journey Starts Here
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Discover the perfect path to master any technology. Learn, track progress, and
              compete with others in your learning journey.
            </p>
            <div className="mx-auto flex max-w-lg flex-col items-center gap-4 sm:flex-row">
              <Input
                placeholder="Search for any technology or topic..."
                className="h-12"
              />
              <Button size="lg">Explore</Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 py-12 text-center">
            <div>
              <h2 className="text-4xl font-bold">1000+</h2>
              <p className="text-muted-foreground">Learning Paths</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">50K+</h2>
              <p className="text-muted-foreground">Active Learners</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">95%</h2>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
