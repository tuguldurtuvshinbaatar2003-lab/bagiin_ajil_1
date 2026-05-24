import './Vocab.css'

const WORDS = [
  { word: 'сарвайх',    def: 'Юм авах, өгөхөөр гар сунгах' },
  { word: 'тансаг',     def: 'Маш үнэтэй, гоё, зэрэглэл өндөртэй' },
  { word: 'залгуулах',  def: 'Дутагдсан зүйлийг нөхөх' },
  { word: 'амьжиргаа',  def: 'Өдөр тутмын хоол хүнс, аж төрөх байдал' },
  { word: 'доройтох',   def: 'Муудах, буурах, хэцүү болох' },
  { word: 'бөмбөрөх',  def: 'Нулимс дусаад урсаж эхлэх' },
  { word: 'таталгах',   def: 'Гарын үсэг зурах' },
  { word: 'чирэх',      def: 'Нэг юмыг нөгөөгөөр татаж хөдөлгөх' },
]

export default function Vocab({ user, onNext, onBack }) {
  return (
    <div>
      <div className="user-badge">👤 {user.name} · {user.cls} · {user.group}</div>

      <div className="card">
        <div className="section-title">📚 Шинэ үгийн тайлбар</div>
        <div className="vocab-list">
          {WORDS.map((w, i) => (
            <div key={i} className="vocab-row">
              <span className="vocab-word">{w.word}</span>
              <span className="vocab-def">{w.def}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="btn-primary" onClick={onNext}>Асуулт руу орох →</button>
      <button className="btn-secondary" onClick={onBack}>← Эх уншлагад буцах</button>
    </div>
  )
}
