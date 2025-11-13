import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-4">
            <Link href="/"><a className="text-ssGreen font-bold">Sacred Spores</a></Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/"><a className="text-gray-600 hover:text-ssGreen">Home</a></Link>
            <Link href="/about"><a className="text-gray-600 hover:text-ssGreen">About</a></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
