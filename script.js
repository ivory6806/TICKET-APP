alert('Ticket Checking Application');

const agemin = 13;

const name = prompt('Nama : ');
const age = prompt('Umur : ');

if(age >= agemin){
    alert('Silahkan pilih Studio!');
    const studio = prompt('Pilih Studio A/B/C :');
        if(studio == 'A'){
            alert(`${name} berumur ${age} tahun. \nSilahkan masuk ke studio ${studio}.`);
        }
        else if(studio == 'B'){
            alert(`${name} berumur ${age} tahun. \nSilahkan masuk ke studio ${studio}.`);
        }
        else if(studio == 'C'){
            alert(`${name} berumur ${age} tahun. \nSilahkan masuk ke studio ${studio}.`);
        }
        else{
            alert('Invalid Input!')
        }

}else{
    alert('Maaf, umur dibawah 13 tahun dilarang masuk ke Studio.');
}