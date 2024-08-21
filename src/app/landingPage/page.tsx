import React from "react";
import Header from "@/app/components/Header/header";
import Body from "@/app/components/Body/body";
import Footer from "@/app/components/Footer/footer";

function LandingPage(): React.JSX.Element {
  return (
    <>
      <Header />
      <div className="min-h-full">
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
