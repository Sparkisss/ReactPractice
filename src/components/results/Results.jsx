import './Results.css'

export function Results({correct, countQuestions}) {
    return (
        <div className='contain'>
            <div>You are OK</div>
            <div>You answer to {correct} question from {countQuestions}!</div>
            <a href="/">
                <button>Replay</button>
            </a>
            
        </div>
    )
}