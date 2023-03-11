import React from 'react'

function IsSorted(Array) {
  let copyArray = [ ...Array ].sort()
  return Array.toString() === copyArray.toString()
}

export default IsSorted