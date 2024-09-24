// controllers/websiteController.js
const Website = require('../models/Website');
const JSZip = require('jszip');
const { saveAs } = require('file-saver');

exports.downloadWebsite = async (req, res) => {
  const { id } = req.params;
  const website = await Website.findById(id);

  if (!website) {
    return res.status(404).json({ message: 'Website not found' });
  }

  const zip = new JSZip();
  zip.file('index.html', website.content);
  const content = await zip.generateAsync({ type: 'nodebuffer' });

  res.set('Content-Disposition', `attachment; filename=website-${id}.zip`);
  res.send(content);
};
