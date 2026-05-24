import { QUESTIONS } from './Quiz.jsx'
import './Result.css'

const GRADES = [
  { min: 8, emoji: '🏆', msg: 'Гайхалтай! Бүх асуултад зөв хариулсан!' },
  { min: 6, emoji: '🌟', msg: 'Маш сайн! Цааш ч хичээгээрэй!' },
  { min: 5, emoji: '👍', msg: 'Сайн оролдлого! Дахин уншаарай.' },
  { min: 0, emoji: '💪', msg: 'Эхийг дахин уншаад оролдоорой!' },
]

export default function Result({ user, answers, onReset }) {
  const score = QUESTIONS.reduce((acc, q, qi) => acc + (answers[qi] === q.ans ? 1 : 0), 0)
  const total = QUESTIONS.length
  const pct   = Math.round((score / total) * 100)
  const grade = GRADES.find(g => score >= g.min)

  return (
    <div>
      <div className="user-badge">👤 {user.name} · {user.cls} · {user.group}</div>

      <div className="result-hero card">
        <div className="score-ring">
          <svg viewBox="0 0 100 100" className="score-svg">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#f0e8e4" strokeWidth="8" />
            <circle
              cx="50" cy="50" r="42"
              fill="none"
              stroke="#e8513a"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 42}`}
              strokeDashoffset={`${2 * Math.PI * 42 * (1 - pct / 100)}`}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="score-inner">
            <span className="score-num">{score}</span>
            <span className="score-den">/ {total}</span>
          </div>
        </div>
        <div className="grade-emoji">{grade.emoji}</div>
        <p className="grade-msg">{grade.msg}</p>
        <p className="grade-pct">{pct}% зөв</p>
      </div>

      <div className="card">
        <div className="section-title">Дэлгэрэнгүй</div>
        {QUESTIONS.map((q, qi) => {
          const correct = answers[qi] === q.ans
          return (
            <div key={qi} className="detail-row">
              <span className={`detail-mark ${correct ? 'mark-ok' : 'mark-no'}`}>
                {correct ? '✓' : '✗'}
              </span>
              <div className="detail-body">
                <div className="detail-q">{qi + 1}. {q.q}</div>
                {!correct && (
                  <div className="detail-answer">
                    Зөв хариулт: {q.opts[q.ans]}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <button className="btn-primary" onClick={onReset}>🔄 Дахин эхлэх</button>
    </div>
  )
}
