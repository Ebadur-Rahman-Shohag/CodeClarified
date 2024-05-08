import JavaScriptTopic from "../components/JavaScriptTopic";
import { javascriptData } from "../data/data";

function JavaScript() {
  return (
    <>
      <div className="w-full">
        <div className="container mx-auto mt-14">
          {javascriptData.map((el) => {
            return (
              <>
                <JavaScriptTopic key={el.id} title={el.title} data={el.data} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default JavaScript;
