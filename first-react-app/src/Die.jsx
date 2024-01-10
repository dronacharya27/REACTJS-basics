export default function Die({numSides = 6}) {
   const randnum = Math.floor(Math.random() * numSides + 1)
   return <>
    <h1>{numSides}-sided roll: {randnum}</h1></>
}