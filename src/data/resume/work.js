/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'JP Morgan Chase & Co.',
    position: 'Incoming Quantitative Analytics Summer Associate',
    url: 'https://smileidentity.com',
    startDate: '2024-06-03',
    highlights: [
      'Looking forward to it!',
    ],
  },
  {
    name: 'Icarus Fund, LLC.',
    position: 'Quantitative Analyst Intern',
    url: 'http://skepticalinvestments.biz',
    startDate: '2023-05-01',
    highlights: [
      'Collected historical pricing and fundamental data of S&P 500 components, and other key macro-economic data using Bloomberg and Yahoo Finance Python API. Performed data cleaning to ensure data quality for robust model fitting.',
      'Constructed 70+ valuation and momentum features, and evaluated each factors performance by conducting thorough back-testing. Used LASSO regression to further reduce dimension and minimize the multicollinearity.',
      'Developed a long-only trading strategy based on the selected factors, including trading volume, book-value-per-share, ROE/PB ratio, turnover rate, and standard deviation of historical turnover rate. Further improved the strategy by considering proper exit points, adding over-brought/over-sold signals, and repositioning based on the double moving average line.',
      'The improved strategy achieved an annualized excess return of 7%, with 62% win rate and significantly higher Sharpe Ratio.',
    ],
  },
];

export default work;
