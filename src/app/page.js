import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full shadow-custom">
      <div className="max-w-screen-lg mx-auto px-5 lg:px-0 min-h-screen mt-[50px] mb-[50px]">
        <div className="flex flex-col min-h-screen p-[30px] bg-[rgba(255,255,255,0.3)] rounded-3xl shadow-[0_0_2px_2px_rgba(255,255,255,0.5)]">
          <div className="flex items-center gap-5 border-b pb-4 justify-between">
            <Link href="/" title="Constatator">
              <Image
                priority
                width="200"
                height="70"
                alt="CertificatConstatator.ro"
                src="/resources/images/newlogo.png"
                className="w-[200px] h-[70px]"
              />
            </Link>
            <div className="flex-1 hidden md:block">
              <nav className="flex gap-6 justify-end items-end font-semibold text-black">
                <Link href="/#order">Comanda certificat constatator</Link>
                <Link href="/#about">Despre</Link>
                <Link href="/#contact">Contact</Link>
              </nav>
            </div>
            {/* <button
              appbtn=""
              size="sm"
              variant="black"
              className="bg-black dark:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring font-medium h-9 hover:bg-black/80 inline-flex items-center justify-center px-3 ring-offset-background rounded-md text-sm text-white transition-colors whitespace-nowrap"
            >
              Contact
            </button> */}
          </div>
          <div className="flex-1">
            <app-hero>
              <div className="mt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h1 className="font-display text-4xl font-semibold text-slate-900 mb-[3px]">
                      Certificat
                    </h1>
                    <h1 className="font-display text-4xl font-semibold text-slate-900 mb-[3px]">
                      Constatator in
                    </h1>
                    <h1 className="font-display text-4xl font-semibold text-blue-500 mb-[3px]">
                      10 minute
                    </h1>
                    <ul className="mt-5 font-medium tracking-tight space-y-1 text-slate-800 font-system-ui">
                      <li>Extras beneficiar reali</li>
                      <li>- Program NON STOP 24/24</li>
                      <li>- Livrare in 10 MINUTE pe email și SMS</li>
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
                              className="ng-untouched ng-pristine ng-invalid [&amp;.ng-invalid.ng-touched]:border-destructive [&amp;.ng-invalid.ng-touched]:focus-visible:ring-destructive [&amp;.ng-invalid.ng-touched]:text-destructive bg-slate-50 border border-input dark:border-gray-600 dark:placeholder-gray-400 dark:text-black disabled:cursor-not-allowed disabled:opacity-50 file:bg-transparent file:border-0 file:font-medium file:text-foreground file:text-sm flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring font-normal h-10 placeholder:text-muted-foreground px-4 py-2 rounded-md text-sm w-full"
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
            </app-hero>
            <app-features>
              <app-divider className="mt-12">
                <div className="mt-12">
                  <div className="mx-auto w-full h-px [background:_radial-gradient(50%_50%_at_50%_50%,_rgba(22,_22,_18,_0)_0%,_rgba(22,_22,_18,_0.14)_50.52%,_rgba(22,_22,_18,_0)_100%)]"></div>
                </div>
              </app-divider>
              <section className="pt-8 pb-12 p x-5">
                <div className="max-w-[600px] mx-auto">
                  <h2 className="text-2xl md:text-4xl font-bold mt-5 text-center tracking-tight text-black">
                    {" "}
                    ⚡️ Comanda certificat constatator online{" "}
                  </h2>
                </div>
              </section>
            </app-features>
          </div>
        </div>
      </div>
    </div>
  );
}
