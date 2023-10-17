"use client";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import React from "react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents & Plans. Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is a connected workspace where <br /> better, faster work
        happens.
      </h3>
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents" />
          Enter Jotion <ArrowBigRight className="h-4 w-4 ml-2" />
        </Button>
      )}
      {isLoading && (
        <div className="w-full flex justify-center items-center">
          <Spinner size="lg" />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>Get Jotion Free</Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
