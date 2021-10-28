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
            <p>Abaabababaabab</p>
        </Layout>
      )
}