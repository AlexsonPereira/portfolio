import Header from "@/components/header";
import Image from "next/image";
import profileP from "../../../public/Photo.svg";

const techs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "express",
  "python",
  "django",
  "postgresql",
];

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex justify-between mt-16">
        <section className="flex flex-col font-bold text-6xl justify-center">
          <span>Olá 👋🏾</span>
          <span>
            Eu sou <span className="text-primary">Alexson Pereira</span>
          </span>
          <span>{"<Desenvolvedor Full Stack />"}</span>
          <div className="bg-white p-4 rounded-lg mt-2 flex overflow-x-auto space-x-4 max-w-[860px]">
            {techs.map((item) => (
              <Image
                key={item}
                src={`https://cdn.simpleicons.org/${item}`}
                alt={item}
                width={100}
                height={100}
              />
            ))}
          </div>
        </section>
        <section className="w-fit">
          <Image src={profileP} alt="Foto alexson pereira" />
        </section>
      </div>
    </>
  );
}
