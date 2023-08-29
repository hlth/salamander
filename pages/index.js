import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Analytics from '@components/Analytics'

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Early stage investor. salamander.vc</title>
        <link rel="icon" href="/favicon.ico" />
        <Analytics/>
      </Head>
      <main>
        <Header title="salamander.vc" />
        <p className="description">
          Backing great founders & companies<code>intro@salamander.vc</code></p>
      </main>
      <Footer />
    </div>
  )
}
