import { Link } from "react-router-dom";
export default function Intro() {
  return (
    <div className="text-center">
      <h1 className="text-center text-gray-400 uppercase font-medium-well mt-8">
        Chat with KRKT Coach
      </h1>
      <h1 className="text-center text-blue-111 mt-4 text-lg">
        {" "}
        Welcome to E-Mediates self help bot!
      </h1>
      <p className=" text-center text-blue-111 px-16 mt-4">
        Chat with him to learn valueble insight. His replies get better and
        better the more you talk
      </p>
      <div>
        <img src="/bot.png" alt="http://" className="p-32" />
      </div>
      <div className=" ">
        <Link to='/tab2'>
          <button className="text-white my-4 bg-blue-111 rounded-3xl px-8 py-4 font-medium-well">
            Coaching Session
          </button>
          <h1 className="text-gray-300 uppercase  text-sm my-2 text-center">
            Tap to Begin
          </h1>
        </Link>
      </div>
    </div>
  );
}
