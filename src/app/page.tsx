import { TextAnimate } from "@/components/ui/text-animate";
import RetroGrid from "@/components/ui/retro-grid";

export default function Home() {
  return (
    <main className="flex justify-center items-center max-w-full flex-col h-screen bg-gray-950">

      <div className="mb-35 font-semibold text-center">
        <TextAnimate animation="blurIn" as="h1" className="text-6xl text-white" delay={0.3}>
          Introducing Podio!
        </TextAnimate>
        <div className="text-neutral-500 text-lg pt-8 font-light text-center">
          <TextAnimate animation="blurIn" as="h1" className=" font-thin text-neutral-400" delay={0.3}>
            Convert any PDF into a high-quality audio file with just a click. Your personal audiobook assistant awaits!
          </TextAnimate>
        </div>
        <div className="flex justify-center items-center text-center mt-10">
          <button className="text-base font-normal bg-green-500 w-32 py-2 rounded-full text-gray-950 hover:w-36 hover:py-3 transition-all duration-300">Get Started</button>
        </div>
      </div>
      <RetroGrid darkLineColor={"black"} />
    </main>
  );
}
