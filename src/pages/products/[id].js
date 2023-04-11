import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image'

const Detail = () => {

  const id = useRouter().query.id;

  const [product, setProduct] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
  }, [id])

  if (isLoading) return <p className='text-white'>Loading...</p>
  if (!product) return <p className='text-white'>No profile data</p>

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-full">
        <Image
          src={product.url_imagen}
          alt={product.nombre}
          width={500}
          height={500}
          className='mb-6 bg-gray-200 py-4 rounded-xl w-full'
        />
      <div className='px-12'>
        <h2 className='text-4xl text-white font-bold'>{product.nombre}</h2>
        <p className='text-xl text-gray-400'>{product.marca} - {product.modelo}</p>
        <p className='text-yellow-400 mt-6 text-5xl font-bold'>Precio: ${product.precio}</p>
        <div className='mt-6'>
          <button className='border-2 border-yellow-400 text-white font-bold py-2 px-4 rounded-full'>Comprar</button>
          <button className='border-2 border-gray-400 text-white font-bold py-2 px-4 rounded-full ml-4'>Agregar al carrito</button>
        </div>
        <div className='text-gray-200 mt-6 text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nisl nisl eget nisl.
        </div>
      </div>
    </div>
  );
};

export default Detail;
