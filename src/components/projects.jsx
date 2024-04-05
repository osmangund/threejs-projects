import Image from "next/image"

const projects = {
  torus: {
    title: "Torus",
    description: "A torus, dancing in front of the Hello World text.",
  },
  test: {
    title: "test",
    description: "A test project.",
  },
}

export default function Projects() {
  return (
    <section className="min-h-screen w-full flex flex-1 flex-wrap gap-4">
      {Object.entries(projects).map(([key, value]) => (
        <Project key={key} {...value} />
      ))}
    </section>
  )
}

const Project = ({ title, description }) => {
  const href = `/${title.toLowerCase()}`
  const src = `/images/${title.toLowerCase()}.png`
  const UPPERCASED_TITLE = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <div className="relative w-[calc(50%-1rem)] max-h-80 p-4">
      <a
        href={href}
        className="flex flex-col gap-4 bg-gray-100 rounded-lg p-4 w-full"
      >
        <div>
          <h2 className="font-semibold text-3xl">{UPPERCASED_TITLE}</h2>
          <p className="text-lg">{description}</p>
        </div>
        <div className="relative w-full h-80">
          <Image src={src} alt={description} fill="true" objectFit="cover" />
        </div>
      </a>
    </div>
  )
}
