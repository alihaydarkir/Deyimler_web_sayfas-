const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const deyimlerPath = path.join(__dirname, 'data', 'deyimler.json');

// JSON dosyasını yükleme fonksiyonu
function loadDeyimler() {
    const data = fs.readFileSync(deyimlerPath, 'utf8');
    return JSON.parse(data).map(deyim => ({
        ...deyim,
        deyim_aciklama: deyim.deyim_aciklama.replace(/<\/?[^>]+(>|$)/g, "")
    }));
}

// Anasayfa rotası
app.get('/', (req, res) => {
    const anahtarKelime = req.query.anahtarKelime ? req.query.anahtarKelime.toLowerCase() : '';
    const deyimler = loadDeyimler();
    const filtrelenmisDeyimler = anahtarKelime
        ? deyimler.filter(deyim =>
            deyim.deyim_adi.toLowerCase().includes(anahtarKelime) ||
            deyim.deyim_aciklama.toLowerCase().includes(anahtarKelime))
        : deyimler;
    const mesaj = filtrelenmisDeyimler.length === 0 ? 'Not Found' : null;
    res.render('index', { deyimler: filtrelenmisDeyimler, anahtarKelime, mesaj });
});

// İletişim sayfası rotası
app.get('/iletisim', (req, res) => {
    res.render('iletisim');
});

// Filtreleme rotası
app.post('/filtrele', (req, res) => {
    const anahtarKelime = req.body.anahtarKelime;
    res.redirect(`/?anahtarKelime=${anahtarKelime}`);
});

// İletişim formu gönderim rotası
app.post('/iletisim', (req, res) => {
    const { adSoyad, email, telefon, mesaj } = req.body;
    console.log(`Ad Soyad: ${adSoyad}, Email: ${email}, Telefon: ${telefon}, Mesaj: ${mesaj}`);
    const deyimler = loadDeyimler();
    res.render('index', { deyimler, anahtarKelime: '', mesaj: 'Mesajınız başarıyla gönderildi!' });
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
