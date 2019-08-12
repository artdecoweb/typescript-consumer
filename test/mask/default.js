import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import typescriptConsumer from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await typescriptConsumer({
      text: input,
    })
    return res
  },
  context: Context,
})