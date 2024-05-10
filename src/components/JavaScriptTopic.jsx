/* eslint-disable react/prop-types */
function JavaScriptTopic({ title, data }) {
  console.log(data);

  return (
    <>
      <div className=" dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1">
          {title}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-80 max-h-80 overflow-y-auto"
        >
          {data.map((el) => (
            <li key={el.id}>
              <a title={el.title} href={el.href} className="block truncate">
                {el.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default JavaScriptTopic;
