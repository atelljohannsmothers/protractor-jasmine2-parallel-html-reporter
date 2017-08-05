import is from 'is'

import reportsConsolidator from './consolidators/reports-consolidator'

import capabilityService from './services/capability'
import jasmineReportersService from './services/jasmine-reporters'
import reportsDirectoryService from './services/reports-directory'
import temporaryDirectoryService from './services/temporary-directory'
import temporaryReportDirectoriesService from './services/temporary-report-directories'

import capabilityTransformer from './transformers/capability-transformer'
import temporaryReportDirectoriesTransformer from './transformers/temporary-report-directories-transformer'

const DEFAULT_REPORTS_DIRECTORY = './reports'

class ProtractorJasmine2ParallelHtmlReporter {
  constructor(reportsDirectory = DEFAULT_REPORTS_DIRECTORY) {
    this.reportsDirectory = reportsDirectory
  }
  async add() {
    let capability = await capabilityService.get()
    let reporter = await capabilityTransformer.toReporter(capability)
    return jasmineReportersService.add(reporter)
  }
  async consolidateReports() {
    let temporaryReportDirectories = await temporaryReportDirectoriesService.getAll()
    if (!is.empty(temporaryReportDirectories)) {
      let reports = await temporaryReportDirectoriesTransformer.toReports(
        temporaryReportDirectories
      )
      if (!is.empty(reports)) {
        await reportsConsolidator.consolidate(reports)
      }
    }
    return temporaryDirectoryService.remove()
  }
  set reportsDirectory(reportsDirectory) {
    if (!is.string(reportsDirectory)) {
      throw new TypeError('reports directory should be a string')
    }
    if (is.empty(reportsDirectory.trim())) {
      throw new TypeError('reports directory should be a non-empty string')
    }
    reportsDirectoryService.set(reportsDirectory)
  }
}

export default ProtractorJasmine2ParallelHtmlReporter
