import test from 'ava'
import ProtractorJasmine2ParallelHtmlReporter from '/lib/protractor-jasmine2-parallel-html-reporter.js'
import { hasFunction } from '/test/helpers/macros/index.js'

const reporter = new ProtractorJasmine2ParallelHtmlReporter();

test(hasFunction, reporter, 'add')
