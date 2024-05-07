import JavaScriptTopic from "../components/JavaScriptTopic";
import { javascriptData } from "../data/data";

function JavaScript() {
  return (
    <>
      <div
        className=" w-full overflow-auto h-screen flex flex-wrap  bg-gradient-to-r from-cyan-400 to-blue-800 
    "
      >
        <div className="container mx-auto mt-14 h-full">
          {javascriptData.map((el) => {
            return (
              <JavaScriptTopic key={el.id} title={el.title} data={el.data} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default JavaScript;
