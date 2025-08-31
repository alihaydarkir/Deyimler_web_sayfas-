# 📚 Deyim Bilgileri Projesi

Türkçe deyimlerin listelendiği, aranabildiği ve yönetilebildiği bir **Node.js web uygulaması**.  
Kullanıcı dostu arayüzü ve basit yapısı ile deyimlere hızlıca ulaşabilirsiniz.  

---

## 📂 Proje Yapısı

deymBilgileri/
├── data/
│ └── deymler.json # Deyim verilerinin saklandığı JSON dosyası
├── node_modules/ # Bağımlılıklar
├── public/
│ └── styles.css # Stil dosyası
├── views/
│ ├── index.ejs # Ana sayfa template
│ └── iletisim.ejs # İletişim sayfası template
├── deymlerProjesiApp.js # Ana uygulama dosyası
├── package-lock.json # Bağımlılık kilidi
└── package.json # Proje konfigürasyonu

yaml
Kodu kopyala

---

## ✨ Özellikler

- 📖 Türkçe deyimleri görüntüleme  
- 🔍 Anahtar kelime ile deyim arama  
- 📧 İletişim formu  
- 📱 Responsive tasarım  
- 🎨 Temiz ve kullanıcı dostu arayüz  

---

## ⚙️ Kurulum

Projeyi bilgisayarınıza indirin veya klonlayın:

```bash
git clone <repository-url>
cd deymBilgileri
Gerekli bağımlılıkları yükleyin:

bash
Kodu kopyala
npm install
Uygulamayı başlatın:

bash
Kodu kopyala
node deymlerProjesiApp.js
👉 Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı kullanmaya başlayın.

🛠️ Kullanılan Teknolojiler
Backend: Node.js, Express.js

Template Engine: EJS

Frontend: HTML5, CSS3

Veri Saklama: JSON dosyası

🌐 API Endpoints
GET / → Ana sayfa, tüm deyimleri listeler

GET /?anahtarKelime=<aranacak_kelime> → Arama sonuçlarını gösterir

POST /filtrele → Arama formunu işler

GET /iletisim → İletişim sayfasını gösterir

POST /iletisim → İletişim formunu işler

🤝 Katkıda Bulunma
Bu projeyi fork edin

Özellik branch'i oluşturun

bash
Kodu kopyala
git checkout -b feature/yeniOzellik
Değişikliklerinizi commit edin

bash
Kodu kopyala
git commit -am 'Yeni özellik eklendi'
Branch'inize push edin

bash
Kodu kopyala
git push origin feature/yeniOzellik
Pull Request oluşturun 🎉

📜 Lisans
Bu proje ISC Lisansı altında lisanslanmıştır.
