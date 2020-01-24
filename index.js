const requestPromise = require('request-promise');
const cheerio = require('cheerio');

const url = 'https://tabelog.com/tokyo/';

(async () => {
    // httpリクエストを投げる
    const response = await requestPromise({
      uri: url,
      gzip: true
    });
    let $ = cheerio.load(response);


    // データをスクレイピングする
    function data() {
        $('li.list-rst').each((i, elm) => {
        const Name = $($(elm).find('.list-rst__rst-name-target')[0]).text();
        const scrapedPrices = $($(elm).find('.c-rating__val.list-rst__budget-val')[0]).text();

        const prices = scrapedPrices.match(/^(￥(?<min>[0-9,]+))?～(￥(?<max>[0-9,]+))?$/).groups;
        const min = parseInt((prices.min || '0').replace(/,/g, ''));
        const max = parseInt((prices.max || '0').replace(/,/g, ''));

        console.log(i, "[店名: " + Name + "],", "[最低価格: " + min + "],", "[最高価格: " + max + "]");
      });
    }

    data();
  })();
