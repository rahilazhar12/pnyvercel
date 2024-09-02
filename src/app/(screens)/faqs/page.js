import Faqs1 from "./Faqs1";

export default async function Home() {
  const metadata = await fetch('https://www.admin777.pny-trainings.com/api/faqs', {
    cache: 'no-store'
  })
    .then((response) => response.json())
    .then((data) => ({
      metatitle: data.faqs.category[0].meta_title,
      metadescription: data.faqs.category[0].meta_description
    }))
    .catch((error) => {
      console.error("Error fetching metadata:", error);
      return {
        metatitle: '',
        metadescription: ''
      };
    });

  return (
    <>
      <title>{metadata.metatitle}</title>
      <meta name="description" content={metadata.metadescription} />
      <Faqs1 />

    </>
  );
}