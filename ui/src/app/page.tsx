"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";
import profilePic from "./profile.jpg";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const changeThemeColor = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log(theme);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-5  gap-4 z-10 w-full max-w-5xl items-center justify-between text-sm">
        <Card className="col-span-2 dark:border-neutral-800 dark:bg-zinc-800/30  border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">
              Hi, I&apos;m Leo Pantaleon
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <p>Full Stack Software Engineer</p>
            <p>Capital One</p>
            <p>Boston, MA</p>
          </CardContent>
        </Card>
        <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardContent className="flex justify-center p-0">
            <Image
              src={profilePic}
              width={200}
              height={200}
              alt="Picture of the author"
              className="rounded-xl"
            />
          </CardContent>
        </Card>
        <Card
          className="cursor-pointer dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full"
          onClick={() => changeThemeColor()}
        >
          <CardHeader className="pb-2">
            <CardTitle>
              {theme == "light" && (
                <Moon className="h-6 w-6 justify-self-center transition-all group-hover:scale-110" />
              )}
              {theme == "dark" && (
                <Sun className="h-6 w-6 justify-self-center transition-all group-hover:scale-110" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center p-6">
            {theme == "light" && <p>Click to turn off the lights</p>}
            {theme == "dark" && <p>Click to turn on the lights</p>}
          </CardContent>
        </Card>
        <div>
          <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 mb-2">
            <CardContent className="flex justify-center p-4">
              <Github className="h-6 w-6 justify-self-center transition-all group-hover:scale-110" />
            </CardContent>
          </Card>
          <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 mb-2">
            <CardContent className="flex justify-center p-4">
              <Linkedin className="h-6 w-6 justify-self-center transition-all group-hover:scale-110" />
            </CardContent>
          </Card>
          <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20">
            <CardContent className="flex justify-center p-4">
              <Mail className="h-6 w-6 justify-self-center transition-all group-hover:scale-110" />
            </CardContent>
          </Card>
        </div>
        <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 col-span-5 mt-4">
          <CardContent className="p-4">
            <p>Experience</p>
          </CardContent>
        </Card>
        <Card className="col-span-3 dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">Capital One</CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <p>Full Stack Software Engineer</p>
            <p>Boston, MA</p>
          </CardContent>
        </Card>
        <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">Deloitte</CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <p>Solutions Analyst</p>
            <p>Lake Mary, FL</p>
          </CardContent>
        </Card>
        <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">FIU</CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <p>Research Assistant</p>
            <p>Miami, FL</p>
          </CardContent>
        </Card>
        <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 col-span-5 mt-4">
          <CardContent className="p-4">
            <p>Projects</p>
          </CardContent>
        </Card>
        <Card className="col-span-3 dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">Saitemap.com</CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <p>
              AI Powered Content Generation System based around a simple
              concept. All sites have sitemaps and they&apos;re easier to think
              up than all the content for your site, so give us a sitemap
              we&apos;ll create the content
            </p>
            <p>Still working to make this great!</p>
          </CardContent>
        </Card>
        <Card className="col-span-2 dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">
              SparkDev Transit Alliance Team{" "}
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <p>
              Built a backend for a web application commissioned by Miami-Dade
              Transit to guide citizens through a transit system revamp which
              went into effect in 2020.
            </p>
            <p>
              Built with the support of Microsoft and presented to the Miami
              Dade City Council.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
