'use strict';

var initScrollProf = function initScrollProf() {
  var btn = document.querySelector('.hero__button');
  var link = document.querySelector('.nav__link--prof');
  var section = document.querySelector('#prof');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (section !== null) section.scrollIntoView({
      behavior: "smooth"
    });
  });
  link.addEventListener('click', function (e) {
    e.preventDefault();
    if (section !== null) section.scrollIntoView({
      behavior: "smooth"
    });
  });
};

var initScrollFooter = function initScrollFooter() {
  var btn = document.querySelector('.nav__link--footer');
  var section = document.querySelector('#footer');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (section !== null) section.scrollIntoView({
      behavior: "smooth"
    });
  });
};

initScrollProf();
initScrollFooter();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJpbml0U2Nyb2xsUHJvZiIsImJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxpbmsiLCJzZWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJpbml0U2Nyb2xsRm9vdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsTUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBWjtBQUNBLE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFiO0FBQ0EsTUFBTUUsT0FBTyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBaEI7QUFFQUYsRUFBQUEsR0FBRyxDQUFDSyxnQkFBSixDQUFxQixPQUFyQixFQUE4QixVQUFDQyxDQUFELEVBQU87QUFDakNBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlILE9BQU8sS0FBSyxJQUFoQixFQUFzQkEsT0FBTyxDQUFDSSxjQUFSLENBQXVCO0FBQUVDLE1BQUFBLFFBQVEsRUFBRTtBQUFaLEtBQXZCO0FBQ3pCLEdBSEQ7QUFLQU4sRUFBQUEsSUFBSSxDQUFDRSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFDQyxDQUFELEVBQU87QUFDbENBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlILE9BQU8sS0FBSyxJQUFoQixFQUFzQkEsT0FBTyxDQUFDSSxjQUFSLENBQXVCO0FBQUVDLE1BQUFBLFFBQVEsRUFBRTtBQUFaLEtBQXZCO0FBQ3pCLEdBSEQ7QUFJSCxDQWREOztBQWdCQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0IsTUFBTVYsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQVo7QUFDQSxNQUFNRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFoQjtBQUVBRixFQUFBQSxHQUFHLENBQUNLLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFVBQUNDLENBQUQsRUFBTztBQUNqQ0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBSUgsT0FBTyxLQUFLLElBQWhCLEVBQXNCQSxPQUFPLENBQUNJLGNBQVIsQ0FBdUI7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FBdkI7QUFDekIsR0FIRDtBQUlILENBUkQ7O0FBVUFWLGNBQWM7QUFDZFcsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpbml0U2Nyb2xsUHJvZiA9ICgpID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fYnV0dG9uJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xpbmstLXByb2YnKTtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2YnKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHNlY3Rpb24gIT09IG51bGwpIHNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KVxuICAgIH0pO1xuXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHNlY3Rpb24gIT09IG51bGwpIHNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KVxuICAgIH0pO1xufVxuXG5jb25zdCBpbml0U2Nyb2xsRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xpbmstLWZvb3RlcicpO1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyJyk7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChzZWN0aW9uICE9PSBudWxsKSBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSlcbiAgICB9KTtcbn1cblxuaW5pdFNjcm9sbFByb2YoKTtcbmluaXRTY3JvbGxGb290ZXIoKTtcbiJdLCJmaWxlIjoiYXBwLmpzIn0=
