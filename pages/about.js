import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function About(){
    return (
        <Layout>
          <Head>
            <title>{siteTitle}</title>
          </Head>
            <h1>About</h1>
            <p>倪天洋</p>
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