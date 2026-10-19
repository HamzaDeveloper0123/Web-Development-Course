:root {
  --ink: #101a14;
  --canopy: #1f3a27;
  --moss: #4f6f3f;
  --mist: #ecf0e7;
  --card: #ffffff;
  --mulberry: #8e2f4a;
  --mulberry-dk: #6f2037;
  --sand: #d9c7a3;
  --deep: #0f1c14;
  --muted: #58655b;
  --line: #d3dacb;
  --field: #ffffff;
  --r: 6px;
  --display: "Bricolage Grotesque", "Segoe UI", system-ui, sans-serif;
  --text: "Newsreader", Georgia, "Times New Roman", serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font: 400 1.125rem/1.65 var(--text);
  background: var(--mist);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  margin-left: 1.2em;
}

h1,
h2,
h3,
h4,
label,
legend,
th,
small,
figcaption,
.btn,
nav,
.fact strong {
  font-family: var(--display);
}

h1,
h2,
h3 {
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

h2 {
  font-size: clamp(2rem, 4.2vw, 3.2rem);
}

h3 {
  font-size: 1.35rem;
  letter-spacing: -0.02em;
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
.nav-check:focus-visible + .nav-toggle {
  outline: 2px solid var(--mulberry);
  outline-offset: 3px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

section {
  padding: clamp(64px, 9vw, 120px) 0;
}

section.tight {
  padding-top: clamp(28px, 4vw, 48px);
}

.section-head {
  max-width: 680px;
  margin-bottom: clamp(28px, 4vw, 48px);
}

.section-head p,
.section-sub {
  color: var(--muted);
  margin-top: 14px;
}

.lead {
  font-size: 1.35rem;
  line-height: 1.5;
  margin: 18px 0 16px;
}

.mt {
  margin-top: clamp(56px, 8vw, 96px);
}

.mt-s {
  margin-top: 28px;
}

header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: color-mix(in srgb, var(--mist) 90%, transparent);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--display);
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.logo-mark {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--canopy);
  color: #fff;
  display: grid;
  place-items: center;
}

.logo-mark svg {
  width: 20px;
  height: 20px;
}

.logo small {
  display: block;
  font-weight: 400;
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0;
}

nav ul {
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 28px;
}

nav a {
  font-family: var(--display);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 6px 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s;
}

nav a:hover {
  border-color: var(--moss);
}

nav a[aria-current="page"] {
  border-color: var(--mulberry);
}

nav a.nav-cta {
  background: var(--mulberry);
  color: #fff;
  padding: 10px 22px;
  border-radius: 999px;
  border: 0;
  transition: background 0.2s;
}

nav a.nav-cta:hover {
  background: var(--mulberry-dk);
}

nav a.nav-cta[aria-current="page"] {
  box-shadow:
    0 0 0 2px var(--mist),
    0 0 0 4px var(--mulberry);
}

.nav-check {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.nav-toggle {
  display: none;
  font-family: var(--display);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 8px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  cursor: pointer;
}

.btn {
  display: inline-block;
  padding: 14px 30px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.98rem;
  cursor: pointer;
  border: 1.5px solid transparent;
  transition:
    background 0.2s,
    color 0.2s,
    transform 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--mulberry);
  color: #fff;
}

.btn-primary:hover {
  background: var(--mulberry-dk);
}

.btn-outline {
  border-color: var(--ink);
  color: var(--ink);
  background: transparent;
  margin-top: 12px;
}

.btn-outline:hover {
  background: var(--ink);
  color: var(--mist);
}

.btn-ghost {
  border-color: rgba(255, 255, 255, 0.7);
  color: #fff;
}

.btn-ghost:hover {
  background: #fff;
  color: var(--deep);
}

.btn-light {
  background: var(--sand);
  color: var(--deep);
}

.btn-light:hover {
  background: #fff;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.hero {
  min-height: calc(100svh - 72px);
  display: flex;
  align-items: flex-end;
  padding: 96px 0 0;
  color: #fff;
  background:
    linear-gradient(
      180deg,
      rgba(15, 28, 20, 0.35) 0%,
      rgba(15, 28, 20, 0.1) 30%,
      rgba(15, 28, 20, 0.88) 100%
    ),
    var(--hero) center/cover no-repeat;
}

.hero .container {
  width: 100%;
}

.hero h1 {
  font-size: clamp(3.4rem, 10.5vw, 9rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 0.92;
  max-width: 9ch;
}

.hero p {
  max-width: 46ch;
  margin: 26px 0 30px;
  font-size: 1.25rem;
  color: #e6eddf;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.hero .container > * {
  animation: fadeIn 0.9s ease both;
}

.hero .container > p {
  animation-delay: 0.12s;
}

.hero-actions {
  animation-delay: 0.24s !important;
}

.facts {
  animation-delay: 0.4s !important;
}

.facts {
  display: flex;
  flex-wrap: wrap;
  margin-top: clamp(40px, 6vw, 72px);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.fact {
  flex: 1 1 140px;
  padding: 22px 20px 26px 0;
}

.fact strong {
  display: block;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.fact span {
  font-family: var(--display);
  font-size: 0.9rem;
  color: #c9d6c2;
}

.features {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.feature {
  flex: 1 1 280px;
  min-height: 480px;
  position: relative;
  overflow: hidden;
  border-radius: var(--r);
  color: #fff;
  display: flex;
  align-items: flex-end;
}

.feature img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s;
}

.feature:hover img {
  transform: scale(1.04);
}

.feature::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 35%, rgba(15, 28, 20, 0.9));
}

.feature .copy {
  position: relative;
  z-index: 1;
  padding: 28px;
}

.feature p {
  margin-top: 10px;
  font-size: 1rem;
  color: #e1eadb;
}

.split {
  display: flex;
  gap: clamp(32px, 6vw, 80px);
  align-items: center;
  flex-wrap: wrap;
}

.split > * {
  flex: 1 1 340px;
}

.split p {
  color: var(--muted);
}

.split p.lead {
  color: var(--ink);
}

.split img {
  border-radius: var(--r);
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
}

.cta {
  background: var(--deep);
  color: #fff;
  padding: clamp(56px, 8vw, 96px) 0;
}

.cta-in {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.page-head {
  padding: clamp(48px, 7vw, 96px) 0 clamp(8px, 2vw, 24px);
}

.page-head h1 {
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.045em;
}

.page-head p {
  color: var(--muted);
  max-width: 52ch;
  margin-top: 18px;
  font-size: 1.25rem;
}

.media-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 24px;
  align-items: start;
}

video,
audio {
  width: 100%;
}

video {
  border-radius: var(--r);
  background: #000;
}

figcaption {
  font-size: 0.85rem;
  color: var(--muted);
  margin-top: 10px;
}

.panel {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 24px;
}

.panel h3 {
  margin-bottom: 14px;
}

.panel h4 {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 18px 0 6px;
  color: var(--moss);
}

.panel li {
  font-size: 1rem;
  margin-bottom: 4px;
}

.media-grid .panel {
  margin-top: 24px;
}

.media-grid aside.panel {
  margin-top: 0;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 420px;
}

th,
td {
  padding: 18px 16px 18px 0;
  text-align: left;
  border-bottom: 1px solid var(--line);
}

th {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--moss);
  border-bottom: 2px solid var(--ink);
}

td {
  font-size: 1.1rem;
}

td:last-child,
th:last-child {
  text-align: right;
  padding-right: 0;
}

tbody tr:hover {
  background: color-mix(in srgb, var(--card) 70%, transparent);
}

.form-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: clamp(24px, 4vw, 44px);
  max-width: 900px;
  margin: 0 auto;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 7px;
  border: 0;
  min-width: 0;
}

