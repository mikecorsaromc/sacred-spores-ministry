import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 bg-ssLight py-8">
        <div className="max-w-4xl mx-auto p-6">{children}</div>
      </main>
      <footer className="bg-white border-t py-4">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Sacred Spores Ministry
        </div>
      </footer>
    </div>
  )
}
