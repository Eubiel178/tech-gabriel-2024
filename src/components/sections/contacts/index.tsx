import Link from "next/link";
import { FiMail, FiMessageCircle } from "react-icons/fi";
import { contacts, IContact } from "./data";

export function Contacts() {
  return (
    <section
      className="section-shell centered py-y-default bg-secondary"
      id="contact-forms__section"
    >
      <div className="content-width">
        <div className="mb-10">
          <h2 className="section-heading">
            <span className="section-icon">
              <FiMessageCircle />
            </span>{" "}
            Vamos conversar
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Aberto a oportunidades, projetos e parcerias. Escolha o canal que
            preferir.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {contacts.map((item: IContact) => (
            <li key={item.id} className="surface-card transition duration-200">
              <Link
                className="flex min-h-40 flex-col items-center justify-center gap-4 p-5 text-center"
                href={item.link}
                target="_blank"
              >
                <span className="text-4xl">{item.icon}</span>
                <span className="font-semibold">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <a
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-highlight px-5 py-3 font-bold text-slate-950 transition hover:bg-sky-300"
          href="mailto:dev123gabriel@gmail.com"
        >
          <FiMail /> Enviar e-mail
        </a>
      </div>
    </section>
  );
}
