import Image from 'next/image'

const Banner = () => {
  return (
    <div className='flex mb-12'>
      <Image
        loader={({ src }) => src}
        src={'/banner.webp'}
        alt='Banner'
        className='
          object-contain
          w-full
          border-2
          border-white
          rounded-xl
          hover:border-yellow-400
          cursor-pointer'
        width={100}
        height={100}
      />
    </div>
  );
};

export default Banner;
