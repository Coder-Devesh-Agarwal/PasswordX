let set = 8;
let num;
document.querySelector('.clicker').addEventListener('click', function () {
  let copyText = document.getElementById('hello');
  let arr = '';
  let sel = document.getElementById('Difful');
  let opt = Number(sel.options[sel.selectedIndex].value);
  // console.log(opt);
  document.getElementById('copye').innerHTML = '.';
  copyText.value = arr;
  set = Number(document.querySelector('.num').value);
  if (set === 0) set = 8;
  switch (opt) {
    case 3:
      for (let i = 0; i < set; i++) {
        num = Math.trunc(Math.random() * 94) + 33;
        arr = arr + String.fromCharCode(num);
      }
      break;
    case 2:
      for (let i = 0; i < set; i++) {
        num = Math.trunc(Math.random() * 90) + 33;
        if (
          (32 < num && num < 58) ||
          (64 < num && num < 91) ||
          (96 < num && num < 123)
        ) {
          arr = arr + String.fromCharCode(num);
        } else i = i - 1;
      }
      break;
    case 1:
      for (let i = 0; i < set; i++) {
        num = Math.trunc(Math.random() * 75) + 48;
        if (
          (47 < num && num < 58) ||
          (64 < num && num < 91) ||
          (96 < num && num < 123)
        ) {
          arr = arr + String.fromCharCode(num);
        } else i = i - 1;
      }
      break;
  }
  copyText.value = arr;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.getElementById('copye').innerHTML = 'Copied';
});
