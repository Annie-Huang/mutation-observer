/*
Each MutationRecord has the following attributes {
  addedNodes: [div]           << linked to 'childList' target
  attributeName: "id"
  attributeNamespace
  nextSibling
  oldValue: "parent"
  previousSibling
  removedNodes: [div.child]   << linked to 'childList' target
  target: div#parent.parent
  type: "childList" | "attributes" | "characterData"
}
* */

// Every time the document of our screen changes its content, our mutation observer is going to take all the changes
// that occurred and put them inside this entries array for us. So the array can be large or small depending on how many changes we made
const mutationObserver = new MutationObserver((entries) => {
  console.log(entries);
});

const parent = document.querySelector('.parent');

/*
// ---------------- Observing childList ----------------
mutationObserver.observe(parent, { childList: true });
// mutationObserver.observe(parent.children[0], { childList: true });

// If you have this, we will not print any as we stop observing it.
// mutationObserver.disconnect();

parent.children[0].remove();

// Every single time you make changes to your dom, it's going to take all the changes that happened between the last time they were rendered to teh screen and
// this current time and they are going to put them all inside of one array
// parent.appendChild(document.createElement('div'));

// If you put this into a timeout, you will notice it print out 2 arrays with 1 element each (rather than 1 array of 2 elements)
setTimeout(() => {
  parent.appendChild(document.createElement('div'));
}, 100);

*/

/*
// ---------------- Observing attributes  ----------------
mutationObserver.observe(parent, {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ['id', 'title'],
});

parent.id = 'New Id';
*/

/*
// ---------------- Observing characterData  ----------------

// Notice if you have parent.children[0], and the edit the text of the first child, it print nothing,
// because parent.children[0] === <div class="child" contenteditable>Child 1</div>.
// In order to get the 'Child 1', you will need to do parent.children[0].childNodes[0]
mutationObserver.observe(parent.children[0].childNodes[0], {
  characterData: true,
  characterDataOldValue: true,
});
*/

/*
// ---------------- Observing characterData  (via subtree) ----------------

// Can change text of child 1, child 2, and child 3 and all will print out the MutationRecord
//mutationObserver.observe(parent.children[0].childNodes[0], {
mutationObserver.observe(parent, {
  subtree: true,
  characterData: true,
  characterDataOldValue: true,
});
*/

// ---------------- Observing attribute  (via subtree) ----------------

mutationObserver.observe(parent, {
  subtree: true,
  attributes: true,
});

// You can see both attribute in parent or children can be printed out.
parent.id = 'Test';
parent.children[0].id = 'Test';
