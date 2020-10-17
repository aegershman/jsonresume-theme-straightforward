const fs = require('fs')
const path = require('path')

const { render } = require('..')
const resume = require('resume-schema/sample.resume.json')

const dest = path.resolve(__dirname, '../public');
const html = render(resume)

fs.mkdirSync(dest, { recursive: true })
fs.writeFileSync(path.resolve(dest, 'index.html'), html)
