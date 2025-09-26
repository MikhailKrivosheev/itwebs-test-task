const LI_STYLES =
  'flex flex-col gap-3 relative pl-6 before:content-["•"] before:absolute before:left-0 before:top-0 before:text-black';

function Hero() {
  return (
    <section className="hero pt-[186px]">
      <div className="container pb-24 [&>p]:mb-2">
        <h1 className="mb-4">Hello, dear candidate.</h1>
        <p>
          To expedite the process of assessing your knowledge, we would like you to complete a test
          assignment, which will take a relatively short time.
        </p>
        <p>
          We are not interested in using the software you&apos;ve developed for commercial purposes,
          but rather in assessing your knowledge level.
        </p>
        <p>This position is suitable for Junior+/Middle-level developers.</p>
        <p>
          A little about us. We are a relatively new team in the market and are currently
          transitioning to a new level of operations. Our company policy is to give all employees
          more freedom in decision-making. In other words, we&apos;re not looking for just a
          developer who uses the knowledge they&apos;ve learned during their internship, but someone
          who can offer their own options and ideas, should they arise.
        </p>
        <p>Our work format is remote.</p>
        <p>
          Salary: discussed during the final call with management. Our calculation system is
          KPI-based, meaning salary depends on the employee&apos;s monthly workload.
        </p>
        <h2 className="mt-8">Let&apos;s move on to the job description:</h2>
        <h3 className="mt-2">Web application development on Next.</h3>
        <ul className="mt-4 flex flex-col gap-4">
          <li className={LI_STYLES}>
            <h3>Required elements in the application</h3>
            <h4>Next routing</h4>
            <div className="ml-3 flex flex-col gap-2">
              <span>1. Create 4 pages, each with its own page rendering style</span>
              <span>2. Display API interactions; for example, you can use jsonplaceholder</span>
              <span>
                3. Create a modal window with at least 2 input fields (1 - text, 2 - file)
              </span>
              <span>
                4. Display the sending of a POST request with the data collected from the modal
                window (optionally, you can also display WebSockets)
              </span>
            </div>
          </li>
          <li className={LI_STYLES}>
            <h4>Restrictions and rules</h4>
            <span>1. You are not limited in using third-party libraries.</span>
            <span>2. One important factor will be the architecture of your project.</span>
            <span>3. Be sure to demonstrate your skills in working with styles.</span>
            <span>4. Try to demonstrate all your skills in the test task.</span>
          </li>
          <li className={LI_STYLES}>
            <h4>Deadlines and results</h4>
            <span>1. We allocate one week to complete this task.</span>
            <span>2. Deploy your project to vercel.app and publish it on GitHub.</span>
            <span>3. Once completed, fill out the following form.</span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1GSP3vNjG_ShrclOX8Bc2btJE_zoRYksRgnZEm4G4qRENog/viewform?usp=header"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://docs.google.com/forms/d/e/1FAIpQLSd1GSP3vNjG_ShrclOX8Bc2btJE_zoRYksRgnZEm4G4qRENog/viewform?usp=header
            </a>
            <span>
              4. We will contact you based on the results, regardless of whether you are a good fit.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
