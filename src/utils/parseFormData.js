// Parse data of input tags' value in 'className' forms within 'idName' div
function parseFormData(idName, className) {
  return Array.from(
    document.querySelectorAll(`#${idName} .${className}`)
  ).map((formElem) => ({
    id: crypto.randomUUID(),
    ...Object.fromEntries(new FormData(formElem).entries()),
  }));
}

export default parseFormData;