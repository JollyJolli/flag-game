const flagCodeList = {
  ad: 'Andorra',
  ae: 'Emiratos Árabes Unidos',
  af: 'Afganistán',
  ag: 'Antigua y Barbuda',
  ai: 'Anguila',
  al: 'Albania',
  am: 'Armenia',
  ao: 'Angola',
  aq: 'Antártida',
  ar: 'Argentina',
  as: 'Samoa Americana',
  at: 'Austria',
  au: 'Australia',
  aw: 'Aruba',
  ax: 'Åland',
  az: 'Azerbaiyan',
  ba: 'Bosnia y Herzegovina',
  bb: 'Barbados',
  bd: 'Bangladesh',
  be: 'Bélgica',
  bf: 'Burkina Faso',
  bg: 'Bulgaria',
  bh: 'Baréin',
  bi: 'Burundi',
  bj: 'Benín',
  bl: 'San Bartolome',
  bm: 'Bermudas',
  bn: 'Brunéi',
  bo: 'Bolivia',
  bq: 'Caribe Neerlandes',
  br: 'Brasil',
  bs: 'Bahamas',
  bt: 'Bután',
  bv: 'Isla Bouvet',
  bw: 'Botsuana',
  by: 'Bielorrusia',
  bz: 'Belice',
  ca: 'Canadá',
  cc: 'Islas Cocos',
  cd: 'Congo',
  cf: 'República Centroafricana',
  cg: 'Congo',
  ch: 'Suiza',
  ci: 'Costa de Marfil',
  ck: 'Islas Cook',
  cl: 'Chile',
  cm: 'Camerún',
  cn: 'China',
  co: 'Colombia',
  cr: 'Costa Rica',
  cu: 'Cuba',
  cv: 'Cabo Verde',
  cw: 'Curazao',
  cx: 'Isla de Navidad',
  cy: 'Chipre',
  cz: 'República Checa',
  de: 'Alemania',
  dj: 'Yibuti',
  dk: 'Dinamarca',
  dm: 'Dominica',
  do: 'República Dominicana',
  dz: 'Argelia',
  ec: 'Ecuador',
  ee: 'Estonia',
  eg: 'Egipto',
  eh: 'Sahara Occidental',
  er: 'Eritrea',
  es: 'España',
  et: 'Etiopía',
  eu: 'Unión Europea',
  fi: 'Finlandia',
  fj: 'Fiyi',
  fk: 'Islas Malvinas',
  fm: 'Micronesia',
  fo: 'Islas Feroe',
  fr: 'Francia',
  ga: 'Gabón',
  gb: 'Reino Unido',
  'gb-eng': 'Inglaterra',
  'gb-nir': 'Irlanda del Norte',
  'gb-sct': 'Escocia',
  'gb-wls': 'Gales',
  gd: 'Granada',
  ge: 'Georgia',
  gf: 'Guayana Francesa',
  gg: 'Guernsey',
  gh: 'Ghana',
  gi: 'Gibraltar',
  gl: 'Groenlandia',
  gm: 'Gambia',
  gn: 'Guinea', 
  gp: 'Guadalupe',
  gq: 'Guinea Ecuatorial',
  gr: 'Grecia',
  gs: 'Islas Georgias del Sur y Sandwich del Sur',
  gt: 'Guatemala',
  gu: 'Guam',
  gw: 'Guinea-Bisáu',
  gy: 'Guyana',
  hk: 'Hong Kong',
  hm: 'Islas Heard y McDonald',
  hn: 'Honduras',
  hr: 'Croacia',
  ht: 'Haití',
  hu: 'Hungría',
  id: 'Indonesia',
  ie: 'Irlanda',
  il: 'Israel',
  im: 'Isla de Man',
  in: 'India',
  io: 'Territorio Britanico del Océano Indico',
  iq: 'Irak',
  ir: 'Irán',
  is: 'Islandia',
  it: 'Italia',
  je: 'Jersey',
  jm: 'Jamaica',
  jo: 'Jordania',
  jp: 'Japón',
  ke: 'Kenia',
  kg: 'Kirguistan',
  kh: 'Camboya',
  ki: 'Kiribati',
  km: 'Comoras',
  kn: 'San Cristobal y Nieves',
  kp: 'Corea del Norte',
  kr: 'Corea del Sur',
  kw: 'Kuwait',
  ky: 'Islas Caimán',
  kz: 'Kazajistán',
  la: 'Laos',
  lb: 'Líbano',
  lc: 'Santa Lucia',
  li: 'Liechtenstein',
  lk: 'Sri Lanka',
  lr: 'Liberia',
  ls: 'Lesoto',
  lt: 'Lituania',
  lu: 'Luxemburgo',
  lv: 'Letonia',
  ly: 'Libia',
  ma: 'Marruecos',
  mc: 'Mónaco',
  md: 'Moldavia',
  me: 'Montenegro',
  mf: 'San Martin',
  mg: 'Madagascar',
  mh: 'Islas Marshall',
  mk: 'Macedonia del Norte',
  ml: 'Malí',
  mm: 'Myanmar',
  mn: 'Mongolia',
  mo: 'Macao',
  mp: 'Islas Marianas del Norte',
  mq: 'Martinica',
  mr: 'Mauritania',
  ms: 'Montserrat',
  mt: 'Malta',
  mu: 'Mauricio',
  mv: 'Maldivas',
  mw: 'Malawi',
  mx: 'Mexico',
  my: 'Malasia',
  mz: 'Mozambique',
  na: 'Namibia',
  nc: 'Nueva Caledonia',
  ne: 'Níger',
  nf: 'Isla Norfolk',
  ng: 'Nigeria',
  ni: 'Nicaragua',
  nl: 'Países Bajos',
  no: 'Noruega',
  np: 'Nepal',
  nr: 'Nauru',
  nu: 'Niue',
  nz: 'Nueva Zelanda',
  om: 'Oman',
  pa: 'Panamá',
  pe: 'Peru',
  pf: 'Polinesia Francesa',
  pg: 'Papúa Nueva Guinea',
  ph: 'Filipinas',
  pk: 'Pakistan',
  pl: 'Polonia',
  pm: 'San Pedro y Miquelon',
  pn: 'Islas Pitcairn',
  pr: 'Puerto Rico',
  ps: 'Palestina',
  pt: 'Portugal',
  pw: 'Palaos',
  py: 'Paraguay',
  qa: 'Catar',
  re: 'Reunión',
  ro: 'Rumania',
  rs: 'Serbia',
  ru: 'Rusia',
  rw: 'Ruanda',
  sa: 'Arabia Saudita',
  sb: 'Islas Salomon',
  sc: 'Seychelles',
  sd: 'Sudan',
  se: 'Suecia',
  sg: 'Singapur',
  sh: 'Santa Elena, Ascension y Tristán de Acuña',
  si: 'Eslovenia',
  sj: 'Svalbard y Jan Mayen',
  sk: 'Eslovaquia',
  sl: 'Sierra Leona',
  sm: 'San Marino',
  sn: 'Senegal',
  so: 'Somalia',
  sr: 'Surinam',
  ss: 'Sudan del Sur',
  st: 'Santo Tomé y Príncipe',
  sv: 'El Salvador',
  sx: 'San Martin',
  sy: 'Siria',
  sz: 'Suazilandia',
  tc: 'Islas Turcas y Caicos',
  td: 'Chad',
  tf: 'Tierras Australes y Antarticas Francesas',
  tg: 'Togo',
  th: 'Tailandia',
  tj: 'Tayikistán',
  tk: 'Tokelau',
  tl: 'Timor Oriental',
  tm: 'Turkmenistán',
  tn: 'Tunez',
  to: 'Tonga',
  tr: 'Turquía',
  tt: 'Trinidad y Tobago',
  tv: 'Tuvalu',
  tw: 'Taiwan',
  tz: 'Tanzania',
  ua: 'Ucrania',
  ug: 'Uganda',
  um: 'Islas Ultramarinas Menores de los Estados Unidos',
  un: 'Organización de las Naciones Unidas',
  us: 'Estados Unidos',/*
  'us-ak': 'Alaska',
  'us-al': 'Alabama',
  'us-ar': 'Arkansas',
  'us-az': 'Arizona',
  'us-ca': 'California',
  'us-co': 'Colorado',
  'us-ct': 'Connecticut',
  'us-de': 'Delaware',
  'us-fl': 'Florida',
  'us-ga': 'Georgia',
  'us-hi': 'Hawai',
  'us-ia': 'Iowa',
  'us-id': 'Idaho',
  'us-il': 'Illinois',
  'us-in': 'Indiana',
  'us-ks': 'Kansas',
  'us-ky': 'Kentucky',
  'us-la': 'Luisiana',
  'us-ma': 'Massachusetts',
  'us-md': 'Maryland',
  'us-me': 'Maine',
  'us-mi': 'Míchigan',
  'us-mn': 'Minnesota',
  'us-mo': 'Misuri',
  'us-ms': 'Misisipi',
  'us-mt': 'Montana',
  'us-nc': 'Carolina del Norte',
  'us-nd': 'Dakota del Norte',
  'us-ne': 'Nebraska',
  'us-nh': 'Nuevo Hampshire',
  'us-nj': 'Nueva Jersey',
  'us-nm': 'Nuevo México',
  'us-nv': 'Nevada',
  'us-ny': 'Nueva York',
  'us-oh': 'Ohio',
  'us-ok': 'Oklahoma',
  'us-or': 'Oregón',
  'us-pa': 'Pensilvania',
  'us-ri': 'Rhode Island',
  'us-sc': 'Carolina del Sur',
  'us-sd': 'Dakota del Sur',
  'us-tn': 'Tennessee',
  'us-tx': 'Texas',
  'us-ut': 'Utah',
  'us-va': 'Virginia',
  'us-vt': 'Vermont',
  'us-wa': 'Washington',
  'us-wi': 'Wisconsin',
  'us-wv': 'Virginia Occidental',
  'us-wy': 'Wyoming', */
  uy: 'Uruguay',
  uz: 'Uzbekistan',
  va: 'Ciudad del Vaticano',
  vc: 'San Vicente y las Granadinas',
  ve: 'Venezuela',
  vg: 'Islas Virgenes Britanicas',
  vi: 'Islas Virgenes de los Estados Unidos',
  vn: 'Vietnam',
  vu: 'Vanuatu',
  wf: 'Wallis y Futuna',
  ws: 'Samoa',
  xk: 'Kosovo',
  ye: 'Yemen',
  yt: 'Mayotte',
  za: 'Sudáfrica',
  zm: 'Zambia',
  zw: 'Zimbabue',
};
let flagCode;
let countryName;
let hint = '';

