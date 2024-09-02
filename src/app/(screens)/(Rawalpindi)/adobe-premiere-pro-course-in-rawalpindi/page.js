import Adobepremiere1 from "./Adobepremiererwp";

export default async function Adobepremierepro() {
  let metadata;

  try {
    const response = await fetch('https://www.admin777.pny-trainings.com/api/city/specialpage/adobe-premiere-pro-course-in-rawalpindi', {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    metadata = {
      metatitle: data.special_page.meta_title,
      metadescription: data.special_page.meta_description,
      canonicalUrl: data.special_page.full_url,
      special_page: data.special_page, // Pass the entire data object to the client-side component
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    metadata = {
      metatitle: 'Default Title',
      metadescription: 'Default Description',
      canonicalUrl: '/adobe-premiere-pro-course-in-rawalpindi',
      special_page: {}, // Empty object in case of error
    };
  }

  return (
    <>
      <title>{metadata.metatitle}</title>
      <meta name="description" content={metadata.metadescription} />
      <link
        rel="canonical"
        href={`${metadata.canonicalUrl}`}
      />
      <Adobepremiere1 data={metadata.special_page} />
    </>
  );
}
