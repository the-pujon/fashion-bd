import Hero from "@/Components/Hero/Hero";
import OurModels from "@/Components/OurModels/OurModels";
import PopularCollections from "@/Components/PopularCollections/PopularCollections";
import TopSale from "@/Components/TopSale/TopSale";

export default function Home() {
  return (
   <div>
    <Hero/>
    <PopularCollections/>
    <TopSale/>
    <OurModels/>
   </div>
  );
}
