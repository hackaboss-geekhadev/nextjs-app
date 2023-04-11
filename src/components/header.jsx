import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center py-8 gap-3 justify-between'>
      <h1 class="
        font-extrabold
        text-transparent
        text-4xl
        bg-clip-text
        bg-gradient-to-r
        from-yellow-400
        to-orange-600"
      >
        Next Store
      </h1>
      <nav className='mt-2'>
        <ul className='flex gap-3'>
          <li>
            <Link href='/' className='text-white hover:text-yellow-400 font-bold'>
              Tienda
            </Link>
          </li>
          <li>
            <Link href='/services' className='text-white hover:text-yellow-400 font-bold'>
              Servicios
            </Link>
          </li>
          <li>
            <Link href='/contact' className='text-white hover:text-yellow-400 font-bold'>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
