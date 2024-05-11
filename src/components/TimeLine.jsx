function TimeLine() {
  return (
    <>
      <ul className="text-black timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">1940</time>
            <div className="text-lg font-black">First Programming Language</div>
            The invention of programming languages spans several decades and
            involves numerous contributors. One of the earliest programming
            languages was `Plankalkül,` conceptualized by Konrad Zuse in the
            1940s, though it was not implemented until much later. However,
            modern programming languages began to emerge in the 1950s and 1960s,
            with significant contributions from pioneers like Grace Hopper
            (COBOL), John McCarthy (LISP), and John Backus (Fortran). Since
            then, the evolution of programming languages has been ongoing, with
            new languages continuously being developed to address different
            programming paradigms, domains, and requirements.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">1995</time>
            <div className="text-lg font-black">JavaScript</div>
            JavaScript was invented by Brendan Eich in 1995 while he was working
            at Netscape Communications Corporation. It was originally conceived
            as a lightweight scripting language to add interactivity to web
            pages in Netscape Navigator, one of the earliest web browsers. Eich
            developed JavaScript in just 10 days, drawing inspiration from
            various programming languages such as Java, Scheme, and Self.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2009</time>
            <div className="text-lg font-black">NodeJs</div>
            Node.js, an open-source, cross-platform JavaScript runtime
            environment, was created by Ryan Dahl in 2009. It enables
            server-side execution of JavaScript, initially built on the V8
            JavaScript engine by Google. Node.js revolutionized web development
            by allowing developers to use JavaScript for both client-side and
            server-side programming, unifying the language across the entire web
            stack and enabling efficient asynchronous I/O operations.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2013</time>
            <div className="text-lg font-black">ReactJs</div>
            React, created by Jordan Walke at Facebook in 2011, revolutionized
            front-end web development. It introduced a component-based
            architecture, virtual DOM, and simplified state management. Released
            as open-source in 2013, React quickly gained popularity for its
            efficiency and flexibility, becoming a cornerstone of modern web
            development.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2016</time>
            <div className="text-lg font-black">NextJs</div>
            Next.js, a popular React framework for building server-rendered
            React applications, was developed by Guillermo Rauch and the team at
            Vercel (formerly ZEIT) in 2016. It simplifies the process of
            building React applications with features like server-side
            rendering, static site generation, and automatic code splitting.
            Next.js streamlines the development of performant and SEO-friendly
            web applications, accelerating the adoption of modern web
            development practices.
          </div>
        </li>
      </ul>
    </>
  );
}

export default TimeLine;