// Generar bandera aleatoria
function generateFlag() {
  const randomIndex = Math.floor(
    Math.random() * Object.keys(flagCodeList).length
  );
  flagCode = Object.keys(flagCodeList)[randomIndex];
  const flagImgUrl = 'https://flagcdn.com/' + flagCode + '.svg';
  countryName = flagCodeList[flagCode].toLowerCase();
  // Mostrar bandera en el juego
  const flagImg = document.getElementById('flag-img');
  flagImg.src = flagImgUrl;
  document.getElementById('guess-input').value = '';
  document.getElementById('result').innerHTML = '';
  hint = '';
  document.getElementById('next-btn').onclick = generateFlag;
}

// Funcion para actualizar el OG:image
function updateOGImage() {
  let currentFlag = document.getElementById("flag-img").src;
  let metaTag = document.createElement("meta");
  metaTag.setAttribute("property", "og:image");
  metaTag.setAttribute("content", currentFlag);
  document.getElementsByTagName("head")[0].appendChild(metaTag);
}

let correctFlags = 0;
    
// Función para adivinar
function guess() {
  const guess = document.getElementById('guess-input').value;
  if (guess.toLowerCase() === countryName) {
    document.getElementById('result').innerHTML =
      '¡Correcto! La bandera es de ' + countryName;
    correctFlags++;
  document.getElementById("score").innerHTML = "Score: " + correctFlags;
  generateFlag();
    updateOGImage();
  } else {
    document.getElementById('result').innerHTML =
      'Incorrecto. Intenta de nuevo';
    correctFlags = 0;
  document.getElementById("score").innerHTML = "Score: " + correctFlags;
  }
}

