import './Game.css'

export function Game({ question, onClickOption, step, countQuestions}) {

    const percent = Math.round(step / countQuestions * 100);

    return(
        <div className='contain'>
            <div className='progress'>
                <div style={ {width: `${percent}%`} } className='line'></div>
            </div>
            <div>{question.title}</div>
            <ul>
                {
                    question.options.map((text, index) => (
                        <li key={text} onClick={() => onClickOption(index)}>{text}</li>
                    ))
                }
            </ul>
        </div>
    )
}