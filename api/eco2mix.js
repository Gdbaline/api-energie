import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://odre.opendatasoft.com/api/explore/v2.1/catalog/datasets/eco2mix-national-tr/exports/json?limit=-1&timezone=UTC&use_labels=false&compressed=false&epsg=4326', {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Erreur de la requête externe: ${response.status}`);
    }

    const data = await response.json();

    // ✅ Pour éviter les erreurs CORS
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.status(200).json(data);
  } catch (error) {
    console.error('Erreur API Eco2Mix:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données Eco2Mix' });
  }
}
