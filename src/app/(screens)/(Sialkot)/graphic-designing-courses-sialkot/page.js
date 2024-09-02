import Graphicdesigncoursesialkot1 from "./Graphicdesigncoursesialkot1";

export default async function Home() {
  const metadata = await fetch('https://www.admin777.pny-trainings.com/api/city/specialpage/graphic-designing-courses-sialkot', {
    cache: 'no-store'
  })
    .then((response) => response.json())
    .then((data) => ({
      metatitle: data.special_page.meta_title,
      metadescription: data.special_page.meta_description,
      canonicalUrl: data.special_page.full_url
    }))
    .catch((error) => {
      console.error("Error fetching metadata:", error);
      return {
        metatitle: 'Default Title',
        metadescription: 'Default Description',
        canonicalUrl: ''
      };
    });

  return (
    <>
      <title>{metadata.metatitle}</title>
      <meta name="description" content={metadata.metadescription} />
      {metadata.canonicalUrl && (
        <link rel="canonical" href={metadata.canonicalUrl} />
      )}
      <Graphicdesigncoursesialkot1 />
    </>
  );
}
