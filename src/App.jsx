
import React from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import Houses from "./components/houses"
import Footer from "./components/Footer";


export default function App() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Header />
      <Hero />
      <Houses/>
      <Footer/>
    </main>
  );
}


