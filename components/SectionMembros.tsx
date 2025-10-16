import CardMembros from "@/components/CardMembros";

export default function SectionMembros() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#F1F5F9] py-10 mt-10 md:grid md:grid-cols-3 md:grid-rows-2">
      <CardMembros image="/images/man1.jpg" name="Ernesto Brito" whatsapp="+244 941553686" site="www.rapta.co.ao" description="" />
      <CardMembros image="/images/woman1.jpg" name="Golda Teodora" whatsapp="+244 941553686" site="www.rapta.co.ao" description="" />
      <CardMembros image="/images/man3.jpg" name="Esmael Prado" whatsapp="+244 941553686" site="www.rapta.co.ao" description="" />
      <CardMembros image="/images/man4.jpg" name="Emílio Betatela" whatsapp="+244 941553686" site="www.rapta.co.ao" description="" />
      <CardMembros image="/images/woman2.jpg" name="Stefly Flyster" whatsapp="+244 941553686" site="www.rapta.co.ao" description="" />
      <CardMembros image="/images/man6.jpg" name="Stênio Miguel" whatsapp="+244 941553686" site="www.rapta.co.ao" description="" />
    </section>
  );
}
