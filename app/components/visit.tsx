const Visit = () => {
  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 py-16 text-center text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/visit.avif')] bg-cover bg-center bg-no-repeat brightness-[0.6]"
      />
      <div className="relative z-10 flex flex-col items-center">
        <h3 className="mt-0 mb-4 text-xs font-normal uppercase leading-normal tracking-[0.18em]">
          we are not far away
        </h3>

        <h2 className="mb-6 text-[40px] font-normal leading-[1.2] tracking-[0.06em]">
          Visit us in store
        </h2>

        <button
          type="button"
          className="mt-0 box-border inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-white bg-white px-6 text-xs font-normal leading-normal tracking-[0.18em] text-black transition-all duration-300 hover:bg-gray-200 hover:cursor-pointer"
        >
          <span className="uppercase">find a store</span>
        </button>
      </div>
    </section>
  );
};

export default Visit;
