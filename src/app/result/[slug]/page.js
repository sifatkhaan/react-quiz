"use client";
import Analysis from "@/components/Analysis";
import Summary from "@/components/Summary";
import PrivateRoute from "@/hoc/PrivateRoute";
import useAnswers from "@/hoooks/useAnswers";
import useResults from "@/hoooks/useResult";
import { isEqual } from "lodash";
import React from "react";

function Result({ params }) {
  const { slug } = React.use(params);
  const {
    loading: resultLoading,
    error: resultError,
    results,
  } = useResults(slug);
  const { loading, error, answers } = useAnswers(slug);

  function calculate() {
    let score = 0;
    answers.forEach((question, index1) => {
      let corrrectIndex = [];
      let checkedIndex = [];
      question.options.forEach((option, index2) => {
        if (option.correct) corrrectIndex.push(index2);
        if (results[index1].options[index2].checked) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });

      if (isEqual(corrrectIndex, checkedIndex)) {
        score = score + 5;
      }
    });
    return score;
  }

  const userScore = calculate();
  console.log(answers, "answer");
  console.log(results, "result");
  return (
    <>
      {resultLoading || (loading && <div>Loading...</div>)}
      {resultError || (error && <div>There was an error!!</div>)}

      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length}/>
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}
export default PrivateRoute(Result);
