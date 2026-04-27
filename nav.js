/* ===========================
   FLEXISERV - NAVEGACIÓN
   =========================== */

const WA_NUMBER = '541160065713';
const WA_BASE   = 'https://wa.me/' + WA_NUMBER + '?text=';

const SERVICES = [
  { id: 'minifletes',  icon: '🚛', name: 'Minifletes' },
  { id: 'albanileria', icon: '🧱', name: 'Albañilería' },
  { id: 'herreria',    icon: '⚙️', name: 'Herrería' },
  { id: 'parquet',     icon: '🪵', name: 'Parquet' },
  { id: 'plomeria',    icon: '🔧', name: 'Plomería' },
  { id: 'gasista',     icon: '🔥', name: 'Gasista Matriculado' },
  { id: 'pintor',  icon: '🎨', name: 'Pintor' },
  { id: 'servicio-tecnico',     icon: '💻', name: 'Servicio Técnico' }
];

/* ---- Build nav dropdown ---- */
function buildNav() {
  const dropdown = document.getElementById('dropdownMenu');
  const mobileLinks = document.getElementById('mobileServicesLinks');
  if (!dropdown || !mobileLinks) return;

  SERVICES.forEach(function(s) {
    var aDesktop = document.createElement('a');
    aDesktop.href = s.id + '.html';
    aDesktop.innerHTML = '<span class="drop-icon">' + s.icon + '</span>' + s.name;
    dropdown.appendChild(aDesktop);

    var aMobile = document.createElement('a');
    aMobile.href = s.id + '.html';
    aMobile.textContent = s.icon + ' ' + s.name;
    aMobile.addEventListener('click', closeMobile);
    mobileLinks.appendChild(aMobile);
  });
}

/* ---- Mobile menu ---- */
function toggleMobile() {
  var menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

function closeMobile() {
  var menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.remove('open');
}

/* ---- Image upload handler (service pages) ---- */
function handleImgUpload(event, wrapperId) {
  var file = event.target.files[0];
  if (!file) return;

  var reader = new FileReader();
  reader.onload = function(e) {
    var wrap = document.getElementById(wrapperId);
    if (!wrap) return;
    wrap.innerHTML =
      '<img src="' + e.target.result + '" alt="Foto del servicio" style="width:100%;height:100%;object-fit:cover;display:block;">' +
      '<label style="position:absolute;bottom:12px;right:12px;display:inline-flex;align-items:center;gap:6px;background:rgba(13,17,23,.85);color:var(--verde-neon);padding:.4rem .9rem;border-radius:8px;font-size:.78rem;font-weight:600;cursor:pointer;border:1px solid rgba(56,208,104,.3);font-family:Outfit,sans-serif;">' +
        '🔄 Cambiar foto' +
        '<input type="file" accept="image/*" onchange="handleImgUpload(event,\'' + wrapperId + '\')" style="display:none">' +
      '</label>';
  };
  reader.readAsDataURL(file);
}

/* ---- Init on DOM ready ---- */
document.addEventListener('DOMContentLoaded', function() {
  buildNav();
  var hamburger = document.getElementById('hamburgerBtn');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobile);
  }
  
    }
  );

