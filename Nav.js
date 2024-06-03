<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dropdown Adjustment</title>
  <style>
    /* Sample styles */
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-menu {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    .dropdown:hover .dropdown-menu {
      display: block;
    }
  </style>
</head>
<body>

<div class="dropdown">
  <button>Info & Links</button>
  <div class="dropdown-menu" id="dropdownMenu">
    <a href="#">Brand HUB</a>
    <a href="#">Storyboard</a>
    <a href="#">Social Media HQ</a>
    <a href="#">Events</a>
    <a href="#">Engagement Platforms</a>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    dropdownMenu.addEventListener('mouseenter', () => {
      const rect = dropdownMenu.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      if (rect.right > screenWidth) {
        dropdownMenu.style.left = 'auto';
        dropdownMenu.style.right = '0';
      }
    });
  });
</script>

</body>
</html>