// Función para mostrar pista
function showHint() {
  if (hint === '') {
    hint = countryName[0];
    for (let i = 1; i < countryName.length - 1; i++) {
      if (Math.random() < 0.5) { // Probabilidad del 50% de ocultar la letra
        hint += '*';
      } else {
        hint += countryName[i];
      }
    }
    hint += countryName[countryName.length - 1];
  }
  document.getElementById('result').innerHTML = 'Pista: ' + hint;
}


let currentTheme = 'light'; // Cambiado a light por defecto

function toggleDarkLight() {
  const body = document.body;
  const darkLightBtn = document.getElementById('dark-light-btn');

  // Toggle the 'dark' class on the body element
  body.classList.toggle('dark');

  // Update currentTheme based on the body class
  currentTheme = body.classList.contains('dark') ? 'dark' : 'light';

  // Get the icon and text elements of the dark-light button
  const darkLightIcon = document.getElementById('dark-light-icon');
  const darkLightText = document.getElementById('dark-light-text');

  // Change the icon and text of the button according to the current theme
  if (currentTheme === 'dark') {
    darkLightIcon.className = 'fas fa-moon'; // Change the icon to moon
    darkLightText.textContent = 'Modo Oscuro'; // Change the text to 'Modo Oscuro'
  } else {
    darkLightIcon.className = 'fas fa-sun'; // Change the icon to sun
    darkLightText.textContent = 'Modo Claro'; // Change the text to 'Modo Claro'
  }
}

// Call toggleDarkLight() once to set the initial theme
toggleDarkLight();
