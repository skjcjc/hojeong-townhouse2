// 모바일 메뉴 토글
const mBtn = document.getElementById('mBtn');
const mNav = document.getElementById('mNav');
if (mBtn && mNav){
  mBtn.addEventListener('click', () => {
    const open = mNav.style.display === 'block';
    mNav.style.display = open ? 'none' : 'block';
  });
}

// 모바일 2단 토글
document.querySelectorAll('.m-item > button[data-open]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.getAttribute('data-open');
    const box = document.getElementById(id);
    if(!box) return;
    const open = box.style.display === 'block';
    box.style.display = open ? 'none' : 'block';
  });
});
