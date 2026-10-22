
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/Hero";
import Houses from "./components/houses";
import Footer from "./components/Footer";
import SignIn from "./components/Signin";
import ListProperty from "./components/ListProperty";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Houses />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signin" element={<SignIn />} />

        <Route
          path="/list-property"
          element={<ListProperty />}
        />

        <Route
          path="*"
          element={
            <main className="p-10 text-center">
              <h1 className="mb-4 text-2xl font-bold">
                Page not found
              </h1>
              <a
                href="/"
                className="text-[#105638] underline"
              >
                Return home
              </a>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
