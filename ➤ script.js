javascript
function goToScreen(num) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach(s => s.classList.add("hidden"));
  document.getElementById("screen" + num).classList.remove("hidden");
  document.getElementById("screen" + num).classList.add("active");
}

// Start from screen 1
goToScreen(1);
```

➤ Also Add Images
Put 2 images in the same folder:
- cake.png — cake image
- knife.png — knife image  
(You can download royalty-free icons from sites like flaticon.com or use placeholder images)
