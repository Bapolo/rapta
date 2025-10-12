import Banner from "@/components/Banner";
import Dados from "@/components/Dados";
import CardHistoria from "@/components/CardHistoria";
import SectionMembros from "@/components/SectionMembros";

export default function Home() {
  return (
    <main>
      <Banner />
      <Dados />
      <CardHistoria />
      <SectionMembros />
    </main>
  );
}
