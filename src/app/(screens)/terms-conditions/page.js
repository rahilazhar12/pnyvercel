import Clientterm from "./Clientterm";

export default async function Termsandconditions() {
  const metadata = await fetch('https://www.admin777.pny-trainings.com/api/pages/terms-conditions', {
    cache: 'no-store'
  })
    .then((response) => response.json())
    .then((data) => ({
      metatitle: data.page.page_title,
      metadescription: data.page.page_description
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
      <Clientterm />

    </>
  );
}