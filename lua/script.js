function runCode() {
  const code = document.getElementById('code').value;
  const output = document.getElementById('output');
  
  const vm = new luavm.Lua.State();
  try {
    vm.execute(code);
    output.textContent = vm.stdout;
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}
