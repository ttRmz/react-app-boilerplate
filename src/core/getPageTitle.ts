const SEPARATOR = " - "

export function getPageTitle(title?: string, separator: string = SEPARATOR) {
  const page = title ? `${title}${separator}` : ""
  return `${page}${process.env.REACT_APP_NAME}`
}
