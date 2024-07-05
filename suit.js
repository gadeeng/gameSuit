
var mainLagi = true;
while(mainLagi){
    //Input Player
    var pilPlayer = prompt('Pilih gajah, semut, atau orang');

    //Pilihan Komputer
    var comp = Math.random();

    if (comp < 0.34){
        comp = 'gajah';
    }
    else if (comp >= 0.34 && comp < 0.67){
        comp = "semut";
    }
    else{
        comp = 'orang'
    }

    //Rules
    var hasil;
    if (pilPlayer == comp){
        hasil = 'Eitss, Kamu Seri';
    }
    else if(pilPlayer == 'gajah'){
        hasil = (comp == 'orang')? 'Yay, Kamu Menang!' : 'Yah, Kamu Kalah :(';
    }
    else if(pilPlayer == 'orang'){
        hasil = (comp == 'gajah')? 'Yah, Kamu Kalah :(' : 'Yay, Kamu Menang!';
    }
    else if(pilPlayer == 'semut'){
        hasil = (comp == 'orang')? 'Yah, Kamu Kalah :(' : 'Yay, Kamu Menang!';
    }
    else{
        hasil = 'Masukkan pilihan yang benar!';
    }


    //Hasil
    alert('Kamu memilih '+ pilPlayer + ' dan Komputer memilih ' + comp + '\nHasilnya: ' + hasil);
    mainLagi = confirm('Mau main lagi?');

}
alert('Terima kasih sudah bermain!')