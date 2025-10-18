import CardMembros from "@/components/CardMembros";

export default function SectionMembros() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#F1F5F9] py-10 mt-10 md:grid md:grid-cols-3 md:grid-rows-2">
      <CardMembros
        image="/images/rapta/ernestobrito.jpg"
        name="Ernesto Brito"
        whatsapp="+244 941553686"
        facebook="https://www.facebook.com/profile.php?id=61575646217794&mibextid=wwXIfr&rdid=qnKrRHO2ZJnFQ5vS#"
        instagram="https://www.instagram.com/britosemfronteiras?igsh=MXFqbW0yZ3p2c2M1cQ%3D%3D&utm_source=qr&fbclid=IwY2xjawNfv5lleHRuA2FlbQIxMABicmlkETF4djdPcWZSU01WZ1AzU3BsAR5xAIbqGpmJG7h6tK5vtJh2boNaYnLfWIvk7LOKfbmxrlSaWiN6a8MzIHVVfg_aem_8cYMgro71jLV7X3pEtN7Hw"
        description="lorem ipsolon dollor"
        className="md:-translate-y-18"
      />

      <CardMembros
        image="/images/rapta/eroseugenio.jpg"
        name="Eros Eugênio"
        whatsapp="+244 941553686"
        facebook="https://www.instagram.com/erostheexplorer?igsh=MThuaGhneHFyOXRlZQ%3D%3D&fbclid=IwY2xjawNfwCFleHRuA2FlbQIxMABicmlkETF4djdPcWZSU01WZ1AzU3BsAR5RUE-fnoT40LdCw1zMKskxHpm3YOUEOuCe0JgEwIQAXeCBIU3p1CcPmw_QRw_aem_-tpmpme7Yh0mh6sxWrJ4UA"
        instagram=""
        description=""
        className="md:translate-y-18"
      />

      <CardMembros
        image="/images/rapta/josepado.jpg"
        name="José Pado"
        whatsapp="+244 941553686"
        facebook="https://www.facebook.com/josepado.mabiala?mibextid=wwXIfr&rdid=egwrMpdOST0h2vfO#"
        instagram="https://www.instagram.com/josepado?igsh=OGRpeGFpYmt6M2Nv&fbclid=IwY2xjawNfwElleHRuA2FlbQIxMABicmlkETF4djdPcWZSU01WZ1AzU3BsAR5RUE-fnoT40LdCw1zMKskxHpm3YOUEOuCe0JgEwIQAXeCBIU3p1CcPmw_QRw_aem_-tpmpme7Yh0mh6sxWrJ4UA"
        description=""
        className=""
      />

      <CardMembros
        image="/images/rapta/josenelson.jpg"
        name="José Nelson"
        whatsapp="+244 941553686"
        facebook="https://www.facebook.com/nelson.quaresma.39?mibextid=wwXIfr&rdid=yw3WjXSMLqSlZjYC#"
        instagram="https://www.instagram.com/jose_nelson_quaresma?igsh=MW5iNHE3MjUya2Q4Ng%3D%3D&fbclid=IwY2xjawNfwIdleHRuA2FlbQIxMABicmlkETF4djdPcWZSU01WZ1AzU3BsAR5ka5l-3fHX4rmDJRBnQUOsOABxnXCG5QO6NjDgOCRKyxR_zMQ558y1tFs_nA_aem_koVkA9IhU1I3e9JfKqkbMA"
        description=""
        className="md:translate-x-18 md:-translate-15"
      />

      <CardMembros
        image="/images/woman2.jpg"
        name="Stefly Flyster"
        whatsapp="+244 941553686"
        facebook="www.rapta.co.ao"
        instagram=""
        description=""
        className=""
      />

      <CardMembros
        image="/images/man6.jpg"
        name="Stênio Miguel"
        whatsapp="+244 941553686"
        facebook="www.rapta.co.ao"
        instagram=""
        description=""
        className="md:-translate-y-18 md:-translate-18"
      />
    </section>
  );
}
