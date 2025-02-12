import { ParallaxBanner } from 'react-scroll-parallax';

export default function Splash() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: '/images/intro.jpg',
          speed: -20,
        },
      ]}
      style={{ aspectRatio: '4 / 1' }}
    />
  );
}
