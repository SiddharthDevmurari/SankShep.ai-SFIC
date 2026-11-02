# Sankshep.ai: SFIC details

Everything about our Seva First Innovation Challenge entry in one place: the problem statement, the team, the links and the setup.

---

## 1. Challenge at a glance

| | |
|---|---|
| **Challenge** | Seva First Innovation Challenge (SFIC) |
| **Track** | Track 2: Bring Your Problem Statement (Open Innovation) |
| **Official Team Code** | TM003665 |
| **Project** | Sankshep.ai |
| **Tagline** | One official document in. Every citizen-ready format out. |
| **Mentor** | Khushali Mam, VGEC (IT), +919714611388 |
| **Team leader** | Siddharth Devmurari |

---

## 2. Links

| What | Link |
|---|---|
| Live app | https://sankshep-sfic.vercel.app |
| GitHub repo | https://github.com/SiddharthDevmurari/SankShep.ai-SFIC |
| Synopsis PPT | `SFIC Synopsis PPT final.pdf` in the repo root, linked from the README card |
| System architecture | `SankShep.ai SFIC architecture file.pdf` in the repo root, linked from the README card (text version in `architecture_slide.md`) |
| Demo login | demo@gmail.com / Demo@1234 (or "Continue with the demo account" on the sign-in page) |

---

## 3. Problem statement (paste-ready form answers)

### Problem Statement Title
Sankshep.ai: Turning Government and Public-Service Information into Citizen-Ready Communication, in Every Format and Language

Shorter options:
- One Source, Every Format: AI-Assisted Public Communication for Government and Social Sector Teams
- Making Official Information Reach Every Citizen: Multi-Format, Multilingual Content from a Single Source

### Target Users / Stakeholders
**Primary users (people who use the tool):**
- Communication and IEC (Information, Education & Communication) officers in government departments and district administrations
- Health workers and PHC staff who pass on health advisories and scheme information
- Panchayat and municipal staff who share notices, scheme updates and announcements
- NGOs and community organisations that explain government schemes to beneficiaries
- Disaster management and cyber-safety teams that issue public advisories

**End beneficiaries:**
- Citizens, especially those who don't read English or find official language hard to follow

**Secondary stakeholders:**
- Departments that handle confidential documents and can't send them to outside AI services. Private mode covers them.

### Discipline / Technology Domain
Generative AI / Natural Language Processing (LLMs), multilingual AI, on-device (edge) AI, Web Technologies, GovTech

### Challenge Overview with Context
Government departments, health systems and social organisations produce a constant stream of important information: scheme guidelines, health advisories, circulars, policy documents, safety alerts and reports. This information only creates value when it reaches the people it's meant for, in a form they can understand and act on.

Today that last step is slow and manual. The same circular has to be rewritten by hand into a short summary for officials, a simple explanation for citizens, a social media post, a presentation for a review meeting, and a script for an awareness video. Each version needs writing skill, time and often translation into regional languages. Small teams, district offices and NGOs rarely have dedicated communication staff, so information often goes out late, in English only, or in dense official language that ordinary citizens can't follow.

Existing AI writing tools help a little, but they produce one output at a time, need technical skill to prompt well, and send documents to outside servers. That isn't acceptable for confidential or sensitive government material.

### Exact Problem Definition
**Root cause:** turning one source document into many audience-ready formats and languages is entirely manual, depends on scarce writing and translation skills, and has no tool that is simple, multi-format and safe for sensitive documents.

**Pain points:**
1. **Repetitive manual effort:** the same content is rewritten many times for different audiences and platforms.
2. **Language barrier:** most official content is written in English or formal language, while citizens need it in Hindi and regional languages and in plain words.
3. **Delays:** time-critical advisories (health, disaster, cyber safety) lose value when communication is slow.
4. **Inconsistency:** different staff rewrite the same facts differently, so messages vary or contain errors.
5. **Skill gaps:** small offices and NGOs lack trained communication and design staff.
6. **Data privacy:** confidential documents can't be uploaded to public AI tools, so those teams get no AI help at all.

