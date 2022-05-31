import Head from 'next/head';
import About from 'Components/HomeComponents/About';
import Contact from 'Components/HomeComponents/Contact';
import Projects from 'Components/HomeComponents/Projects';
import Welcome from 'Components/HomeComponents/Welcome';
import { HeaderTagsRenderer } from 'Components/HeaderTagsRenderer';

function Home() {
  return (
    <div className="relative z-index-1">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/portfolio.svg" />
      </Head>

      <HeaderTagsRenderer
        title="Portfolio"
        metaTitle="Portfolio"
        description="Web developer portfolio website"
      />

      <Welcome />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
