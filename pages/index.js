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
      </Head>
      <Analytics/>
      <main>
        <Header title="salamander.vc" />
        <p className="description">
          Backing great founders & companies
        </p>
        <p className="description">
        <code>intro@salamander.vc</code>
        </p>
        <ul>
          <li>Postmates (Exit)</li>
          <li>Blue Bottle (Exit)</li>
          <li>Respondly (Exit)</li>
          <li><a href="https://www.truelink.com" target="_blank">True Link</a> (Seed)</li>
          <li><a href="https://www.videoslick.com" target="_blank">VideoSlick</a> (Seed)</li>
          <li><a href="https://realitydefender.com/" target="_blank">Reality Defender</a> (Seed)</li>
          <li><a href="https://secureframe.com/" target="_blank">Secureframe</a> (Series B)</li>
          <li><a href="https://www.haveignition.com/" target="_blank">Ignition</a> (Seed)</li>
          <li><a href="https://genus.ai/" target="_blank">Genus AI</a> (Seed)</li>
          <li><a href="https://www.appcues.com/" target="_blank">Appcues</a> (Seed)</li>
          <li><a href="https://appvance.ai/" target="_blank">Appvance.ai</a> (Seed)</li>
          <li><a href="https://localizejs.com/" target="_blank">localize</a> (Seed)</li>
          <li><a href="https://www.airhouse.io/" target="_blank">airhouse</a> (Seed)</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
