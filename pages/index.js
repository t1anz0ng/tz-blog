import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.css'
import Image from 'next/image'


export default function Home({ allPosts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section classNameName={utilStyles.headingMd}>
        <p>[About]</p>
        <p>
        </p>
      </section> */}
      <div className={styles.main}>
              <div className={styles.mainPageLeft}>
                <div className={styles.title}>
                  <h1 data-sizing='intrinsic'>TianZong</h1>
                </div>

                <div className={styles.lists}>
                  <Link href="/topo"><a>Guide Book</a></Link><br></br>
                  <Link href="/curated"><a>Curated</a></Link><br></br>
                  <Link href="/about"><a>About</a></Link><br></br>
                </div>
                <div>
                
                </div>
              </div>

              <div className={styles.mainPageRight}>
              <Image
                priority
                src="/chinawhite.jpg"
                // classNameName={utilStyles.borderCircle}
                layout="fill"
                objectFit="cover"
                alt={styles.name}
              />
              <h3>  CHINA WHITE(5.12b), 白山, 阳朔 2021.2</h3>
              </div>
            </div>

  
    </Layout>
  )
}

