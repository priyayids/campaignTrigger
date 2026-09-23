const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

let activeCampaign = 1;

app.get('/api/campaign', (req, res) => {
  res.json({
    campaign1: activeCampaign === 1,
    campaign2: activeCampaign === 2
  });
});

app.post('/api/campaign/:id', (req, res) => {
  activeCampaign = parseInt(req.params.id);
  res.json({
    campaign1: activeCampaign === 1,
    campaign2: activeCampaign === 2
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
