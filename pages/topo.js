import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Topo(){
    return (
        <Layout>
          <Head>
            <title>{siteTitle}</title>
          </Head>
            <h1>Guidebook</h1>

            <h2>Baiyanxia/白岩下</h2>
            <p>by: Tianzong(倪天洋),  translated by: yaqing</p>
            <p>Languages: English and Chinese/双语版 </p>
            <p>Click the Link download the guidebook.</p>
            <Link href="https://glutclimbing-1304539596.file.myqcloud.com/topo/baiyanxia.pdf"><a>Download</a></Link><br></br>
            <div>
                <Image 
                    priority
                    src="https://glutclimbing-1304539596.cos.ap-shanghai.myqcloud.com/cover.jp2"
                    alt="cover pic"
                    height={400}
                    width={800}
                    layout="intrinsic"
                    />
            </div>
            
            
        </Layout>
      )
}