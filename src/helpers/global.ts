export function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const shuffleArray = function (arr: any[]) {
    return arr.sort(() => Math.random() - 0.5)
}

export const isValidHttpUrl = function (str: string) {
    try {
        const url = new URL(str)

        return url.protocol === "http:" || url.protocol === "https:"
    } catch (_) {
        return false
    }
}
