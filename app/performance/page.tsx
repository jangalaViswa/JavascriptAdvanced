
import Peformance from 'public/performance.jpg';
import Hero from '../../components/hero';

export default async function Home() {
  await new Promise((r) => setTimeout(r, 1000));
  return (
    <Hero imgData={Peformance} altString="Performance Page"  headerText="Peformance cloud works"/>
  )
}