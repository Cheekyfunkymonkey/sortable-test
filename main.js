const el = document.getElementById("items");
let sortable = Sortable.create(el, {
  group: items,
  animation: 100
});
