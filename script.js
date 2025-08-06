function showNot(){
  Notification.requestPermission().then((perm) => {
    if(perm == "granted"){
      new Notification(
        "Obito Site",{
          body: "Obito Portfolio Site",
          icon: "icon.svg",
        }
      );
    }
  });
}
document.addEventListener("DOMContentLoaded",() => {
  showNot();
});
