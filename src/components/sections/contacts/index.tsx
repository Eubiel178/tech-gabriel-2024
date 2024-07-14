import Link from "next/link";

import { contacts, IContact } from "./data";

export function Contacts() {
  return (
    <section
      className="centered py-y-default bg-secondary"
      id="contact-forms__section"
    >
      <div className="content-width container-config">
        <h2 className="title-2">
          <span className="border-bottom">Con</span>tatos
        </h2>
        <ul className="flex flex-wrap	gap-8">
          {contacts.map((item: IContact) => (
            <li
              key={item.id}
              className="flex justify-center items-center bg-tertiary small:w-full "
            >
              <Link
                className="flex flex-col gap-5 justify-center items-center text-center p-8 w-40 "
                href={item.link}
                target="_blank"
              >
                <p className="text-7xl">{item.icon}</p>

                <p>{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>{" "}
      </div>
    </section>
  );
}
