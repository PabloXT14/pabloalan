import React from 'react';
import Head from 'next/head';
import { Wrapper } from '../components/Wrapper';

export default function Home(props) {
  const { title, description, image } = props;

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="descriprion" />
        <meta content={description} property="og:descriprion" />
        <meta content="https://pabloalan.vercel" property="og:url" />
      </Head>

      Content
    </Wrapper>
  )
}
