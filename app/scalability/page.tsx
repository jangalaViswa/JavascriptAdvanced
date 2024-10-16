import Scale from 'public/scale.jpg';
import Hero from '../../components/hero';

export default function Home() {
  return (
    <Hero imgData={Scale} altString="Scale Page"  headerText="Scale cloud works"/>
  )
}