import ReactTopic from "../components/ReactTopic";
import { reactData } from "../data/data";

function ReactJs() {
  return (
    <>
      <div
        className=" w-full max-h-screen flex  bg-gradient-to-r from-cyan-400 to-blue-800 h-screen
    "
      >
        <div className="container mx-auto mt-14">
          {reactData.map((el) => {
            return (
              <ReactTopic key={el.id} title={el.title} data={el.data} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ReactJs;
