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
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            {data.map((el) => {
              return (
                <a key={el.id} title={el.title} href={el.href}>
                  {el.title}
                </a>
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
}

export default JavaScriptTopic;
