// Simple JS to show a welcome alert on first visit
window.onload = function () {
    if (!localStorage.getItem('visited')) {
      alert("Welcome to Tappa Irfan Basha's Portfolio!");
      localStorage.setItem('visited', 'true');
    }
  };
  