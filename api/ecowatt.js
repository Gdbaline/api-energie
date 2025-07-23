export default async function handler(req, res) {
  try {
    const response = await fetch('https://odre.opendatasoft.com/api/explore/v2.1/catalog/datasets/nouveau_signal_ecowatt/exports/json?limit=-1&timezone=UTC&use_labels=false&compressed=false&epsg=4326');

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Erreur API EcoWatt:', error.message);
    res.status(500).json({ error: 'Erreur lors de la récupération des données EcoWatt' });
  }
}
