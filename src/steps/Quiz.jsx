import { useState } from 'react'
import './Quiz.css'

export const QUESTIONS = [
  {
    q: 'Өвгөн ямар машинаар тосгонд явдаг байв?',
    opts: ['Тансаг шинэ машин', 'Хуучин муу машин', 'Мотоцикл', 'Авто вагон'],
    ans: 1,
  },
  {
    q: 'Тансаг машины жолооч өвгөнөөс юу хүссэн бэ?',
    opts: ['Мөнгө зээлүүл', 'Хоол өг', 'Шатахуун түгээгүүрт хүргэ', 'Утсаа зээлүүл'],
    ans: 2,
  },
  {
    q: 'Өвгөн тансаг машины жолоочид хэрхэн тусалсан бэ?',
    opts: [
      'Шатахуун өгсөн',
      'Машиныг чирж шатахуун түгээгүүрт хүргэсэн',
      'Мөнгө өгсөн',
      'Цагдаа дуудсан',
    ],
    ans: 1,
  },
  {
    q: 'Өвгөн мөнгийг яасан бэ?',
    opts: ['Баярлан авсан', 'Авахаас татгалзсан', 'Хагасыг нь авсан', 'Нэмж гуйсан'],
    ans: 1,
  },
  {
    q: '"Сарвайх" гэдэг үгийн утга аль нь вэ?',
    opts: ['Шидэх', 'Авах', 'Гараа сунган өгөх', 'Гараа өргөх'],
    ans: 2,
  },
  {
    q: '"Өвгөний нүднээс нулимс бөмбөрч эхлэв" — "бөмбөрч" үгийг ямар үгээр солих вэ?',
    opts: ['Дусалж', 'Асгарч', 'Урсаж', 'Эгшиж'],
    ans: 2,
  },
  {
    q: 'Захидал хэн бичсэн байв?',
    opts: ['Тосгоны дарга', 'Генри Форд', 'Өвгөний хүү', 'Нэргүй'],
    ans: 1,
  },
  {
    q: 'Үлгэрийн гол сургамж юу вэ?',
    opts: [
      'Баян хүнтэй нөхөрл',
      'Хуучин машин хэрэглэ',
      'Сайн үйлийн хариу заавал ирдэг',
      'Мөнгийг хадгал',
    ],
    ans: 2,
  },
]

export default function Quiz({ user, onFinish, onBack }) {
  const [answers, setAnswers] = useState({})   // { qi: oi }
  const [locked,  setLocked]  = useState({})   // { qi: true } after picking

  function pick(qi, oi) {
    if (locked[qi]) return
    setAnswers(a => ({ ...a, [qi]: oi }))
    setLocked(l  => ({ ...l, [qi]: true }))
  }

  const answeredAll = Object.keys(locked).length === QUESTIONS.length

  return (
    <div>
      <div className="user-badge">👤 {user.name} · {user.cls} · {user.group}</div>

      {QUESTIONS.map((q, qi) => (
        <div key={qi} className="qcard">
          <div className="qcard-num">{qi + 1} / {QUESTIONS.length}</div>
          <div className="qcard-q">{q.q}</div>
          <div className="qcard-opts">
            {q.opts.map((opt, oi) => {
              let cls = 'opt'
              if (locked[qi]) {
                if (oi === q.ans)          cls += ' opt-correct'
                else if (answers[qi] === oi) cls += ' opt-wrong'
              } else if (answers[qi] === oi) {
                cls += ' opt-selected'
              }
              return (
                <button
                  key={oi}
                  className={cls}
                  onClick={() => pick(qi, oi)}
                  disabled={!!locked[qi]}
                >
                  <span className="opt-letter">{['А','Б','В','Г'][oi]}</span>
                  {opt}
                </button>
              )
            })}
          </div>
        </div>
      ))}

      <button
        className="btn-primary"
        onClick={() => onFinish(answers)}
        disabled={!answeredAll}
      >
        Дүгнэлт харах →
      </button>
      <button className="btn-secondary" onClick={onBack}>← Үгийн санд буцах</button>
    </div>
  )
}
