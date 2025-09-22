import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <div className="max-w-screen-lg mx-auto px-5 lg:px-0 min-h-screen">
        <div className="flex flex-col min-h-screen">
          <app-header>
            <div className="mt-4 flex items-center gap-5 border-b pb-4 justify-between">
              <a href="/" title="Constatator">
                <Image priority width="160" height="40" alt="CertificatConstatator.ro" src="/logo.png" />
              </a>
              <div className="flex-1 hidden md:block">
                <nav className="flex gap-6 justify-end items-end font-semibold">
                  <a href="/#order">Comanda certificat constatator</a>
                  <a href="/#about">Despre</a>
                  <a href="/#pricing">Preturi</a>
                </nav>
              </div>
              <button appbtn="" size="sm" variant="black" className="bg-black dark:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring font-medium h-9 hover:bg-black/80 inline-flex items-center justify-center px-3 ring-offset-background rounded-md text-sm text-white transition-colors whitespace-nowrap">Contact</button>
            </div>
          </app-header>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  )
}