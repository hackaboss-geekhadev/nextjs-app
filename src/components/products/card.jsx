import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({product}) => {
  const {id, nombre, marca, modelo, precio, url_imagen} = product;
  return (
    <Link href={`/products/${id}`}>
      <div className='
        border-2
        border-gray-400
        rounded-xl
        p-8
        hover:border-yellow-400
        cursor-pointer
      '>
        <Image
          src={url_imagen}
          alt={nombre}
          width={500}
          height={500}
          className='mb-6 bg-white py-4 rounded-xl h-48 object-contain'
        />
        <h4 className='text-xl text-white font-bold'>{nombre}</h4>
        <p className='text-gray-400'>{marca} - {modelo}</p>
        <span className='text-yellow-400 mt-4 text-2xl font-bold'>Precio: ${precio}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
