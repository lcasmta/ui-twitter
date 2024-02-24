import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'

export function Timeline() {

  const [tweets, setTweets] = useState<string[]>([])
  const [newTweet, setNewTweet] = useState('')

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    if (newTweet != '') {
      setTweets([newTweet, ...tweets]);
      setNewTweet('');
    }

  }

  return (
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://picsum.photos/200" alt="Lucas Mota" />
          <textarea id="tweet"
            value={newTweet}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }} placeholder="What's Happening?" />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />
      {
        tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet} />
        })
      }

    </main>
  )
}