/**
 * CIMTEA iCollectivités — Fonctions partagées
 * WebRender, localStorage helpers, validation
 */

// ==================== WEBRENDER CONFIG ====================
const WR_SERVER = 'https://wr-lumis3d.lumiscaphe.com';
const WR_DATABASE_ID = 'b3fa2076-6b4f-47fd-b01f-c4f316df847c';
const WR_DEFAULT_CAMERA = '8c01be9c-8496-4bc6-90fc-5e2eecbf4411';

// ==================== LOCALSTORAGE HELPERS ====================

/** Charge la configuration depuis localStorage (ou null) */
function loadConfig() {
  try {
    return JSON.parse(localStorage.getItem('icollectivites_config'));
  } catch (e) {
    console.error('Erreur lecture config localStorage:', e);
    return null;
  }
}

/** Charge les données devis depuis localStorage (ou null) */
function loadDevis() {
  try {
    return JSON.parse(localStorage.getItem('icollectivites_devis'));
  } catch (e) {
    console.error('Erreur lecture devis localStorage:', e);
    return null;
  }
}

/** Efface toutes les données iCollectivités du localStorage */
function clearAllData() {
  localStorage.removeItem('icollectivites_config');
  localStorage.removeItem('icollectivites_devis');
  localStorage.removeItem('icollectivites_besoin');
  localStorage.removeItem('icollectivites_produit');
}

// ==================== WEBRENDER SNAPSHOT ====================

/**
 * Charge l'image frame 0 du monument via WebRender Snapshot API.
 * @param {object} config — config depuis localStorage (doit contenir wrConfigString)
 * @param {string} imgId — ID de l'élément <img>
 * @param {string} placeholderId — ID du placeholder à masquer
 * @param {string} errorSelector — sélecteur CSS pour le texte d'erreur
 */
function loadMonumentImage(config, imgId, placeholderId, errorSelector) {
  if (!config || !config.wrConfigString) return;
  const payload = {
    scene: [{ database: WR_DATABASE_ID, configuration: config.wrConfigString }],
    mode: { vrObject: { camera: WR_DEFAULT_CAMERA, frames: 1 } },
    renderParameters: { width: 1024, height: 768, antialiasing: false, superSampling: '2' },
    encoder: { jpeg: { quality: 85 } }
  };
  fetch(WR_SERVER + '/Snapshot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    if (data && data.url) {
      const img = document.getElementById(imgId);
      img.src = data.url.startsWith('http') ? data.url : WR_SERVER + data.url;
      img.onload = function() {
        img.style.display = 'block';
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) placeholder.style.display = 'none';
      };
      // Gestion cache navigateur
      if (img.complete) {
        img.style.display = 'block';
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) placeholder.style.display = 'none';
      }
    }
  })
  .catch(function(e) {
    console.error('Snapshot WebRender échoué:', e);
    const el = document.querySelector(errorSelector);
    if (el) el.textContent = 'Rendu 3D indisponible';
  });
}

// ==================== VALIDATION ====================

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Vérifie si un email est valide */
function isValidEmail(email) {
  return EMAIL_REGEX.test(email);
}
