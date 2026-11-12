import {test as baseTest} from '../fixtures/pom-fixtures'
import CommonUtils from '../utils/commom-utils'


type UtilsFixturesType = {
    commonUtils : CommonUtils
}

export const test = baseTest.extend<UtilsFixturesType>({
    commonUtils: async ({}, use) => {
        await use(new CommonUtils())
    }
})