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
  type: "childList" | "attributes"
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

// ---------------- Observing attributes  ----------------
mutationObserver.observe(parent, {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ['id', 'title'],
});

parent.id = 'New Id';
