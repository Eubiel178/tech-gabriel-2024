import {
  About,
  Skills,
  Layout,
  Projects,
  Contacts,
  DeveloperInfo,
  Experience,
  Posts,
  Network,
} from "../components";

export default function Home() {
  return (
    <Layout>
      <main>
        <DeveloperInfo />
        <About />
        <Network />
        <Experience />
        <Projects />
        {/* <Posts /> */}
        <Skills />
        <Contacts />
      </main>
    </Layout>
  );
}