### Expected Outcomes / Deliverables
A working web prototype, **Sankshep.ai**, where a user:
1. **Brings any source:** uploads PDF, Word, text, CSV/JSON files or images (including scanned pages, read with OCR), pastes a web link, or pastes text.
2. **Chooses outputs:** picks one or more of 10 formats (Executive Summary, Advisory, Simplified Explanation, PPT Presentation, Video script and storyboard, Infographic content, Blog Post, News Article, Twitter/X Post, Language Translation) or describes a custom format.
3. **Sets the audience and tone:** for example General Public, Manager/Executive, or Technical Team, in a Professional, Casual-friendly, Technical or Academic tone.
4. **Gets every draft at once:** all formats are generated in parallel. Users can then refine them in plain words and download slide decks as PowerPoint files.
5. **Translates:** into English, Hindi, Bengali, Marathi, Telugu, Tamil, Gujarati, Urdu, Kannada, Odia, Malayalam, Punjabi and Assamese.
6. **Works offline for sensitive files:** Private mode runs the AI model entirely on the user's own computer, so confidential documents never leave the device.
7. **Supports accounts and oversight:** sign-in, history of past work, and an admin panel to manage users.

Supporting deliverables: source code, setup README, synopsis PPT and system architecture document.

### Potential Societal & Economic Impact
**For citizens:**
- Government schemes, health advisories and safety alerts reach people faster, in their own language and in simple words.
- Better awareness leads to higher uptake of schemes and services among people who need them most.

**For government and social-sector teams:**
- Hours of rewriting become minutes. One upload produces every version needed.
- Consistent messaging, because every format comes from the same verified source.
- Small offices and NGOs without communication staff can still produce professional material.
- Sensitive documents can use AI safely through Private mode, with no data leaving the device.

**Economic:**
- Lower content-production and translation costs for departments and NGOs.
- Staff time freed for field work and service delivery instead of paperwork.
- Runs on free and low-cost AI models and ordinary hardware, so it's affordable to adopt at district and panchayat level.

### Tips for the entry
- Naming one main example (such as health advisories from PHCs to villagers, or government scheme awareness) and listing the rest as "also works for" can make the entry easier for judges to remember.
- Only add numbers you can source. "India has 22 scheduled languages" is checkable; an unsourced percentage is not.

---

## 4. Team and roles

| # | Name | Role | Owns |
|---|---|---|---|
| 1 | **Siddharth Devmurari** (Team Leader) | AI Pipeline Lead | Generation pipeline, AI model connections (Groq, Gemini, OpenRouter), server API (`/api/chat`), Refine |
| 2 | **Suhani Jain** | Multilingual NLP & Ingestion | File reading (PDF, Word, images, OCR), translation into 6 Indian languages, PowerPoint export |
| 3 | **Harshit Vadher** | Edge AI Inference | Private mode: local LLM through Ollama, streamed output, hardware check, setup guide |
| 4 | **Vraj Patel** | Website & UI Design | Landing, Features, How It Works, About and Contact pages, design theme, installable app (PWA) |
| 5 | **Kalindi Purohit** | Frontend Architecture & State Management | Main workspace: settings sidebar, output canvas, model comparison, Generate and Stop |
| 6 | **Kalee Hindocha** | Backend & Security | Supabase database, login and sign-up, protected routes, Admin panel, History and Analytics |

### Contact details

