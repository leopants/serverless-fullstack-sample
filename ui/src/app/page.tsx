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
import { Sun, Moon, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";
import profilePic from "./profile.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      <div className="grid grid-cols-10 gap-4 z-10 w-full max-w-5xl items-center justify-between text-sm">
        <Card className="sm:col-span-6 lg:col-span-4 dark:border-neutral-800 dark:bg-zinc-800/30  border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">
              Hi, I&apos;m Leo Pantaleon
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <p>Full Stack Software Engineer</p>
            <p>
              Currently thinking up ways to use LLMs to solve real world
              problems especially for people who don&apos;t have a technical
              background
            </p>
          </CardContent>
        </Card>
        <Card className="sm:hidden lg:block sm:col-span-2 lg:col-span-2 dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardContent className="flex justify-center p-0">
            <Image
              src={profilePic}
              width={200}
              height={200}
              alt="Picture of the author"
              className="rounded-xl contain"
            />
          </CardContent>
        </Card>

        <div className="sm:block lg:hidden sm:col-span-2">
          <Card className="sm:col-span-2 lg:col-span-2 dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full mb-2 ">
            <CardContent className="flex justify-center p-0">
              <Image
                src={profilePic}
                width={200}
                height={200}
                alt="Picture of the author"
                className="rounded-xl contain"
              />
            </CardContent>
          </Card>
          <Card
            className="sm:col-span-2 cursor-pointer dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full"
            onClick={() => changeThemeColor()}
          >
            <CardHeader className="pb-2 p-2 sm:self-center justify-self-center">
              <CardTitle className="flex justify-center">
                {theme == "light" && (
                  <Moon className="h-6 w-6 justify-self-center transition-all group-hover:scale-110" />
                )}
                {theme == "dark" && (
                  <Sun className="h-6 w-6 justify-self-center transition-all group-hover:scale-110" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="sm:hidden lg:block flex justify-center items-center p-6">
              {theme == "light" && <p>Click to turn off the lights</p>}
              {theme == "dark" && <p>Click to turn on the lights</p>}
            </CardContent>
          </Card>
        </div>

        <Card
          className="sm:hidden lg:block lg:col-span-2 cursor-pointer dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full"
          onClick={() => changeThemeColor()}
        >
          <CardHeader className="pb-2 sm:self-center justify-self-center">
            <CardTitle>
              {theme == "light" && (
                <Moon className="h-6 w-6 justify-self-center transition-all group-hover:scale-110" />
              )}
              {theme == "dark" && (
                <Sun className="h-6 w-6 justify-self-center transition-all group-hover:scale-110" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="sm:hidden lg:block flex justify-center items-center p-6">
            {theme == "light" && <p>Click to turn off the lights</p>}
            {theme == "dark" && <p>Click to turn on the lights</p>}
          </CardContent>
        </Card>
        <div className="sm:col-span-2 lg:col-span-2">
          <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 sm:mb-3.5 lg:mb-2">
            <a href="https://github.com/leopants">
              <CardContent className="flex justify-center p-4">
                <Github className="h-6 w-6 justify-self-center transition-all group-hover:scale-110" />
              </CardContent>
            </a>
          </Card>
          <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 sm:mb-3.5 lg:mb-2">
            <a href="https://linkedin.com/in/leopants">
              <CardContent className="flex justify-center p-4">
                <Linkedin className="h-6 w-6 justify-self-center transition-all group-hover:scale-110" />
              </CardContent>
            </a>
          </Card>
          <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20">
            <TooltipProvider>
              <Tooltip>
                <CardContent
                  onClick={() => {
                    navigator.clipboard.writeText("leopantaleon@outlook.com");
                  }}
                  className="cursor-pointer flex justify-center p-4"
                >
                  <TooltipTrigger>
                    <Mail className="h-6 w-6 justify-self-center transition-all group-hover:scale-110" />
                  </TooltipTrigger>
                </CardContent>
                <TooltipContent className="mb-2">
                  <p>Copy Email</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Card>
        </div>

        <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 col-span-10 mt-4">
          <CardContent className="p-4">
            <p>Experience</p>
          </CardContent>
        </Card>
        <Card className="sm:col-span-10 lg:col-span-4 dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">Capital One</CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <p>Full Stack Software Engineer</p>
            <p>Boston, MA</p>
            <p className="mt-1">
              Have spent my time building a service to automate journal entry
              submissions onto the banks general ledger, among other things
            </p>
          </CardContent>
        </Card>
        <Card className="sm:col-span-10 lg:col-span-3 dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">Deloitte</CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <p>Solutions Analyst</p>
            <p>Lake Mary, FL</p>
            <p className="mt-1">
              Managed 3 out of the 7 stages of the Marine Corps purchasing
              system running on an ESB
            </p>
          </CardContent>
        </Card>
        <Card className="sm:col-span-10 lg:col-span-3 dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">FIU</CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <p>Research Assistant</p>
            <p>Miami, FL</p>
            <p className="mt-1">
              Worked with Autonomous Underwater Vehicles to take water samples
              around Biscayne Bay
            </p>
          </CardContent>
        </Card>
        <Card className="dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 col-span-10 mt-4">
          <CardContent className="p-4">
            <p>Projects</p>
          </CardContent>
        </Card>
        <Card className="sm:col-span-10 lg:col-span-3 dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between">
              <p className="text-2xl">Saitemap.com</p>
              <a href="https://saitemap.com" className="self-center">
                <ExternalLink className="h-5 w-5 transition-all group-hover:scale-110" />
              </a>
            </CardTitle>
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
        <Card className="sm:col-span-10 lg:col-span-4 dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
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
        <Card className="sm:col-span-10 lg:col-span-3 dark:border-neutral-800 dark:bg-zinc-800/30 border-neutral-300 bg-zinc-300/20 h-full w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl"></CardTitle>
            <CardTitle className="flex justify-between">
              <p className="text-2xl">This Portfolio</p>
              <a
                className="self-center"
                href="https://github.com/leopants/serverless-fullstack-sample"
              >
                <ExternalLink className="h-5 w-5 transition-all group-hover:scale-110" />
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-3">
            <p>
              This portfolio is my actually my template to bootstrap serverless
              full stack development of personal projects, it&apos;s all on
              Github
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
