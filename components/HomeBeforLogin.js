function HomeBeforLogin() {
  return (
    <div className="text-white max-w-lg">
      <h1 className="text-5xl font-medium md:font-bold  tracking-wide ">
        Unlimited movies, TV shows, and more.
      </h1>
      <h2 className="text-2xl mt-4 mb-8  ">
        Watch anywhere. Cancel anytime.
      </h2>
      <p className="text-lg">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col space-y-3 md:flex-row md:space-y-0">
        <input
          className="bg-white p-4 md:min-w-[400px] "
          type="email"
          placeholder="Email address"
          name=""
          id=""
        />
        <button className="flex items-center mx-auto p-2 bg-[#E50914] text-xl px-8   ">
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HomeBeforLogin;
