import Head from "next/head";

import {
  About,
  Skills,
  Layout,
  Projects,
  Contacts,
  DeveloperInfo,
  Experience,
} from "@/components";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tech Gabriel</title>
      </Head>

      <main>
        <DeveloperInfo />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </main>
    </Layout>
  );
}
