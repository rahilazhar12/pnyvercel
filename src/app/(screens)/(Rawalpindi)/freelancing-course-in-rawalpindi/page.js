import Freelancingcourse1 from "./Freelancingcourse1";

export default async function Freelancingcourse() {
  const metadata = await fetch('https://www.admin777.pny-trainings.com/api/city/specialpage/freelancing-course-in-rawalpindi', {
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
      <Freelancingcourse1 />
    </>
  );
}
