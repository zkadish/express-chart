const https = require('https');
const express = require('express');
const router = express.Router();

const coinListUrl = 'https://www.cryptocompare.com/api/data/coinlist/';
let coinData = '';
let coins = '';

/**
 * GET list of coins...
 */
https.get(coinListUrl, res => {
  res.setEncoding('utf8');
  res.on('data', data => {
    coinData += data;
  });
  res.on('end', () => {
    coinData = JSON.parse(coinData);
    coins = Object.values(coinData.Data).reduce((a, cur, i, arr) => {
      const sortNum = i + 1;
      const coin = arr.filter((c) => {
        return Number(c.SortOrder) === sortNum;
      })[0];
      a.push(coin);
      return a;
    }, [])
    // console.log(coins);
  });
});

/**
 * api list of first 100 coins form cryptocompare
 */
router.get('/coins', function(req, res, next) {
  res.send(coins.slice(0, 100));
});

module.exports = router;
