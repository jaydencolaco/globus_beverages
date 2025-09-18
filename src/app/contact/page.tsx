/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { useState } from "react";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
        <title>
          Contact Us &dash; Start Your Journey with Globus Beverages
        </title>
        <meta
          name="description"
          content="Ready to secure your future? Contact WealthBridge Consulting today for personalized guidance and expert advice on your business or financial goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact Us
                </h1>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Good conversations start with a great cup, let us help you
                  serve it.
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
                  <p className="font-medium">
                    <a href="tel:+917304205800" className="hover:underline">
                      +91 7304205800
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Available on Whatsapp
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
                  <p className="font-medium">
                    <a
                      href="mailto: globusbeverages@gmail.com"
                      className="hover:underline"
                    >
                      globusbeverages@gmail.com
                    </a>
                  </p>
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
                  {/* <p className="font-medium">UNIQUE PLAZA, B-WING</p> */}
                  <p className="font-medium">
                    <a
                      href="https://www.google.com/maps/place/Unique+Plaza+B,+Bapurao+Jagtap+Marg,+Municipal+Colony,+Byculla+West,+Agripada,+Mumbai,+Maharashtra+400011"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Shop No. 5, Unique Plaza B
                    </a>
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Bapurao Jagtap Marg, Municipal Colony, Byculla West
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
                  <p className="font-medium">Mon-Sat: 9AM-7PM</p>
                  <p className="text-sm text-muted-foreground">
                    Call or Visit Us
                  </p>
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
                      <option value="rent-premix">
                        Rent Tea & Coffee Premix
                      </option>
                      <option value="buy-machines">Buy Vending Machines</option>
                      <option value="corporates">Corporate Solutions</option>
                      <option value="events-stalls">
                        Event & Stall Services
                      </option>
                      <option value="wholesale">Wholesale Orders</option>
                      <option value="retail">Retail/Small Orders</option>
                      <option value="service-amc">Service & AMC</option>
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
                      placeholder="Share your vending or premix needs, we’ll guide you"
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
                    <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.931236344838!2d72.82888457474164!3d18.97589575710726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1c54d1ddf5%3A0xa418a76a9b80e20d!2sUnique%20Plaza%20B%2C%20Bapurao%20Jagtap%20Marg%2C%20Municipal%20Colony%2C%20Byculla%20West%2C%20Agripada%2C%20Mumbai%2C%20Maharashtra%20400011!5e0!3m2!1sen!2sin!4v1693890199895!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
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
                        <p className="font-medium">
                          Globus Beverages, Shop No. 5
                        </p>
                        <p className="text-sm text-muted-foreground">
                          UNIQUE PLAZA, B-WING, NAVDURGA CO-OP SOCIETY, BYCULLA,
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Mumbai - 400011
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">+91 7304205800</p>
                        <p className="text-sm text-muted-foreground">
                          Main Office
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">globusbeverages@gmail.com</p>
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
                      minimums typically start at 5kg for coffee and 10kg for
                      tea. We do deliveries all over maharashtra only.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What products and machines do you offer?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We offer a wide range of tea and coffee premixes, along
                      with vending machines to suit every need. Our selection
                      includes premix-based machines as well as fresh milk and
                      coffee bean machines for authentic café-style beverages.
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
                      We ship mainly in Maharashtra provided you meet the
                      minimum requirements of the material required. If you
                      purchase in wholesale the rates can be negotiated. Do give
                      us a call. For anything less than 7Kg please use the
                      website
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      How quickly can equipment be installed?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Equipment setup typically takes 1-2 hours depending on the
                      machine and requirements. For events, book at least 4-5
                      days in advance so we can confirm availability, prepare
                      logistics, and ensure smooth installation.
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
                <Button
                  size="lg"
                  className="w-full sm:w-auto flex items-center gap-2 bg-black text-white hover:bg-green-600"
                  asChild
                >
                  <a
                    href="https://wa.me/918080080789?text=Inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Text Us on WhatsApp
                  </a>
                </Button>
                <Dialog>
                  <form>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="name-1">Name</Label>
                          <Input
                            id="name-1"
                            name="name"
                            defaultValue="Pedro Duarte"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="username-1">Username</Label>
                          <Input
                            id="username-1"
                            name="username"
                            defaultValue="@peduarte"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
