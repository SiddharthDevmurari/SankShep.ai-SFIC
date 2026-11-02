import type { DEMO_COPY } from '../../components/demo/copy'

const t: typeof DEMO_COPY.en = {
  region: 'Sankshep Workspace டெமோ',
  description:
    'Sankshep Workspace-இன் அனிமேஷன் செய்யப்பட்ட செயல்முறை விளக்கம். ஒரு பாயிண்டர் அணியின் SFIC problem statement-ஐ மூலமாகச் சேர்க்கிறது, Executive Summary, News Article மற்றும் Slide Deck ஆகியவற்றைத் தேர்ந்தெடுக்கிறது, Audience மற்றும் Model-ஐத் தீர்மானிக்கிறது, வரைவுகளை உருவாக்குகிறது, செய்திக் கட்டுரையைச் செப்பனிடுகிறது, டெக்கை PowerPoint ஆகப் பதிவிறக்குகிறது மற்றும் அதை History-இல் கண்டறிகிறது.',
  play: 'டெமோவை இயக்கு',
  pause: 'டெமோவை நிறுத்து',
  prev: 'முந்தைய படி',
  next: 'அடுத்த படி',
  jump: (label: string) => `இந்த படிக்குச் செல்: ${label}`,
  stepOf: (n: number, total: number) => `படி ${n} / ${total}`,
  chapters: [
    { label: 'மூலத்தைச் சேர்', caption: 'ஒரு அறிக்கை, சுற்றறிக்கை அல்லது இணைப்பைச் சேர்க்கவும். இங்கே, நமது சொந்த SFIC problem statement.' },
    { label: 'வடிவங்களைத் தேர்', caption: 'உங்களுக்குத் தேவையான ஒவ்வொரு வடிவத்தையும் தேர்ந்தெடுக்கவும். அனைத்தும் ஒரே மூலத்திலிருந்தே வரைவு செய்யப்படுகின்றன.' },
    { label: 'Audience & Model', caption: 'இதை யார் படிப்பார்கள் என்று கூறி, பின் அதை எழுதும் Model-ஐத் தேர்ந்தெடுக்கவும்.' },
    { label: 'Generate', caption: 'ஒரே கிளிக்கில் மூன்று வடிவங்களும் ஒரே நேரத்தில் வரைவு செய்யப்படுகின்றன.' },
    { label: 'படித்துச் செப்பனிடு', caption: 'ஒவ்வொரு வரைவையும் படித்து, எளிய சொற்களில் மாற்றங்களைக் கேட்டு, கட்டுரையை முன்னோட்டம் காணவும்.' },
    { label: 'Export', caption: 'டெக்கை PowerPoint ஆகவோ, அல்லது எந்தவொரு வரைவையும் Markdown அல்லது எளிய உரையாகவோ பதிவிறக்கவும்.' },
    { label: 'History', caption: 'ஒவ்வொரு வரைவும் History-இல் சேமிக்கப்படும், அங்கு நீங்கள் வடிவத்தின் அடிப்படையில் வடிகட்டலாம்.' },
  ],
}

export default t
