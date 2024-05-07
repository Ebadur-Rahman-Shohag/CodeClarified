import ReactTopic from "../components/ReactTopic";
import { reactData } from "../data/data";

function ReactJs() {
  return (
    <>
      <div
        className=" w-full max-h-screen flex"
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
