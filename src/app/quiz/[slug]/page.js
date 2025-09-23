"use client";
import Answers from "@/components/Answers";
import MiniPlayer from "@/components/MiniPlayer";
import PrivateRoute from "@/hoc/PrivateRoute";
import ProgressBar from "@/components/ProgressBar";
import React, { useEffect, useReducer, useState } from "react";
import useQuestionsList from "@/hoooks/useQuestionsList";
import cloneDeep from "lodash/cloneDeep";
import { useAuth } from "@/contexts/AuthContext";
import { getDatabase, ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = cloneDeep(state);
      questions[action.questionId].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = ({ params }) => {
  const { slug } = React.use(params);
  const { loading, error, questions } = useQuestionsList(slug);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const router = useRouter();
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const onSubmit = async () => {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [slug]: qna,
    });
    router.push({
      pathname: `result/${slug}`,
      state: { qna },
    });
  };

  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There is an error!!...</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1 className="font-bold text-3xl">{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentage}
            submit={onSubmit}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
};
export default PrivateRoute(Quiz);
