[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/oy-builds/cat-reviews-human-01/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/oy-builds/cat-reviews-human-01/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

# Cat Reviews Its Human

A make.fun entry for **Make the AI Judge Laugh: Cat Reviews Its Human**: one funny
single-line one-star review from a house cat about its human, under 200 characters.

The entry:

> One star. He buys the cheap kibble, eats my salmon himself, and acts surprised when I watch him sleep.

The grievance is the food — cheap kibble for the cat, salmon for the human — and the
sting lands in the last few words, where the cat's idea of justice is simply watching
him sleep.

## Run it

Requires Node 22+ (stdlib only, nothing to install):

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` writes the review to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default
`/output/entry.txt`), validates it is a single line of 1–200 characters, reads it
back and verifies the bytes on disk match exactly.
