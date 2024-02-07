import Hero from "@/Components/Hero/Hero";
import PopularCollections from "@/Components/PopularCollections/PopularCollections";
import TopSale from "@/Components/TopSale/TopSale";

export default function Home() {
  return (
   <div>
    <Hero/>
    <PopularCollections/>
    <TopSale/>
   </div>
  );
}
