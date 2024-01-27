import Image from "next/image";
import githubicon from "../../public/githubicon.svg";
import linkedinicon from "../../public/linkedinicon.svg";
import { siGithub } from "simple-icons";

export default function Header() {
  return (
    <div className="bg-primary w-full">
      <header className="container mx-auto p-6 flex items-center justify-between">
        <h1 className="font-bold text-4xl">{"<AlexsonDev/>"}</h1>
        <ul className="text-3xl flex space-x-5">
          <li>Inicio</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
        <div className="flex space-x-5">
          <a href="https://github.com/AlexsonPereira">
            <Image
              width={48}
              height={48}
              src="https://cdn.simpleicons.org/github/FFFFFF"
              alt="icone github"
            />
          </a>
          <a href="https://www.linkedin.com/in/alexsonpereira/">
            <Image
              width={48}
              height={48}
              src="https://cdn.simpleicons.org/linkedin/FFFFFF"
              alt="icone linkedin"
            />
          </a>
        </div>
      </header>
    </div>
  );
}
