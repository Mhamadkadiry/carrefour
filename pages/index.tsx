import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import Carousel from '../components/Main/Carousel'
import MainBody from "../components/Main/MainBody"
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <Carousel />
        <MainBody />
      </Main>
    </div>
  )
}

export default Home
