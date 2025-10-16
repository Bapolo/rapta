import Banner from "@/components/Banner";
import Dados from "@/components/Dados";
import CardHistoria from "@/components/CardHistoria";
import SectionMembros from "@/components/SectionMembros";
import SectionArtigos from "@/components/SectionArtigos";

export default function Home() {
  return (
    <main>
      <Banner />
      <SectionArtigos />
      <Dados />
      <CardHistoria />
      <SectionMembros />
    </main>
  );
}
