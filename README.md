[![Netlify Deploy Status](https://api.netlify.com/api/v1/badges/c4133739-91cb-4d8d-a864-ecfe26b6eb83/deploy-status)](https://app.netlify.com/sites/cesar-cryptographie/deploys)

Tester le programme : [https://cesar-cryptographie.netlify.app/](https://cesar-cryptographie.netlify.app/)

### Algorithme de Cryptographie de César en TypeScript

Ce code TypeScript implémente l'algorithme de chiffrement de César pour crypter et décrypter du texte.

### Utilisation

Pour utiliser la fonction `cesarCryptography`, importez-la dans votre fichier TypeScript :

```typescript
import { cesarCryptography } from './cesarCryptography.ts';
```

Ensuite, vous pouvez l'utiliser pour encrypter ou décrypter une phrase :

```typescript
const phraseAEncrypter = 'Bonjour, le Monde !';
const phraseCryptee = cesarCryptography(phraseAEncrypter, false);
console.log('Cryptée :', phraseCryptee);

const phraseDecryptee = cesarCryptography(phraseCryptee, true);
console.log('Décryptée :', phraseDecryptee);
```

### Explication de la Fonction

La fonction `cesarCryptography` prend deux paramètres :

- `sentence` : La phrase d'entrée à encrypter ou décrypter.
- `isToDecrypt` : Un indicateur booléen indiquant si l'opération est un décryptage (`true`) ou un cryptage (`false`).

#### Importation de la Fonction d'Aide Externe

La fonction `isUpper` est utilisée pour vérifier si une lettre donnée est en majuscule. Elle est importée depuis le fichier `isUpper.ts`.

```typescript
import { isUpper } from './isUpper.ts';
```

#### Tableaux de Clé et de Correspondance

L'ordre normal des lettres de l'alphabet et leurs valeurs correspondantes après cryptage ou décryptage sont définis comme des tableaux :

```typescript
const normalValuesOrder = [...'abcdefghijklmnopqrstuvwxyz'];
const correspondance = [...'defghijklmnopqrstuvwxyzabc'];
```

Ces tableaux représentent la correspondance de chaque lettre avec sa contrepartie déplacée.

#### Algorithme Principal

La boucle principale de la fonction itère à travers chaque lettre de la phrase d'entrée. Pour chaque lettre, elle détermine si elle est en majuscule, puis effectue le cryptage ou le décryptage en fonction du drapeau donné.

```typescript
for (let i = 0; i < sentence.length; i++) {
    const lettreAEvaluer = sentence[i];
    const isUpperCase = isUpper(lettreAEvaluer);

    // Logique de cryptage ou de décryptage...
}
```

La logique de cryptage et de décryptage sont similaires, mais utilisent différents tableaux (`normalValuesOrder` pour le cryptage et `correspondance` pour le décryptage). La lettre résultante est ajoutée à la chaîne `result`.

### Exemple

Voici un exemple de cryptage et de décryptage d'une phrase :

```typescript
const phraseAEncrypter = 'Bonjour, le Monde !';
const phraseCryptee = cesarCryptography(phraseAEncrypter, false);
console.log('Cryptée :', phraseCryptee);

const phraseDecryptee = cesarCryptography(phraseCryptee, true);
console.log('Décryptée :', phraseDecryptee);
```

Sortie :

```
Cryptée : Eqmtpst, qe Qtrqi !
Décryptée : Bonjour, le Monde !
```

### Logique de Cryptage et de Décryptage

La partie centrale de la fonction `cesarCryptography` est dédiée à la logique de cryptage et de décryptage. Cette logique est encapsulée dans une boucle qui itère à travers chaque lettre de la phrase d'entrée.

```typescript
for (let i = 0; i < sentence.length; i++) {
    const lettreAEvaluer = sentence[i];
    const isUpperCase = isUpper(lettreAEvaluer);

    // Logique de cryptage ou de décryptage...
}
```

#### Décryptage

Pour le cryptage (`isToDecrypt` est `false`), la fonction effectue les étapes suivantes :

1. **Vérification de la Casse :** On détermine si la lettre est en majuscule ou en minuscule à l'aide de la fonction `isUpper`.

    ```typescript
    const isUpperCase = isUpper(lettreAEvaluer);
    ```

2. **Recherche de l'Index dans le Tableau d'Origine :** On trouve l'index de la lettre dans le tableau d'origine (`normalValuesOrder`).

    ```typescript
    const letterIndex = normalValuesOrder.indexOf(lettreAEvaluer.toLowerCase());
    ```

3. **Sélection de la Lettre Correspondante :** On utilise l'index trouvé pour sélectionner la lettre correspondante dans le tableau de correspondance (`correspondance`).

    ```typescript
    const letterCorrespondant =
        letterIndex === -1
            ? lettreAEvaluer
            : isUpperCase
                ? correspondance[letterIndex].toUpperCase()
                : correspondance[letterIndex];
    ```

4. **Ajout au résultat :** La lettre correspondante est ajoutée à la chaîne de résultat.

    ```typescript
    result += letterCorrespondant;
    ```

#### Décryptage

Pour le décryptage (`isToDecrypt` est `true`), le processus est similaire, mais les tableaux sont inversés.

1. **Vérification de la Casse :** Comme précédemment, on détermine si la lettre est en majuscule ou en minuscule.

    ```typescript
    const isUpperCase = isUpper(lettreAEvaluer);
    ```

2. **Recherche de l'Index dans le Tableau de Correspondance :** On trouve l'index de la lettre dans le tableau de correspondance (`correspondance`).

    ```typescript
    const letterIndex = correspondance.indexOf(lettreAEvaluer.toLowerCase());
    ```

3. **Sélection de la Lettre Correspondante :** On utilise l'index trouvé pour sélectionner la lettre correspondante dans le tableau d'origine (`normalValuesOrder`).

    ```typescript
    const letterCorrespondant =
        letterIndex === -1
            ? lettreAEvaluer
            : isUpperCase
                ? normalValuesOrder[letterIndex].toUpperCase()
                : normalValuesOrder[letterIndex];
    ```

4. **Ajout au Résultat :** La lettre correspondante est ajoutée à la chaîne de résultat.

    ```typescript
    result += letterCorrespondant;
    ```

En résumé, cette logique utilise les tableaux `normalValuesOrder` et `correspondance` pour faire correspondre chaque lettre de la phrase d'entrée à sa lettre encryptée ou décryptée, en fonction de la casse. La lettre résultante est ensuite ajoutée à la chaîne de résultat.