| Name | Email | GitHub | LinkedIn |
|---|---|---|---|
| Siddharth Devmurari | siddharthdevmurari07@gmail.com | [SiddharthDevmurari](https://github.com/SiddharthDevmurari) | [siddharth-devmurari-4b7915391](https://www.linkedin.com/in/siddharth-devmurari-4b7915391) |
| Suhani Jain | suhanijain26122006@gmail.com | [Suhani2612](https://github.com/Suhani2612) | [suhani-jain-3938a3305](https://www.linkedin.com/in/suhani-jain-3938a3305) |
| Harshit Vadher | harshitsinhvadher@gmail.com | [HarshitsinhVadher](https://github.com/HarshitsinhVadher) | [harshitkumar-vadher-529654350](https://www.linkedin.com/in/harshitkumar-vadher-529654350) |
| Vraj Patel | vrajp4752@gmail.com | [vrajp1010-eng](https://github.com/vrajp1010-eng) | [vraj-patel-07a582377](https://www.linkedin.com/in/vraj-patel-07a582377) |
| Kalindi Purohit | kalindipareek.kp@gmail.com | [kalindi456](https://github.com/kalindi456) | [kalindi-purohit-1b3618319](https://www.linkedin.com/in/kalindi-purohit-1b3618319) |
| Kalee Hindocha | hindochakali26@gmail.com | [KaleeHindocha](https://github.com/KaleeHindocha) | [kalee-hindocha-65324b324](https://www.linkedin.com/in/kalee-hindocha-65324b324) |

---

## 5. What the app does

- **Input:** PDF, Word, text, CSV, JSON, images and scanned pages (OCR), a web link, or pasted text.
- **10 output formats:** Executive Summary, Advisory, Simplified Explanation, PPT Presentation, Video script and storyboard, Infographic content, Blog Post, News Article, Twitter/X Post, Language Translation, plus custom formats.
- **Audience and tone:** General Public, Manager/Executive, Technical Team; Professional, Casual-friendly, Technical, Academic.
- **Languages:** English, Hindi, Bengali, Marathi, Telugu, Tamil, Gujarati, Urdu, Kannada, Odia, Malayalam, Punjabi and Assamese (13 in all). The public website can also be read in all 13.
- **Refine** drafts in plain words; **download** decks as PowerPoint.
- **Private mode:** runs the model on the user's own computer through Ollama (qwen2.5vl:7b), so files never leave the device.
- **Accounts:** sign-in, History, Analytics, Admin panel.

---

## 6. Tech stack

| Layer | Tools |
|---|---|
| Frontend | React 19, TypeScript, Vite 8, Tailwind CSS 4, React Router |
| Backend | Vercel serverless function `/api/chat` (holds the AI keys) |
| Database and login | Supabase (Auth + Postgres with row-level security) |
| Cloud AI | Groq, Google Gemini, OpenRouter |
| Local AI | Ollama, qwen2.5vl:7b |

**OpenRouter models:** openrouter/free, google/gemma-4-31b-it:free, nvidia/nemotron-3-ultra-550b-a55b:free, thinkingmachines/inkling:free (doesn't work through the API), nvidia/nemotron-3.5-lightning:free

---

## 7. Accounts and setup (no secrets here)

| Service | Details |
|---|---|
| Vercel | Account siddharthdevmurari06@gmail.com, team Hydra, project `sankshep-sfic`, root directory `main`, Node 22, deploys on every push to `main` |
| Supabase | Project URL https://jjwplvskiczxoiujcvpr.supabase.co |
| App accounts | Admin: admin@gmail.com (password set in Supabase only). Demo: demo@gmail.com / Demo@1234 |
| Env vars on Vercel | VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, GROQ_API_KEYS, GEMINI_API_KEYS, OPENROUTER_API_KEYS |
| Local keys | `main/.env.local` (git-ignored, never commit it) |

**Run locally:**
```bash
cd main
npm install
npm run dev
```

This project is separate from the original Sankshep.ai (sankshep-ai.vercel.app). It uses its own Supabase project, its own AI keys and its own Vercel account.

---

## 8. Still to do

- [x] Add the Synopsis PPT and link it from the README card.
- [x] Add the System Architecture file and link it from the README card.
- [ ] Change the admin password in Supabase (run `main/supabase/create_admin.sql` in the SQL Editor with a new password in place of `CHANGE_ME`).
