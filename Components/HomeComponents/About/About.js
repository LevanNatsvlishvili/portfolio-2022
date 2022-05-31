import FrontText from 'Components/Animations/FrontText';
import Button from 'Components/Button';
import { paths } from 'Routing/Paths';
import useStore from 'Store/Context';
import Image from 'next/image';

function About() {
  const { currView, handleNavigationLoading } = useStore();

  return (
    <section className="relative">
      <div className="w-full absolute left-1/5 sm:left-40 z-10">
        <FrontText
          shouldDisplay={currView === 1}
          heading1="About Me"
          bottom="Experience, Contracts and more..."
        />
        <div>
          <Button onClick={() => handleNavigationLoading(paths.about)}>
            Read More
          </Button>
        </div>
      </div>
      <div
        className={`w-[90%] lg:w-1/2 h-[70%] lg:h-1/2 lg:ml-100 relative glass-effect ${
          currView === 1 ? 'glass-effect-active' : ''
        } `}
      >
        {/* <img
          className="object-cover w-full h-full rounded-lg"
          src="images/me.jpg"
          alt="profile"
        /> */}
        <Image
          className="object-cover w-full h-full rounded-lg"
          src="/images/me.jpg"
          layout="fill"
          alt="profile"
        />
      </div>
    </section>
  );
}

export default About;
