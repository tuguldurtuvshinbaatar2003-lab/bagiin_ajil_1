import { useState } from 'react'
import Login   from './steps/Login.jsx'
import Story   from './steps/Story.jsx'
import Vocab   from './steps/Vocab.jsx'
import Quiz    from './steps/Quiz.jsx'
import Result  from './steps/Result.jsx'
import './App.css'

export default function App() {
  const [step, setStep]   = useState('login')
  const [user, setUser]   = useState(null)   // { name, cls, group }
  const [answers, setAnswers] = useState({}) // { [qi]: oi }

  function handleLogin(info) {
    setUser(info)
    setStep('story')
  }

  function handleFinish(ans) {
    setAnswers(ans)
    setStep('result')
  }

  function handleReset() {
    setUser(null)
    setAnswers({})
    setStep('login')
  }

  return (
    <div className="page">
      <header className="app-header">
        <span className="app-icon">🤝</span>
        <div>
          <h1 className="app-title">Тус</h1>
          <p className="app-sub">Монгол хэлний үлгэр · 6-р анги</p>
        </div>
      </header>

      {step !== 'login' && (
        <ProgressBar step={step} />
      )}

      {step === 'login'  && <Login  onDone={handleLogin} />}
      {step === 'story'  && <Story  user={user} onNext={() => setStep('vocab')} />}
      {step === 'vocab'  && <Vocab  user={user} onNext={() => setStep('quiz')} onBack={() => setStep('story')} />}
      {step === 'quiz'   && <Quiz   user={user} onFinish={handleFinish} onBack={() => setStep('vocab')} />}
      {step === 'result' && <Result user={user} answers={answers} onReset={handleReset} />}
    </div>
  )
}

const STEPS = ['story', 'vocab', 'quiz', 'result']
const LABELS = { story: 'Эх унших', vocab: 'Үгийн сан', quiz: 'Асуулт', result: 'Дүгнэлт' }

function ProgressBar({ step }) {
  const idx = STEPS.indexOf(step)
  const pct = ((idx + 1) / STEPS.length) * 100
  return (
    <div className="progress-wrap">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: pct + '%' }} />
      </div>
      <div className="progress-labels">
        {STEPS.map((s, i) => (
          <span key={s} className={`prog-label${i === idx ? ' active' : i < idx ? ' done' : ''}`}>
            {LABELS[s]}
          </span>
        ))}
      </div>
    </div>
  )
}
