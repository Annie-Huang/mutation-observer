/*
Each MutationRecord has the following attributes {
  addedNodes: [div]           << linked to 'childList' target
  attributeName
  attributeNamespace
  nextSibling
  oldValue
  previousSibling
  removedNodes: [div.child]   << linked to 'childList' target
  target: div#parent.parent
  type: "childList"
}
* */

const mutationObserver = new MutationObserver((entries) => {
  console.log(entries);
});

const parent = document.querySelector('.parent');

mutationObserver.observe(parent, { childList: true });
// mutationObserver.observe(parent.children[0], { childList: true });

parent.children[0].remove();
parent.appendChild(document.createElement('div'));
