import debounce from "./debounce";

directive.debounce = debounce;

function directive(el, binding) {
  if (binding.value !== binding.oldValue) {
    // change debounce only if interval has changed
    el.oninput = directive.debounce(function (evt) {
      el.dispatchEvent(new Event("change"));
    }, parseInt(binding.value) || 500);
  }
}

export default directive;
