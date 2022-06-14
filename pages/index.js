import About from 'Components/HomeComponents/About';
import Contact from 'Components/HomeComponents/Contact';
import Projects from 'Components/HomeComponents/Projects';
import Welcome from 'Components/HomeComponents/Welcome';
import { HeaderTagsRenderer } from 'Components/HeaderTagsRenderer';

function Home() {
  return (
    <div className="relative z-index-1">
      <HeaderTagsRenderer
        title="Web Developer Portfolio Website"
        metaTitle="Web Developer Portfolio Website"
        description="An experienced Web developer portfolio website, proficient in Javascript reactJS and nextJS"
        image="/images/projects/portfolio.png"
      />

      <Welcome />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
