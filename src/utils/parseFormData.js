function parseFormData(idName, className) {
  return Array.from(document.querySelectorAll(`#${idName} .${className}`)).map(
    (item) => ({
      ...Object.fromEntries(
        Array.from(item.querySelectorAll("input")).map((input) => [
          input.name,
          input.value,
        ]),
      ),
    }),
  );
}

export default parseFormData;
