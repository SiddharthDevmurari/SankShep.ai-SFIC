import type { DEMO_COPY } from '../../components/demo/copy'

const t: typeof DEMO_COPY.en = {
  region: 'Sankshep ورک اسپیس ڈیمو',
  description:
    'Sankshep ورک اسپیس کا اینیمیٹڈ واک تھرو۔ ایک پوائنٹر ٹیم کا SFIC پرابلم اسٹیٹمنٹ بطور ماخذ جوڑتا ہے، Executive Summary، News Article اور Slide Deck چنتا ہے، آڈینْس اور ماڈل طے کرتا ہے، ڈرافٹ جنریٹ کرتا ہے، نیوز آرٹیکل کو بہتر بناتا ہے، ڈیک کو PowerPoint میں ڈاؤن لوڈ کرتا ہے اور اسے History میں ڈھونڈتا ہے۔',
  play: 'ڈیمو چلائیں',
  pause: 'ڈیمو روکیں',
  prev: 'پچھلا مرحلہ',
  next: 'اگلا مرحلہ',
  jump: (label: string) => `اس مرحلے پر جائیں: ${label}`,
  stepOf: (n: number, total: number) => `مرحلہ ${n} / ${total}`,
  chapters: [
    { label: 'ماخذ جوڑیں', caption: 'کوئی رپورٹ، سرکولر یا لنک ڈالیں۔ یہاں ہمارا اپنا SFIC پرابلم اسٹیٹمنٹ ہے۔' },
    { label: 'فارمیٹس چنیں', caption: 'جو بھی فارمیٹ چاہیے، سب چنیں۔ سب ایک ہی ماخذ سے لکھے جاتے ہیں۔' },
    { label: 'آڈینْس اور ماڈل', caption: 'بتائیں کہ اسے کون پڑھے گا، پھر لکھنے والا ماڈل چنیں۔' },
    { label: 'جنریٹ', caption: 'ایک کلک میں تینوں فارمیٹ ایک ساتھ تیار ہوتے ہیں۔' },
    { label: 'پڑھیں اور سدھاریں', caption: 'ہر ڈرافٹ پڑھیں، سیدھے الفاظ میں تبدیلی مانگیں، پھر آرٹیکل کا پریویو دیکھیں۔' },
    { label: 'ایکسپورٹ', caption: 'ڈیک کو PowerPoint میں، یا کوئی بھی ڈرافٹ Markdown یا سادہ ٹیکسٹ میں ڈاؤن لوڈ کریں۔' },
    { label: 'History', caption: 'ہر ڈرافٹ History میں محفوظ کیا جاتا ہے، جہاں آپ فارمیٹ سے فلٹر کر سکتے ہیں۔' },
  ],
}

export default t
