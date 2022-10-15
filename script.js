const textBox = document.querySelector('.wrapper textarea'),
    checkBtn = document.querySelector('#check-btn'),
    vowelCountShow = document.querySelector('#vowel-count');
vowelCountShow.innerHTML = 0;

checkBtn.addEventListener('click', () => {
   let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let letter of textBox.value.toLowerCase()){
      if(vowels.includes(letter)){
           count++;
      }
   }
    vowelCountShow.innerHTML = count;
}); 

