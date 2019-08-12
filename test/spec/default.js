import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import typescriptConsumer from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof typescriptConsumer, 'function')
  },
  async 'calls package without error'() {
    await typescriptConsumer()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await typescriptConsumer({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T