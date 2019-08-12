/* alanode example/ */
import typescriptConsumer from '../src'

(async () => {
  const res = await typescriptConsumer({
    text: 'example',
  })
  console.log(res)
})()