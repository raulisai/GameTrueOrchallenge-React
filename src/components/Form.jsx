import React from 'react'

export default function Form() {
    return (
        <div>
            
        <form action="#">
  <p>
    <input type="checkbox" id="test1" />
    <label for="test1">Red</label>
  </p>
  <p>
    <input type="checkbox" id="test2" checked="checked" />
    <label for="test2">Yellow</label>
  </p>
  <p>
    <input type="checkbox" id="test3" checked="checked" disabled="disabled" />
    <label for="test3">Green</label>
  </p>
    <p>
      <input type="checkbox" id="test4" disabled="disabled" />
      <label for="test4">Brown</label>
  </p>
</form>
        </div>
    )
}
