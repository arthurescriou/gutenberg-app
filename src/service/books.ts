import data from './database.json'

const getBooks = async () =>
  Object.values(data).reduce((acc: Array<any>, val) => acc.concat(val), [])

const getBooksPerLanguage = async (language: any): Promise<any> =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  data[language]

const getLanguages = async () => Object.keys(data)

export { getBooks, getBooksPerLanguage, getLanguages }
