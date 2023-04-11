export async function getStaticPaths() {
  return {
    paths: [
      { params: { url: 'services' } }, 
      { params: { url: 'contact' } }
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { url } = context.params
  const API = `https://localhost/api/pages/${url}`;
  try {
    const response = await fetch(API)
    const data = await response.json()
    return {
      props: { page: data },
    }
  } catch (error) {
    return {
      props: { page: [] },
    }
  }
}

const Page = ({ page }) => (
  <div className="text-white text-xl">
    <h1 className="text-6xl text-white">{page.title}</h1>
    <h2 className="text-2xl mb-6">{page.subtitle}</h2>
    <p>{page.content}</p>
  </div>
)

export default Page
