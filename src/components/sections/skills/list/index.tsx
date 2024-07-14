import { ISkills } from "../data";

interface IList {
  title: string;
  data: ISkills[];
}

export function List({ title, data }: IList) {
  return (
    <div className="container-config">
      <h2 className="title-2">{title} </h2>

      <ul className="flex flex-wrap	gap-8 ">
        {data.map((item) => (
          <li
            className="flex flex-col gap-5 justify-center items-center text-center bg-tertiary p-8 w-40 small:w-full"
            key={item.id}
          >
            <p className="text-7xl">{item.icon}</p>

            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
