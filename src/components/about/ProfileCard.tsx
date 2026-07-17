import Image from "next/image";

export function ProfileCard() {
  return (
    <figure className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.09] bg-zinc-900 shadow-[0_24px_70px_rgba(0,0,0,0.35),0_0_60px_rgba(84,118,168,0.07)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <Image
          src="/aman-raj-portrait.png"
          alt="Portrait of Aman Raj"
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 480px, 100vw"
          className="object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>

      <figcaption className="px-1 pt-5">
        <p className="text-lg font-medium tracking-tight text-white">Aman Raj</p>
        <p className="mt-1.5 text-sm text-zinc-300">Computer Engineering Graduate</p>
        <p className="mt-1 text-sm text-zinc-400">AI Solutions Engineer</p>
        <p className="mt-1 text-sm text-zinc-500">Lublin, Poland 🇵🇱</p>
      </figcaption>
    </figure>
  );
}
