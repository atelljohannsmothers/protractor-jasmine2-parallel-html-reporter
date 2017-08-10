import sinon from 'sinon'
import capabilitiesStub from './capabilities-stub.js'

const browserStub = {}

browserStub.getCapabilities = sinon.stub()
browserStub.getCapabilities.resolve(capabilitiesStub)

export default browserStub
