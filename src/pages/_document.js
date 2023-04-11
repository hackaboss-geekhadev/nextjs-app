import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/header'
import HeadSeo from '@/components/head'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-black container mx-auto'>
        <HeadSeo />
        <Header />
        <main className='container mx-auto'>
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  )
}
