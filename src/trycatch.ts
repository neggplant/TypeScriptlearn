try {
    1 / 0
    throw new Error()
} catch (e) {
    console.error(e)
}
try {
    1 / 0
    throw `bad value`
} catch (e) {
    console.error(e)
}