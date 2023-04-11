import ProductCard from '@/components/products/card';
import Banner from '@/components/banner';

const API = 'https://localhost/api/products';

export async function getServerSideProps() {
  try {
    const res = await fetch(API);
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
}

export default function Home({data}) {
  return (
    <>
      <Banner />
      <h3 className='text-2xl font-bold text-white mb-4'>
        Nuestros productos
      </h3>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.length === 0 && (
          <p className='text-white'>No hay productos disponibles</p>
        )}
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  )
}
