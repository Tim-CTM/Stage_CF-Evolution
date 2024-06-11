import React, { useState } from 'react';
import '../pages/Exercice2.css';
import Tweet from '../pages/Tweet';




const DEFAULT_TWEET = [
    {
        id: 0,
        name: "C'est moi",
        content: "Test",
        like: 1,
    },
    {
        id: 1,
        name: "C'est Moua",
        content: "Test1",
        like: 50,
    },
    {
        id: 2,
        name: "C'est Tim",
        content: "Test2",
        like: 75,
    },
    {
        id: 3,
        name: "C'est ???",
        content: "Test3",
        like: 100,
    },
];

function Exercice2() {
    const [tweets, setTweets] = useState(DEFAULT_TWEET);

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const content = event.target.content.value;

        const newTweet = {
            id: tweets[tweets.length - 1]?.id + 1 ?? 0,
            name,
            content,
            like: 0
        };

        setTweets(prevTweets => [...prevTweets, newTweet]);
        event.target.reset();
    };

    const onDelete = (tweetId) => {
        setTweets(curr => curr.filter(tweet => tweet.id !== tweetId));
    };

    const onLike = (tweetId) => {
        setTweets(curr => {
            return curr.map(tweet => {
                if (tweet.id === tweetId) {
                    return { ...tweet, like: tweet.like + 1 }; 
                }
                return tweet;
            });
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='tweet-form'>
                <h4>Nouveau tweet</h4>
                <input placeholder="name" type="text" name="name" />
                <input placeholder="content" type="text" name="content" />
                <input type="submit" />
            </form>
            <div className="Container-1">
                {tweets.map((tweet) => {
                    return (
                        <Tweet
                            key={tweet.id}
                            id={tweet.id}
                            name={tweet.name}
                            content={tweet.content}
                            like={tweet.like}
                            onDelete={() => onDelete(tweet.id)}
                            onLike={() => onLike(tweet.id)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Exercice2;
