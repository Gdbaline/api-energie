export default async function handler(req, res) {
  try {
    const response = await fetch('https://odre.opendatasoft.com/api/explore/v2.1/catalog/datasets/eco2mix-national-tr/exports/json?limit=-1&timezone=UTC&use_labels=false&compressed=false&epsg=4326');

    if (!response.ok) {
      throw new Error(`Erreur API externe: ${response.status}`);
    }

    const data = await response.json();

    // Ajout du header CORS pour éviter les blocages côté client
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    console.error('Erreur dans l\'API eco2mix:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données eco2mix' });
  }
}