.field.full {
  grid-column: 1/-1;
}

label,
legend,
.legend-like {
  font-family: var(--display);
  font-size: 0.9rem;
  font-weight: 600;
}

.req {
  color: var(--mulberry);
}

input,
select,
textarea {
  font: inherit;
  font-size: 1rem;
  padding: 12px 14px;
  width: 100%;
  border: 1px solid #b5c0ae;
  border-radius: var(--r);
  background: var(--field);
  color: var(--ink);
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--canopy);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--moss) 35%, transparent);
}

input[type="color"] {
  padding: 4px;
  height: 46px;
}

input[type="file"] {
  padding: 9px;
}

input[type="range"] {
  padding: 0;
  accent-color: var(--mulberry);
}

input[type="radio"],
input[type="checkbox"] {
  width: auto;
  accent-color: var(--mulberry);
}

.inline-options {
  display: flex;
  gap: 18px;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 6px;
}

.inline-options label {
  font-family: var(--text);
  font-weight: 400;
  font-size: 1rem;
  display: flex;
  gap: 8px;
  align-items: center;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.form-msg {
  margin-top: 16px;
  font-family: var(--display);
  font-weight: 600;
  font-size: 0.95rem;
  display: none;
}

.form-msg.ok {
  display: block;
  color: var(--moss);
}

.form-msg.err {
  display: block;
  color: #b3261e;
}

address {
  font-style: normal;
  font-size: 1rem;
  color: var(--muted);
  margin-top: 20px;
  line-height: 1.9;
}

address strong {
  color: var(--ink);
  font-family: var(--display);
}

footer {
  background: var(--deep);
  color: #b9c6b3;
}

.foot {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px 48px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.foot-about {
  max-width: 320px;
}

footer h4 {
  color: #fff;
  font-size: 1rem;
  margin-bottom: 14px;
}

footer ul {
  list-style: none;
  margin: 0;
}

footer li {
  margin-bottom: 8px;
  font-size: 1rem;
}

footer a:hover {
  color: var(--sand);
}

.copyright {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 22px 24px;
  text-align: center;
  font-size: 0.9rem;
  color: #8a9886;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }

  nav ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--mist);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 8px 24px 20px;
    border-bottom: 1px solid var(--line);
  }

  .nav-check:checked ~ nav ul {
    display: flex;
  }

  nav a {
    display: block;
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
  }

  nav a.nav-cta {
    margin-top: 14px;
    text-align: center;
  }

  .form-grid,
  .media-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 64px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}

