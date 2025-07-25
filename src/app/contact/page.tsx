/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import axios from "axios";
import { PhoneNumberInput } from "@/components/PhoneNumberInput";
import Head from "next/head";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [firstname, setFirstname] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("/api/sendContactMail", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        service: service,
        message: message,
      });
      toast("Thank you for contacting Globus Beverages", {
        description: "We will revert back to you soon",
        action: {
          label: "Done",
          onClick: () => console.log("Done"),
        },
      });
      console.log("Mail sent successfully");
    } catch (error) {
      console.error("Failed to send request", error);
      toast("Error sending message", {
        description: "Please check your connectivity",
        action: {
          label: "Done",
          onClick: () => console.log("Done"),
        },
      });
    } finally {
      setIsLoading(false);
    }
    e.target.reset();
    setEmail("");
    setFirstname("");
    setLastname("");
    setMessage("");
    setPhone("");
    setService("");
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Contact Us &dash; Start Your Journey with Globus Beverages</title>
        <meta name="description" content="Ready to secure your future? Contact WealthBridge Consulting today for personalized guidance and expert advice on your business or financial goals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        {/* <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=500&width=1920&text=Contact+Us"
              alt="Contact us background"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl">Contact Us</h1>
              <p className="mb-6 text-base sm:mb-8 sm:text-lg lg:text-xl">
                Get in touch with our team for inquiries about our products, services, or partnership opportunities.
              </p>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact Us
                </h1>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We&apos;re here to answer your questions and help you achieve
                  your financial goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Call us directly
                  </p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri 9AM-6PM EST
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Send us an email
                  </p>
                  <p className="font-medium">info@globusbeverages.com</p>
                  <p className="text-sm text-muted-foreground">
                    We reply within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Visit our office
                  </p>
                  <p className="font-medium">123 Trading Avenue</p>
                  <p className="text-sm text-muted-foreground">
                    Global City, GC 10001
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Business Hours
                  </p>
                  <p className="font-medium">Mon-Fri: 9AM-6PM</p>
                  <p className="text-sm text-muted-foreground">Sat: 10AM-4PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="bg-muted/30 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Get in Touch
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fill out the form below and one of our financial experts
                    will contact you shortly.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        type="text"
                        value={firstname}
                        onChange={(e: any) => {
                          setFirstname(e.target.value);
                        }}
                        id="first-name"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        type="text"
                        value={lastname}
                        onChange={(e: any) => {
                          setLastname(e.target.value);
                        }}
                        id="last-name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e: any) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <PhoneNumberInput
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      label="Your Contact Number"
                      placeholder="e.g. +91 98765 43210"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="banking">Banking Solutions</option>
                      <option value="investments">Investment Management</option>
                      <option value="advisory">Financial Advisory</option>
                      <option value="retirement">Retirement Planning</option>
                      <option value="insurance">Insurance Solutions</option>
                      <option value="tax">Tax Planning</option>
                      <option value="business">Business Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e: any) => {
                        setMessage(e.target.value);
                      }}
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your financial goals and how we can help"
                      className="min-h-[120px]"
                    />
                  </div>
                  {isLoading ? (
                    <Button
                      type="submit"
                      className="bg-black text-white border hover:border-b-black hover:text-black dark:bg-white dark:"
                    >
                      <Loader2 className="animate-spin" />
                      Send Message
                    </Button>
                  ) : (
                    <Button variant="oasis" type="submit">
                      Send Message
                    </Button>
                  )}
                </form>
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-6">
                {/* Map Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle>Our Location</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative h-64 w-full overflow-hidden rounded-b-lg">
                      <Image
                        src="/placeholder.svg?height=400&width=600&text=Interactive+Map"
                        alt="Office location map"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Office Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Headquarters</CardTitle>
                    <CardDescription>
                      Visit us at our main office
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">123 Trading Avenue</p>
                        <p className="text-sm text-muted-foreground">
                          Global City, GC 10001
                        </p>
                        <p className="text-sm text-muted-foreground">
                          United States
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">
                          Main Office
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">info@globusbeverages.com</p>
                        <p className="text-sm text-muted-foreground">
                          General Inquiries
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="mb-8 text-base text-muted-foreground sm:text-lg">
                Quick answers to common questions about our products and
                services.
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What are your minimum order quantities?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our minimum order quantities vary by product. For retail
                      orders, there&apos;s no minimum. For wholesale orders,
                      minimums typically start at 50kg for coffee and 25kg for
                      tea.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Do you offer custom blending services?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Yes, we offer custom blending and private labeling
                      services for businesses. Contact our team to discuss your
                      specific requirements and minimum quantities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What regions do you ship to?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We ship worldwide with established distribution networks
                      in North America, Europe, Asia-Pacific, and the Middle
                      East. Contact us for specific shipping information to your
                      region.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      How long does equipment rental take to set up?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Equipment setup typically takes 1-2 hours depending on the
                      complexity. For events, we recommend booking at least 2
                      weeks in advance to ensure availability.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
                Ready to Get Started?
              </h2>
              <p className="mb-6 text-base text-muted-foreground sm:mb-8 sm:text-lg">
                Whether you need products for your business or services for an
                event, we&apos;re here to help you succeed.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Request a Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
