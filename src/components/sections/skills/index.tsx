import { hardSkills, softSkills } from "./data";

import { List } from "./list";

export function Skills() {
  return (
    <section
      className="centered py-y-default bg-secondary"
      id="skills__section"
    >
      <div className="content-width flex gap-10 flex-col">
        <List title="Habilidades Técnicas" data={hardSkills} />

        <List title="Habilidades Comportamentais" data={softSkills} />
      </div>
    </section>
  );
}
