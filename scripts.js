function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          document.getElementById("photo").setAttribute('src', e.target.result);
      };
      console.log("input image done")

      reader.readAsDataURL(input.files[0]);
  }
}

function downloadPaper(type) {
  
  if (type === "png") {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "casefile.png";
      link.href = canvas.toDataURL("image/png");
      link.target = '_blank';
      link.click();
    });
  }
  else if (type === "jpeg") {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "casefile.jpeg";
      link.href = canvas.toDataURL("image/jpeg");
      link.target = '_blank';
      link.click();
    });
  }
}
