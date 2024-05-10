/* eslint-disable react/prop-types */
function JavaScriptTopic({ title, data }) {
  return (
    <div className="md:ml-10 dropdown dropdown-hover w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <button tabIndex={0} role="button" className="btn m-1 w-full">
        {title}
      </button>
      <div
        tabIndex={0}
        className="dropdown-content z-10 menu shadow bg-base-100 rounded-box w-full max-w-xs max-h-80 overflow-y-auto"
      >
        <ul>
          {data.map((el) => (
            <li key={el.id}>
              <a title={el.title} href={el.href} className="block truncate">
                {el.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JavaScriptTopic;




