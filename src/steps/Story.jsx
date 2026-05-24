import { useState } from 'react'
import './Story.css'

const SLIDES = [
  {
    title: 'Өвгөн ба хуучин машин',
    img: '/images/road.png',
    // bg: '#e8f4fb',
    paragraphs: [
      'Өвгөн тэр өдөр мөн л айлуудаас сүүгээ авахаар хуучин муу машинаараа тосгон руу явж байлаа.',
      'Насаараа энэ машинаараа тосгоны айлуудаас сүү авч зарж амьжиргаагаа залгуулжээ.',
    ],
  },
  {
    title: 'Замд тансаг машин зогслоо',
    img: '/images/tuw.png',
    // bg: '#fff3e0',
    paragraphs: [
      'Ингээд явж байтал замын хажууд зогссон тансаг машины жолооч гар өргөн өвгөнөөс хамгийн ойр байгаа шатахуун түгээх газар руу машиныг чирж өгөхийг гуйв.',
      'Өвгөн зөвшөөрч тансаг сайхан машиныг өөрийн муу машинаараа чирсээр шатахуун түгээгүүрийн газар хүргэж өгчээ.',
    ],
  },
  {
    title: 'Өвгөн мөнгийг авсангүй',
    img: '/images/money.png',
    // bg: '#fef3f0',
    paragraphs: [
      'Баян эр халааснаасаа хамгийн том мөнгөн дэвсгэрт гаргаж өвгөнд сарвайхад өвгөн:',
    ],
    quote: '"Хэрэггүй хүү минь, зовсон хүнд тусалсны хариу мөнгө биш шүү дээ"',
    after: 'гээд авсангүй.',
  },
  {
    title: 'Жилүүд өнгөрч амьдрал хэцүүрэв',
    img: '/images/life.png',
    // bg: '#f0f4f8',
    paragraphs: [
      'Энэ явдлаас хойш хэдэн жилийн дараа өвгөний муу машин бүр асахаа байжээ. Өвгөний амьдрал дороо л доройтож эхлэв.',
      'Нэг өдөр тэднийд нэг захидал авчирч өгчээ. Захиаг уншихад ингэж бичсэн байлаа:',
    ],
    quote: '"Таныг нэлээд хүнд амьдралтай байгааг сонслоо. Тиймээ зовсон цагт нь хүн хүндээ туслах ёстой. Энэ хамгийн сүүлийн загварын машин, одоо таных... — Генри Форд"',
  },
  {
    title: 'Нулимс бөмбөрч эхлэв',
    img: '/images/tugsgul.png',
    // bg: '#fff8f0',
    paragraphs: [
      'Өвгөний нүднээс нулимс бөмбөрч эхлэв...',
      'Тиймээ энэ бол машиныг нь шатахуун түгээгүүрийн газар хүргэж өгөөд хариуд нь мөнгийг аваагүй хүн буюу одоо дэлхийн хамгийн шилдэг машинуудын нэг болох "Форд" машины эзэн байсан юм.',
    ],
    suuramj: '💡 Сургамж: "Аяганы хариу өдөртөө, агтны хариу жилдээ"',
  },
]

export default function Story({ user, onNext }) {
  const [cur, setCur] = useState(0)
  const slide = SLIDES[cur]
  const isLast = cur === SLIDES.length - 1

  return (
    <div>
      <div className="user-badge">👤 {user.name} · {user.cls} · {user.group}</div>

      <div className="story-card" style={{ '--slide-bg': slide.bg }}>
        <div className="slide-scene">
          <img src={slide.img} alt={slide.title} className="slide-image" />
          <span className="slide-num">{cur + 1} / {SLIDES.length}</span>
        </div>
        <div className="slide-body">
          <h2 className="slide-title">{slide.title}</h2>
          {slide.paragraphs.map((p, i) => (
            <p key={i} className="slide-para">{p}</p>
          ))}
          {slide.quote && (
            <blockquote className="slide-quote">{slide.quote}</blockquote>
          )}
          {slide.after && <p className="slide-para">{slide.after}</p>}
          {slide.suuramj && (
            <div className="suuramj">{slide.suuramj}</div>
          )}
        </div>
      </div>

      <div className="slide-nav">
        <button
          className="btn-secondary"
          onClick={() => setCur(c => c - 1)}
          disabled={cur === 0}
          style={{ width: 'auto', padding: '12px 20px' }}
        >
          ← Өмнөх
        </button>

        <div className="dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`dot${i === cur ? ' dot-active' : ''}`}
              onClick={() => setCur(i)}
              aria-label={`${i + 1}-р слайд`}
            />
          ))}
        </div>

        {isLast ? (
          <button
            className="btn-primary"
            onClick={onNext}
            style={{ width: 'auto', padding: '12px 20px' }}
          >
            Үгийн сан →
          </button>
        ) : (
          <button
            className="btn-primary"
            onClick={() => setCur(c => c + 1)}
            style={{ width: 'auto', padding: '12px 20px' }}
          >
            Дараах →
          </button>
        )}
      </div>
    </div>
  )
}
