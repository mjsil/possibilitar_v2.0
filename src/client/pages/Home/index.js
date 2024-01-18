import React from "react";

import BannerComponent from "../../components/Banner";
import FooterComponent from "../../components/Footer";
import ListJobsComponent from "../../components/ListJobs";
import StartCTAComponent from "../../components/StartCTA";
import EndCTAComponent from "../../components/EndCTA";

const Home = () => {
  return (
    <div>
      <BannerComponent />

      <StartCTAComponent />

      <ListJobsComponent />

      <EndCTAComponent />

      <FooterComponent />
    </div>
  );
};

export default Home;
