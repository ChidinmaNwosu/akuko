import React from "react";
import Header from "@/app/components/header";
import Body from "@/app/components/body";
import Footer from "@/app/components/footer";

function LandingPage():React.JSX.Element {
  return (
    <>
  <div className="min-h-screen">
        <Header/>
        <Body/>
        <Footer/>
    </div>
    </>
  )
}

export default LandingPage;