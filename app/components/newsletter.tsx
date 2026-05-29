const Newsletter = () => {
  return (
    <div className="py-20 bg-[#f7f7f7] px-5 text-center text-[#0d0900] text-sm flex flex-col">
      <h3 className="text-xs uppercase mb-4 font-normal">Get in touch</h3>
      {/* letter-spacing: .18em; line-height: 1.5; */}

      <h2 className="text-2xl mb-8 font-normal">Sign up for our Newsletter</h2>
      {/* letter-spacing: .02em;  line-height: 1.1; */}

      <form action="" className="text-sm">
        {/* letter-spacing: .5px; line-height: 24px; */}
        <div className="flex flex-col">
          <label htmlFor="email" className="">
            Email Address
          </label>
          <input type="text" key="email" className="border" />
        </div>{' '}
        <button
          type="submit"
          className="bg-[#0d0900] text-white text-xs font-normal px-6 uppercase max-w-none w-full py-3.5 cursor-pointer inline-block mt-8"
        >
          {/* letter-spacing: .18em; line-height: 1.5; */}
          {/* transition: border .3s ease,background .3s ease,color .3s ease,margin .3s ease,padding .3s ease,transition .3s ease; */}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
