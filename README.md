# Test Pierre Trollé

## Decision:
- using node-cache to simply cache data
- using styled-components to get inlined styled advantages + writing real CSS (rather than emotion)

## Next steps:
I'm out of time, so here are my conception of the next steps:

> 3) Because the fastest satellite will be the first out of sight, please sort them by orbital velocity (assuming their orbit is circular around the Earth).

Looking at [Wikipedia](https://en.wikipedia.org/wiki/Orbital_speed) I would find the correct formula that use the value returned by the n2yo API.
Sorting should be done on the backend side.
Processing will be done, right after fetching the data.
It will be based on a sort method to right according to the formula found on the Wikipedia's page.
That's why sorting will be done once, before caching, before frontend. It's a good advantage for performance. However it implies a little more calculation on the backend before sending data.

> 4) If you can also predict the visual passes of the satellites above our position for the next 2 days, it would greatly help our lost lead engineer.

I don't understand the question. Let's discuss it!

## Best security and software engineering practices
Let's discuss it: so many improvements can be done!
