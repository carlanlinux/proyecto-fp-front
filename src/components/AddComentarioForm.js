import React, {useState} from 'react';

const AddComentarioForm = ({nombreArticulo, setInfoArticulo}) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/articles/${nombreArticulo}/comentar`, {
            method: 'post',
            body: JSON.stringify({username, text: commentText}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const body = await result.json();
        setInfoArticulo(body);
        setUsername('');
        setCommentText('');
    }

    return (
        <div id={"add-comment-form"}>
            <h3>Añadir un comentario</h3>
            <label>
                Nombre:
                <input type={"text"} value={username} onChange={(event => setUsername(event.target.value))}/>
            </label>
            <label>
                Comentario:
                <textarea rows={"4"} cols={"50"} value={commentText}
                          onChange={(event => setCommentText(event.target.value))}/>
            </label>
            <button onClick={() => addComment()}>Enviar comentario</button>
        </div>

    );
}

export default AddComentarioForm;
