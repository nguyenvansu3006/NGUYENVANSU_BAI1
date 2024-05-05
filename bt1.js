
  var sections = ['section1', 'section2', 'section3', 'section4'];
  var currentSection = 0;

  // Ẩn tất cả sections
  sections.forEach(sectionId => document.getElementById(sectionId).style.display = 'none');

  // Hiển thị section đầu tiên
  document.getElementById('section1').style.display = 'block';

  function plusSlides(n) {
    var newSection = currentSection + n;
    if (newSection >= 0 && newSection < sections.length) {
      document.getElementById(sections[currentSection]).style.display = 'none';
      currentSection = newSection;
      document.getElementById(sections[currentSection]).style.display = 'block';
    }
  }

  // Thêm sự kiện click cho tất cả các phần tử có class 'prev'
  document.querySelectorAll('.prev').forEach(function(element) {
    element.addEventListener('click', function() {
      plusSlides(-1);
    });
  });

  // Thêm sự kiện click cho tất cả các phần tử có class 'next'
  document.querySelectorAll('.next').forEach(function(element) {
    element.addEventListener('click', function() {
      plusSlides(1);
    });
  });
