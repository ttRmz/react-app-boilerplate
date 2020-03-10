const SEPARATOR = ' - '

export function setPageTitle(title) {
  const page = title ? `${title}${SEPARATOR}` : ''
  document.title = `${page}${process.env.REACT_APP_NAME}`
}
