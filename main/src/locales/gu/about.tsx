import type { ReactNode } from 'react'
import type { ABOUT_COPY } from '../../pages/AboutPage'

const Strong = ({ children }: { children: ReactNode }) => <strong className="font-semibold text-ink">{children}</strong>

const t: typeof ABOUT_COPY.en = {
  eyebrow: 'અમારા વિશે',
  intro: <>અમે Sankshep.ai ને <Strong>Seva First Innovation Challenge (SFIC)</Strong> ના Track 2: Open Innovation માટે બનાવી રહ્યા છીએ. આ એક એવું workspace છે જે એક મૂળ દસ્તાવેજને લોકો માટે જરૂરી એવા સ્વરૂપો અને ભાષાઓમાં બદલે છે. અધિકૃત ટીમ કોડ: <Strong>TM003665</Strong>.</>,
  problemLabel: 'SFIC સમસ્યા વિવરણ',
  problem: '“બહુ-ફોર્મેટ જાહેર કન્ટેન્ટ રૂપાંતર માટે સ્વયંસંચાલિત GenAI પ્લેટફોર્મ”',
  why: [
    'સંસ્થાઓ સમાચાર, રિપોર્ટ, એડવાઇઝરી, નીતિ દસ્તાવેજો અને રિસર્ચને બ્રીફ, પોસ્ટ, ડેક અને સ્ક્રિપ્ટમાં બદલવામાં કલાકો ગાળે છે. દરેક વખતે મૂળ દસ્તાવેજ ફરીથી વાંચવો પડે છે, વાચકોને શું જોઈએ છે તે સમજવું પડે છે, અને બધું જ શરૂઆતથી લખવું પડે છે.',
    'Sankshep.ai આ જ કામ તેમના માટે કરે છે. દસ્તાવેજ અપલોડ કરો, ફોર્મેટ અને વાચકો પસંદ કરો, અને દરેક ડ્રાફ્ટ તે જ મૂળ દસ્તાવેજમાંથી એક સાથે લખાઈ જાય છે, ચકાસવા અને સુધારવા માટે તૈયાર.',
  ],
  name: <><span className="font-semibold text-ink">નામ “Sankshep” શા માટે?</span> સંક્ષેપ નો અર્થ “ટૂંકમાં” થાય છે.</>,
  team: 'ટીમ',
  cta: 'જુઓ, અપલોડથી ડ્રાફ્ટ સુધી શું થાય છે.',
  howItWorks: 'આ કેવી રીતે કામ કરે છે',
  readCode: 'કોડ વાંચો',
}

export default t
