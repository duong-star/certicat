import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full">
      <div className="max-w-screen-lg mx-auto px-5 lg:px-0 min-h-screen">
        <div className="flex flex-col min-h-screen">
          <div className="mt-4 flex items-center gap-5 border-b pb-4 justify-between">
            <Link href="/" title="Constatator">
              <Image
                priority
                width="160"
                height="40"
                alt="CertificatConstatator.ro"
                src="/resources/images/logo.png"
              />
            </Link>
            <div className="flex-1 hidden md:block">
              <nav className="flex gap-6 justify-end items-end font-semibold text-black">
                <Link href="/#order">Comanda certificat constatator</Link>
                <Link href="/#about">Despre</Link>
                <Link href="/#pricing">Preturi</Link>
              </nav>
            </div>
            <button
              appbtn=""
              size="sm"
              variant="black"
              className="bg-black dark:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring font-medium h-9 hover:bg-black/80 inline-flex items-center justify-center px-3 ring-offset-background rounded-md text-sm text-white transition-colors whitespace-nowrap"
            >
              Contact
            </button>
          </div>
          <div className="flex-1">
            <div className="mt-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h1 className="font-display text-4xl font-semibold text-slate-900">
                    Certificat Constatator in{" "}
                    <span className="relative whitespace-nowrap text-blue [color:blue!important] font-bold">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 418 42"
                        preserveAspectRatio="none"
                        className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue [fill:blue!important]"
                      >
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                      </svg>{" "}
                      10 minute{" "}
                    </span>
                  </h1>
                  <ul className="mt-5 font-medium tracking-tight space-y-1 text-slate-800">
                    <li>
                      -{" "}
                      <span className="font-bold">Extras beneficiar reali</span>
                    </li>
                    <li>
                      -{" "}
                      <span className="font-bold">
                        Certificat Constatator cu istoric
                      </span>
                    </li>
                    <li>- Program NON STOP 24/24</li>
                    <li>- Livrare in 10 MINUTE pe email și SMS</li>
                    <li>- Original de la Registrul Comerțului</li>
                    <li>- Garantat banii înapoi dacă nu sunteți mulțumit</li>
                  </ul>
                  <div className="mt-8 flex gap-12 items-center justify-center w-full">
                    <Image
                      priority
                      width="80"
                      height="80"
                      alt="Stripe"
                      src="/resources/images/stripe.png"
                      className="shadow-md"
                    />
                    <Image
                      priority
                      width="137"
                      height="80"
                      alt="Stripe"
                      src="/resources/images/ssl.png"
                      className="shadow-md"
                    />
                  </div>
                </div>
                <div className="p-3 md:p-6 rounded-lg border-2 border-slate-400 bg-card focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-card-foreground shadow-md">
                  <h2 className="text-2xl font-bold text-center mb-2 text-black">
                    Completează acum!
                  </h2>
                  <div className="overflow-hidden">
                    <app-form-step
                      subtitle="CUI/CIF certificat"
                      title="Introdu cui"
                      class="block pb-4 relative"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-blue-700 [bg:blue-700!important]"
                      ></div>
                      <div className="group relative flex items-center">
                        <span className="flex h-9 items-center">
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-700 [border:blue-700!important] bg-white">
                            <span className="h-2.5 w-2.5 rounded-full bg-blue-700 [bg:blue-700!important]"></span>
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-bold text-black">
                            Introdu cui
                          </span>
                          <span className="text-sm text-gray-500">
                            CUI/CIF certificat
                          </span>
                        </span>
                      </div>
                      <div className="ml-12">
                        <form
                          noValidate
                          className="flex flex-col md:flex-row gap-2 pt-2 pe-2 ng-untouched ng-pristine ng-invalid"
                        >
                          <input
                            appinput=""
                            placeholder="CUI/CIF"
                            name="cui"
                            formcontrolname="cui"
                            showerrormessage="false"
                            defaultValue=""
                            className="ng-untouched ng-pristine ng-invalid [&amp;.ng-invalid.ng-touched]:border-destructive [&amp;.ng-invalid.ng-touched]:focus-visible:ring-destructive [&amp;.ng-invalid.ng-touched]:text-destructive bg-slate-50 border border-input dark:border-gray-600 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 file:bg-transparent file:border-0 file:font-medium file:text-foreground file:text-sm flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring font-normal h-10 placeholder:text-muted-foreground px-4 py-2 ring-offset-background rounded-md text-sm w-full"
                          />
                          <button
                            appbtn=""
                            size="sm"
                            variant="black"
                            className="bg-blue-700 [bg:blue-700!important] h-[40px] w-[38%] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring font-medium h-9 hover:bg-blue/100 inline-flex items-center justify-center px-3 ring-offset-background rounded-md text-sm text-white transition-colors whitespace-nowrap"
                          >
                            Continuare
                          </button>
                        </form>
                      </div>
                    </app-form-step>
                    <app-form-step
                      title="Tip Document"
                      className="block pb-4 relative"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-blue-700 [bg:blue-700!important]"
                      ></div>
                      <div className="group relative flex items-center">
                        <span className="flex h-9 items-center">
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                            <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-bold text-black">
                            Tip Document
                          </span>
                        </span>
                      </div>
                      <div className="ml-12"></div>
                    </app-form-step>
                    <app-form-step
                      title="Date Facturare"
                      className="block pb-4 relative"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-blue-700 [bg:blue-700!important]"
                      ></div>
                      <div className="group relative flex items-center">
                        <span className="flex h-9 items-center">
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                            <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-bold text-black">
                            Date Facturare
                          </span>
                        </span>
                      </div>
                      <div className="ml-12"></div>
                    </app-form-step>
                    <app-form-step
                      title="Contact"
                      className="block pb-4 relative"
                    >
                      <div className="group relative flex items-center">
                        <span className="flex h-9 items-center">
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                            <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-bold text-black">
                            Contact
                          </span>
                        </span>
                      </div>
                      <div className="ml-12"></div>
                    </app-form-step>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
