'use client';
import Answers from "@/components/Answers";
import MiniPlayer from "@/components/MiniPlayer";
import PrivateRoute from "@/hoc/PrivateRoute";
import ProgressBar from "@/components/ProgressBar";

const Quiz =()=> {
  return (
    <>
      <h1 className="font-bold text-3xl">Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
export default PrivateRoute(Quiz)