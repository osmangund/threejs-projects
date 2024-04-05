import dynamic from "next/dynamic"

const Scene = dynamic(() => import("@/components/scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute left-1/2 w-full h-full flex justify-center items-center -translate-x-1/2 text-6xl text-white">
      <p>loading...</p>
    </div>
  ),
})

export default function page() {
  return (
    <main className="relative h-screen">
      <Scene />
    </main>
  )
}
