import { VideoList } from "./components/videoList/VideoList";
import { ModalWind } from "./components/modalWind/ModalWind";
import { Game } from "./components/game/Game";
import { Results } from "./components/results/Results";
import React from 'react';
import { Users } from "./components/users/Users";
import { TestComponent } from "./components/testComponent/TestComponent";

function App() {

  const questions = [
    {
        title: 'React it is... ?',
        options: ['library', 'framework', 'app'],
        correct: 0,
    },
    {
        title: 'Reacts it is... ?',
        options: ['library', 'framework', 'app'],
        correct: 0,
    },
    {
        title: 'PiReact it is... ?',
        options: ['library', 'framework', 'app'],
        correct: 0,
    },
    {
        title: 'SiReact it is... ?',
        options: ['library', 'framework', 'app'],
        correct: 0,
    },
    {
        title: 'DiReact it is... ?',
        options: ['library', 'framework', 'app'],
        correct: 0,
    },
    {
        title: 'React it is... ?',
        options: ['library', 'framework', 'app'],
        correct: 0,
    },
    {
        title: 'React it is... ?',
        options: ['library', 'framework', 'app'],
        correct: 0,
    },
    {
        title: 'React it is... ?',
        options: ['library', 'framework', 'app'],
        correct: 0,
    },
    {
        title: 'React it is... ?',
        options: ['library', 'framework', 'app'],
        correct: 0,
    },
    {
        title: 'React it is... ?',
        options: ['library', 'framework', 'app'],
        correct: 0,
    },
]
  const [open, setOpen] = React.useState(true);
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  const countQuestions = questions.length;

  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [serachValue, setSearchValue] = React.useState('');
  const [invites, setInvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data);
      }).catch(err => {
        console.warn(err);
        alert('Error to take data of users')
      }).finally(() => setLoading(false));
  }, []);

  const onClickOption = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    } 
}

  const onChangrSearchValue = (e) => {
    setSearchValue(e.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    }else {
      setInvites(prev => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
}

  return (
    <>
      <h1>Counter</h1>
      <VideoList open={open} setOpen={setOpen}/>
      <ModalWind open={open}/>
      {
        step !== countQuestions ? <Game step={step} question={question} 
        onClickOption={onClickOption}
        countQuestions={countQuestions}/> : 
        <Results correct={correct} countQuestions={countQuestions}/>
      }
       <TestComponent />
      {
        success ? (
          <div>{invites.length} people are included!</div>
        ) : (
          <Users serachValue={serachValue}
            onChangrSearchValue={onChangrSearchValue}
            items={users} isLoading={isLoading}
            invites={invites}
            onClickInvite={onClickInvite}
            onClickSendInvites={onClickSendInvites}/>
        )
      }
    </>
  );
}

export default App;
