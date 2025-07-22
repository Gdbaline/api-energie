export default async function handler(req, res) {
  const response = await fetch("https://odre.opendatasoft.com/api/explore/v2.1/catalog/datasets/signal-ecogaz/records?limit=20");
  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
