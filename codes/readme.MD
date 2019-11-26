# Challenge Codes

The strategy taken here is quite simple and follows the follwing logic:

## Constraints

1. Each level has a unique entry code.
2. This code is discovered by solving the level before it.
3. Since the code is usually hidden in some manner an in order to be able to avoid text scraping, the codes in many level will be presented with an `<svg>` code.

## Problems

1. If including `.svg` as the source for `<img>` the browser developer tools will give a preview display when hovering about the source public url path.

## Solution

1. Generate 200 unique codes.
2. Generate an `.svg` file for each code.
3. Generate a hidden `.json` list of all the codes with the following schema:

  ```javscript
  {
    CODE:
      {
        isChallenge: boolean,
        entryPoint: string,
        levelNumber: string,
        previousLevelCode: string,
        nextLevelCode, string
        author: string
        notes: string,
        imagePath, string
      },
  }
  ```

4. When an author prepars a new challenge they should:
   1. Go to the list.
   2. Take the next available code for their level.
   3. Update the required data slots.
   4. If using `<svg>` for code display, go to the relevant file and copy past the svg actual code in their level html.

## Important

**The code and scripts here should not be invoked again as it will delete the challenges data.**