.day {
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  border-top: 2px solid var(--ink);
  padding-top: 28px;
}

.day strong {
  display: block;
  font-family: var(--display);
  font-size: 1.6rem;
  letter-spacing: -0.03em;
  color: var(--mulberry);
  margin-bottom: 8px;
}

.day span {
  color: var(--muted);
  font-size: 1.05rem;
}

.faq-wrap {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: start;
}

.faq details {
  border-bottom: 1px solid var(--line);
}

.faq summary {
  font-family: var(--display);
  font-weight: 600;
  font-size: 1.2rem;
  padding: 22px 40px 22px 0;
  cursor: pointer;
  list-style: none;
  position: relative;
}

.faq summary::-webkit-details-marker {
  display: none;
}

.faq summary::after {
  content: "+";
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.6rem;
  color: var(--mulberry);
  transition: transform 0.25s;
}

.faq details[open] summary::after {
  transform: translateY(-50%) rotate(45deg);
}

.faq p {
  color: var(--muted);
  padding: 0 0 24px;
  max-width: 56ch;
}

.estimate {
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
  font-family: var(--display);
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.estimate strong {
  font-size: 2rem;
  letter-spacing: -0.03em;
  color: var(--mulberry);
}

.estimate + .form-actions {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .faq-wrap {
    grid-template-columns: 1fr;
  }
}
