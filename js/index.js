document.body.addEventListener("wheel", event =>
{
  if (event.deltaY > 0)
    document.body.scrollBy(0, scrollY+30);
  else
  document.body.scrollBy(0, scrollY-30);;
}, false);