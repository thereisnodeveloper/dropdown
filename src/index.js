/* eslint-disable spaced-comment */
import "./style.css";

//adds style for "hidden" class in CSS
function addHiddenStyle() {
  const style = `.dropdown-item .hidden{
  display: none;
}`;
  const styleNode = document.createElement("style");
  styleNode.textContent = style;
  document.head.appendChild(styleNode);
}

/**
 * @param {Node} dropDownGroup
 * takes in  a dropdown group, makes each child a dropdown-item
 */
function applyDropdownStyling(dropDownGroup) {
  dropDownGroup.childNodes.forEach((node) => {
    //process button
    //add "dropdown-item" class to each element
    node.classList.add("dropdown-item");
  });
}
// add style node

function makeDropDownButton() {
  //create dropdown button
  const dropDownButton = document.createElement("button");
  dropDownButton.textContent = "Dropdown";
  dropDownButton.classList.add("dropdown-button");
  return dropDownButton
}

const dropDownButtonTest = makeDropDownButton();

//create event listener
function toggleHidden(node) {
  node.classList.toggle("hidden");
  return node;
}

//attach event listener to button
function attachEventListener(button) {
  button.addEventListener("click", toggleHidden);
  return button;
}

attachEventListener(dropDownButtonTest);

document.body.appendChild(dropDownButtonTest);

/**
 *
 * @param {*} selector
 * @returns {HTMLElement}
 */
function identifyAllDropdowns(selector) {
  //get the elements with the selector
  const nodeList = document.body.querySelectorAll(selector);
  nodeList.forEach((dropDownGroup) => {
    applyDropdownStyling(dropDownGroup);
  });
}

addHiddenStyle(); //add css style that hides elements
identifyAllDropdowns(".dropdown-group");

// export { makeDropdown };
