import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24">
      <div className="flex flex-col items-center justify-center max-w-3xl px-8 mx-auto mt-8 sm:min-h-screen sm:mt-0 sm:px-0">
        <div>
          <h1 className="py-4 text-5xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-7xl">
            Share Environment Variables Securely
          </h1>
          <p className="mt-6 leading-5 text-zinc-600 sm:text-center">
            Your document is encrypted in your browser before being stored for a
            limited period of time and read operations. Unencrypted data never
            leaves your browser.
          </p>

        </div>
      </div>
    </div>
  );
}
