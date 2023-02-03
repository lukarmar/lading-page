/* eslint-disable react-hooks/rules-of-hooks */

import dynamic from "next/dynamic";

import Hero from "components/Hero";
import WhatsappButton from "components/WhatsappButton";

const Resources = dynamic(() => import("components/Resources"));
const LastCTA = dynamic(() => import("components/LastCTA"));
const Products = dynamic(() => import("components/Products"));
const ActionsRealTime = dynamic(() => import("components/ActionsRealTime"));
const FormContactInterative = dynamic(
  () => import("components/FormContactInterative")
);

const Home = () => {
  return (
    <>
      <Hero />
      <Resources />
      <LastCTA />
      <ActionsRealTime />
      <Products />
      <WhatsappButton />
      <FormContactInterative />
    </>
  );
};

export default Home;
