import { Button } from "@/components/ui/button"
import { FileAudio, Headphones, Zap } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main className="container mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Introducing to Podio
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Convert any PDF into a high-quality audio file with just a click. Your personal audiobook assistant awaits!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={<FileAudio className="w-6 h-6" />}
            title="Easy Conversion"
            description="Upload PDF, get audio instantly"
          />
          <FeatureCard
            icon={<Headphones className="w-6 h-6" />}
            title="Listen Anywhere"
            description="Enjoy on any device, anytime"
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Fast Processing"
            description="Quick and accurate conversions"
          />
        </div>

        <Link href={"/upload"}>
          <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-black font-semibold border-none mt-16 transition-colors duration-300">
            Get Started
          </Button>
        </Link>

      </main>
    </div>
  )
}

type FeatureCardProps = {
  icon: any
  title: String
  description: String
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors duration-300 flex flex-col items-center text-center group">
      <div className="p-3 rounded-full bg-gray-700 group-hover:bg-gray-600 transition-colors duration-300 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

