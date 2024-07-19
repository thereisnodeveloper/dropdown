/* eslint-disable spaced-comment */
import "./style.css";

//function that creates a new dropdown menu
//takes in a selector string

function addHiddenStyle() {
  const style = `.dropdown-item .hidden{
  display: none;
}`;
  const styleNode = document.createElement("style");
  styleNode.textContent = style;
  document.head.appendChild(styleNode);
}

/**
 *
 * @param {Node} dropDownGroup
 */
function makeDropdown(dropDownGroup) {
  dropDownGroup.childNodes.forEach((node) => {
    //process button

    //add "dropdown-item" class to each element
    node.classList.add("dropdown-item");
  });

  // add style node

  //create dropdown button
  const dropDownButton = document.createElement("button");
  dropDownButton.textContent = "Dropdown";
  dropDownButton.classList.add("dropdown-button");

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
  attachEventListener(dropDownButton);

  return dropDownButton;
}

/**
 *
 * @param {*} selector
 * @returns {HTMLElement}
 */
function identifyAllDropdowns(selector) {
  //get the elements with the selector
  const nodeList = document.body.querySelectorAll(selector);
  nodeList.forEach((dropDownGroup) => {
    makeDropdown(dropDownGroup);
  });
}

addHiddenStyle(); //add css style that hides elements
identifyAllDropdowns(".dropdown-group");

// export { makeDropdown };
