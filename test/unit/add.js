import test from 'ava'
import ProtractorJasmine2ParallelHtmlReporter from '/lib/protractor-jasmine2-parallel-html-reporter.js'
import { is, resolves, returns } from 'macros'

var reporter

test.beforeEach(t => {
	reporter = new ProtractorJasmine2ParallelHtmlReporter()
	console.log(`reporter in add`, reporter)
})

test(t => {
	t.true(true)
})

// test(is.aFunction, protractorJasmine2ParallelHtmlReporter.add)
// test(resolves.anUndefined, reporter.add())
// test(returns.aPromise, reporter.add())
