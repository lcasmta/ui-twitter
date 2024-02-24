import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweet.css';
import { Link } from 'react-router-dom';

interface TweetProps {
    content: string
}

const likes = Math.floor(Math.random() * 100) + 1;

export function Tweet(props: TweetProps) {

    return (
        <Link to="/status" className="tweet">
            <img src="https://avatars.githubusercontent.com/u/94457205?v=4" alt="Lucas Mota" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Lucas Mota</strong>
                    <span>@lcasmta</span>

                </div>

                <p>{props.content}</p>

                <div className="tweet-content-footer">
                    <button type="button"><ChatCircle />{likes}
                    </button>

                    <button type="button"><ArrowsClockwise />
                    </button>
                    <button type="button"><Heart />
                    </button>
                </div>
            </div>
        </Link>

    );

}
