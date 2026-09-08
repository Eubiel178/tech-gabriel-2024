import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Tema */}
        <meta name="theme-color" content="#1f2233" />

        {/* SEO */}
        <meta
          name="description"
          content="Portfólio de Gabriel da Silva Santos, Desenvolvedor Full Stack com foco em Front-End, React, Next.js, TypeScript, Node.js, integrações e automações."
        />

        {/* Open Graph — WhatsApp, LinkedIn, Facebook etc. */}
        <meta
          property="og:title"
          content="Gabriel da Silva Santos | Desenvolvedor Full Stack"
        />

        <meta
          property="og:description"
          content="Desenvolvedor Full Stack com foco em React, Next.js, TypeScript, Node.js, integrações e automações."
        />

        <meta
          property="og:image"
          content="https://tech-gabriel-2024.vercel.app/images/foto-perfil.png"
        />

        <meta
          property="og:url"
          content="https://tech-gabriel-2024.vercel.app"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gabriel da Silva Santos" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter/X — também aproveita a mesma imagem */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Gabriel da Silva Santos | Desenvolvedor Full Stack"
        />

        <meta
          name="twitter:description"
          content="Desenvolvedor Full Stack com foco em React, Next.js, TypeScript, Node.js, integrações e automações."
        />

        <meta
          name="twitter:image"
          content="https://tech-gabriel-2024.vercel.app/images/foto-perfil.png"
        />

        <link rel="canonical" href="https://tech-gabriel-2024.vercel.app" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
