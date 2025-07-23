import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await fetch('https://odre.opendatasoft.com/api/explore/v2.1/catalog/datasets/nouveau_signal_ecowatt/exports/json?limit=-1&timezone=UTC&use_labels=false&compressed=false&epsg=4326');
    const data = await response.json();

    // 👇 CORS : autoriser tous les domaines à accéder à cette API
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.status(200).json(data);
  } catch (error: any) {
    console.error('Erreur API EcoWatt:', error.message);
    res.status(500).json({ error: 'Erreur lors de la récupération des données EcoWatt' });
  }
}
