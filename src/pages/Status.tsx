import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'


export function Status() {

  const [answers, setAnswers] = useState<string[]>([])
  const [newAnswer, setNewAnswer] = useState('')

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    if (newAnswer != '') {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
    }
  }

  return (
    <main className="timeline">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam itaque culpa sit, ratione inventore amet nostrum labore accusamus earum obcaecati eius cupiditate ad non. Placeat ratione deserunt iusto corporis temporibus." />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://avatars.githubusercontent.com/u/94457205?v=4" alt="Lucas Mota" />
          <textarea id="tweet"
            placeholder="Tweet Your Answer"
            value={newAnswer}
            onChange={
              (event) => {
                setNewAnswer(event.target.value)
              }
            } />
        </label>

        <button type="submit">Answer</button>
      </form>


      {
        answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })
      }

    </main>


  )
}