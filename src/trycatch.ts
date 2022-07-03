try {
    1 / 0
    throw new Error()
} catch (e) {
    console.error(e)
}