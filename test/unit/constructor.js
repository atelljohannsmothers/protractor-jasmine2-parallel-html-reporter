import spec from 'ava-spec'
import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'
const REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING =
	'reports directory should be a non-empty string'
const REPORTS_DIRECTORY_SHOULD_BE_A_STRING =
	'reports directory should be a string'
const shouldThrowTypeErrorReportsDirectoryShouldBeAString = `should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`
const shouldThrowTypeErrorReportsDirectoryShouldBeANonEmptyString = `should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING}"`

var suite
var scenario

var actual
var expected
var reporter
var reportsDirectory

suite = spec.describe('constructing')
suite.beforeEach(() => {
  actual = {}
  actual.error = {}
  expected = {}
  expected.error = {}
	reporter = undefined
  reportsDirectory = undefined
})

scenario = suite.describe('without reports directory')
secnario.beforeEach(() => {
  reporter = new ProtractorJasmine2ParallelHtmlReporter()
})
scenario(
	`should return an instance of ProtractorJasmine2ParallelHtmlReporter`,
	assert => {
		assert.true(
			is.instance(
				reporter,
				ProtractorJasmine2ParallelHtmlReporter
			)
		)
	}
)

suite = suite.describe('with reports directory as')

scenario = suite.describe('non-empty string')
scenario.beforeEach(() => {
  reportsDiretory = 'reports/'
  reporter = new ProtractorJasmine2ParallelHtmlReporter(reportsDiretory)
})
scenario(
	`should be an instance of ProtractorJasmine2ParallelHtmlReporter`,
	assert => {
		assert.true(
			is.instance(
				reporter,
				ProtractorJasmine2ParallelHtmlReporter
			)
		)
	}
)

scenario = suite.describe('empty string')
scenario.beforeEach(assert => {
	expected.error.type = TypeError
	expected.error.message = REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING
  reportsDirectory = ' '
})
scenario(
	`should throw ${typeof expected.error.type} "${expected.error.message}"`,
	assert => {
		actual.error = assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		assert.is(actual.error.message, expected.error.message)
  }
)

suite = suite.describe('non-string')
suite.beforeEach(() => {
	expected.error.type = TypeError
	expected.error.message = REPORTS_DIRECTORY_SHOULD_BE_A_STRING
})

scenario = suite.describe('undefined')
scenario.beforeEach(() => {
  reportsDirectory = undefined
})
scenario(
	`should throw ${expected.error.type.toString()} "${expected.error.message}"`,
	assert => {
		actual.error = setError(
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		)
		assert.is(actual.error.message, expected.error.message)
	}
)

scenario = suite.describe('null')
scenario.beforeEach(() => {
  reportsDirectory = null
})
scenario(
	`should throw ${expected.error.type.toString()} "${expected.error.message}"`,
	assert => {
		actual.error = setError(
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		)
		assert.is(actual.error.message, expected.error.message)
	}
)

scenario = suite.describe('true')
scenario.beforeEach(() => {
  reportsDirectory = true
})
scenario(
	`should throw ${expected.error.type.toString()} "${expected.error.message}"`,
	assert => {
		actual.error = setError(
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		)
		assert.is(actual.error.message, expected.error.message)
	}
)

scenario = suite.describe('false')
scenario.beforeEach(() => {
  reportsDirectory = false
})
scenario(
	`should throw ${expected.error.type.toString()} "${expected.error.message}"`,
	assert => {
		actual.error = setError(
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		)
		assert.is(actual.error.message, expected.error.message)
	}
)

scenario = suite.describe('number')
scenario.beforeEach(() => {
  reportsDirectory = 123
})
scenario(
	`should throw ${expected.error.type.toString()} "${expected.error.message}"`,
	assert => {
		actual.error = setError(
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		)
		assert.is(actual.error.message, expected.error.message)
	}
)

scenario = suite.describe('function')
scenario.beforeEach(() => {
  reportsDirectory = function() {}
})
scenario(
	`should throw ${expected.error.type.toString()} "${expected.error.message}"`,
	assert => {
		actual.error = setError(
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		)
		assert.is(actual.error.message, expected.error.message)
	}
)

scenario = suite.describe('object')
scenario.beforeEach(() => {
  reportsDirectory = {}
})
scenario(
	`should throw ${expected.error.type.toString()} "${expected.error.message}"`,
	assert => {
		actual.error = setError(
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		)
		assert.is(actual.error.message, expected.error.message)
	}
)
