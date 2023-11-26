import { isUpper } from './isUpper.ts'

export function cesarCryptography(sentence: string, isToDecrypt: boolean) {
    const normalValuesOrder = [...'abcdefghijklmnopqrstuvwxyz']

    const correspondance = [...'defghijklmnopqrstuvwxyzabc']

    let result = ''

    for (let i = 0; i < sentence.length; i++) {
        const letterToEvaluate = sentence[i]

        const isUpperCase = isUpper(letterToEvaluate)

        if (isToDecrypt) {
            const letterIndex = correspondance.indexOf(letterToEvaluate.toLowerCase())

            const letterCorrespondant =
                letterIndex === -1
                    ? letterToEvaluate
                    : isUpperCase
                    ? normalValuesOrder[letterIndex].toUpperCase()
                    : normalValuesOrder[letterIndex]

            result += letterCorrespondant
        } else {
            const letterIndex = normalValuesOrder.indexOf(letterToEvaluate.toLowerCase())

            const letterCorrespondant =
                letterIndex === -1
                    ? letterToEvaluate
                    : isUpperCase
                    ? correspondance[letterIndex].toUpperCase()
                    : correspondance[letterIndex]

            result += letterCorrespondant
        }
    }

    return result
}
