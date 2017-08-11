import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '/lib/protractor-jasmine2-parallel-html-reporter.js'

const throwsError = constructor => messsage => (t, input) => {
  const error = t.throws(() => { input() }, constructor)
  t.is(error.message, messsage)
}
throwsError.title = (description, input) => `${description} should throw error`.trim();

const throwsTypeError = throwsError(TypeError)
throwsTypeError.title = (description, input) => `${description} should throw TypeError`.trim();

//generic
export const hasFunction = (t, input, functionName) => { isFunction(t, input[functionName]) }
hasFunction.title = (description, input, functionName) => `${description} should have function ${functionName}`.trim();

export function isFunction(t, input) {
  t.true(is.fn(input))
}
isFunction.title = (description, input) => `${description} ${input.name} is a function`.trim();

export function isInstanceOf(t, input, constructor) {
  t.true(is.instance(input, constructor))
}
isInstanceOf.title = (description, input, constructor) => `${description} is an instance of ${constructor.name}`.trim();

//lib specific
export function isInstanceOfProtractorJasmine2ParallelHtmlReporter(t, input) {
  isInstanceOf(t, input, ProtractorJasmine2ParallelHtmlReporter)
}
isInstanceOfProtractorJasmine2ParallelHtmlReporter.title = isInstanceOf.title

export const throwsReportsDirectoryShouldBeANonEmptyString = throwsTypeError('foo')
throwsReportsDirectoryShouldBeANonEmptyString.title = (description, input) => `${description} should thow TypeError "foo"`.trim();

export const throwsReportsDirectoryShouldBeAString = throwsTypeError('bar')
throwsReportsDirectoryShouldBeANonEmptyString.title = (description, input) => `${description} should thow TypeError "bar"`.trim();
