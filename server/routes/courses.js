const express = require('express');
const router = express.Router();

const fs = require('fs');
const csv = require('csv-parser');

let rowData = [];

fs.createReadStream('./csv-loc/Occuring_courses.csv')
  .pipe(csv())
  .on('data', (data) => {
    rowData.push(data);
  })
  .on('end', () => {
    console.log('Data Added');
  });

String.prototype.toCamelCase = function () {
  return this.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2, offset) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
};

const getRowData = () => {
  rowData.map((row) => {
    Object.keys(row).forEach((key) => {
      var replacedKey = key
        .trim()
        .toCamelCase()
        .replace(/[.,\s]/g, '');
      if (key !== replacedKey) {
        row[replacedKey] = row[key];
        delete row[key];
      }
    });
  });

  return rowData;
};

//Get All Courses
router.get(`/`, async (req, res) => {
  const coursesList = await getRowData();

  if (!coursesList) {
    res.status(500).json({ success: false });
  }

  res.send(coursesList);
});

module.exports = router;
