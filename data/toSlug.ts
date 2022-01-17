function toSlug(string: string) {
    return (string.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, "") //remove diacritics
    .toLowerCase()
    .replace(/\s+/g, '-') //spaces to dashes
    .replace(/&/g, '-and-') //ampersand to and
    .replace(/[^\w\-]+/g, '') //remove non-words
    .replace(/\-\-+/g, '-') //collapse multiple dashes
    .replace(/^-+/, '') //trim starting dash
    .replace(/-+$/, ''))
}

export default toSlug