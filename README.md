# Segment Analytics Example on Vercel Edge

using [@segment/analytics-node](https://github.com/segmentio/analytics-next/tree/master/packages/node)

## Development
1. Replace write key in pages/api/hello.ts
2. Run dev server
```
yarn link ~/projects/analytics-next/packages/node --private 
yarn dev
go to http://localhost:3000/api/hello
```

## Deployment
```
yarn deploy
```
