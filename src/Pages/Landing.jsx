import TimeLine from "../components/TimeLine";

function Landing() {
  return (
    <>
      <div className="hero min-h-screen text-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanRqNHA2cnIzNDZ1MWdoams2YXVmNWNya2V0ZzN6ejJjejY2NjlkZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      
      <TimeLine/>
    </>
  );
}

export default Landing;
