import JavaScriptTopic from "../components/JavaScriptTopic";
import { javascriptData } from "../data/data";

function JavaScript() {
  return (
    <>
      <div
        className=" w-full max-h-screen flex  bg-gradient-to-r from-cyan-400 to-blue-800 h-screen
    "
      >
        <div className="container mx-auto mt-14">
          {javascriptData.map((el) => {
            return <JavaScriptTopic key={el.id} title={el.title} data={el.data} />;
          })}
        </div>
      </div>
    </>
  );
}

export default JavaScript;
