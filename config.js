/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    posthtml: {
      expressions: {
        delimiters: ['[[', ']]']
      }
    },
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
    },
  },
  company: {
    name: 'LINK Student Council',
    address: `
    <br>BCIS
    `,
    product: 'LINK',
    sender: '[Parinthapat Pengpun]',
  },
  googleFonts: 'family=Nunito+Sans:wght@400;700',
  year: () => new Date().getFullYear(),
}
