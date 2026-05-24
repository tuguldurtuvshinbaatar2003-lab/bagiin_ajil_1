import { useState } from 'react'
import './Login.css'

const CLASSES = ['5А','5Б','5В','6А','6Б','6В','7А','7Б','7В']
const GROUPS  = ['1-р бүлэг','2-р бүлэг','3-р бүлэг','4-р бүлэг']

export default function Login({ onDone }) {
  const [cls,   setCls]   = useState('')
  const [group, setGroup] = useState('')
  const [name,  setName]  = useState('')

  const ready = cls && group && name.trim().length > 0

  function handleStart() {
    if (!ready) return
    onDone({ name: name.trim(), cls, group })
  }

  return (
    <div className="login-wrap">
      <div className="login-hero">
        <div className="login-emoji">🤝</div>
        <h2>Сайн уу!</h2>
        <p>Эхлэхийн өмнө мэдээллээ бөглөөрэй</p>
      </div>

      <div className="card">
        <div className="field">
          <label className="field-label">Анги</label>
          <select
            className="field-input"
            value={cls}
            onChange={e => setCls(e.target.value)}
          >
            <option value="">— Ангиа сонго —</option>
            {CLASSES.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="field">
          <label className="field-label">Бүлэг</label>
          <select
            className="field-input"
            value={group}
            onChange={e => setGroup(e.target.value)}
          >
            <option value="">— Бүлгээ сонго —</option>
            {GROUPS.map(g => <option key={g}>{g}</option>)}
          </select>
        </div>

        <div className="field">
          <label className="field-label">Нэр</label>
          <input
            className="field-input"
            type="text"
            placeholder="Нэрээ бичнэ үү..."
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleStart()}
            maxLength={40}
          />
        </div>

        <button className="btn-primary" onClick={handleStart} disabled={!ready}>
          Эхлэх →
        </button>
      </div>
    </div>
  )
}
