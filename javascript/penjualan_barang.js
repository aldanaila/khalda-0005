function hasil() {
  var harga = parseInt(document.getElementById("harga").value);
  var jumlah = parseInt(document.getElementById("jumlah").value);
  if (isNaN(harga) || isNaN(jumlah)) {
    alert("Harga dan Jumlah harus berupa angka.");
    return;
  }
  var total = harga * jumlah;
  document.getElementById("total").value = total;
  var dis = 0.1;
  var bayar;
  if (total > 100000) {
    bayar = total - total * dis;
    document.getElementById("bayar").value = bayar;
    document.getElementById("dis").value = "10%";
  } else {
    document.getElementById("bayar").value = total;
    document.getElementById("dis").value = "0%";
  }
}

function resetForm() {
  document.getElementById("barang").value = "";
  document.getElementById("harga").value = "";
  document.getElementById("jumlah").value = "";
  document.getElementById("total").value = "";
  document.getElementById("dis").value = "";
  document.getElementById("bayar").value = "";
}
