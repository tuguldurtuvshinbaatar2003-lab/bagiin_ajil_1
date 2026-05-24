# Тус — Монгол хэлний үлгэр

React + Vite интерактив сурах апп.

## Орон нутагт ажиллуулах

```bash
npm install
npm run dev
```

## Vercel-д байршуулах (үнэгүй, нийтэд нээлттэй)

### 1. GitHub-д оруулах

```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/ТАНЬ_НЭР/tus-story.git
git push -u origin main
```

### 2. Vercel-д холбох

1. [vercel.com](https://vercel.com) → **Sign up with GitHub**
2. **Add New Project** → `tus-story` сонгоно
3. Framework Preset: **Vite** (автоматаар илрүүлнэ)
4. **Deploy** → ~30 секундын дотор URL авна

> ⚠️ Vercel нь default-аар **нийтэд нээлттэй**. 
> Dashboard → Settings → nэвтрэлт шаардахгүй байхыг шалгаарай.

### 3. QR code үүсгэх

URL авсны дараа:
- [qr-code-generator.com](https://www.qr-code-generator.com) руу орно
- URL-аа оруулна
- QR зураг татаж хэвлэнэ
