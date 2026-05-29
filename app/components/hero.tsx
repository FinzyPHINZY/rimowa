import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center mb-12">
      <Image
        src="/hero.avif"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="mb-4 font-sans text-[64px] font-normal leading-tight tracking-[0.06em] text-white">
          Essential Lite Kids: <br /> Engineered for Little Explorers
        </h1>
        <button
          type="button"
          className="mt-0 box-border inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-white bg-white px-6 text-xs font-normal leading-normal tracking-[0.18em] text-black transition-all duration-300 hover:bg-gray-200 hover:cursor-pointer"
        >
          <span className="uppercase">Discover</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
