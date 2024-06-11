import React from 'react'; 
import '../pages/Exercice2.css';

export default function Tweet({ id, name, content, like, onDelete, onLike }) {
    const handleLike = () => {
        console.log("LIKE", name);
        onLike(id); 
    };

    return (
        <div className="tweet">
            <button onClick={() => onDelete(id)} className="delete">❌</button>
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={handleLike}>{like} ♡</button> {}
        </div>
    );
}
