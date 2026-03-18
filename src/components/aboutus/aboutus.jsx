import React from 'react'
import './aboutus.css'
import Title from '../title/title'
import TextChart from '../text-chart/textchart'
import ProfilePhoto from '../../assets/profile-photo.png'

const Aboutus = () => {
  return (
    <div id='aboutus-container' className="aboutus-container">
        <Title text="Hakkımızda" align="center" size="l" />
        
        <div className="aboutus-charts">
        <TextChart 
          header="Vizyon"
            text="Almanya’ya göç danışmanlığında lider bir firma olmak ve bu süreçte insanların en güvenilir yol arkadaşı haline gelmek. Birçok danışmanlık firmasının aksine, süreci karmaşık göstermiyor, müşterilerimizi zorunluluk psikolojisine sokmuyoruz. Vizyonumuz, sunduğumuz kaliteli ve şeffaf hizmetlerle daha fazla kişiye ulaşmak, müşterilerimizin başarı hikayelerine katkı sağlamak ve her aşamada onların yanında olmak."
        />
        <TextChart
          header="Hakkımızda"
            text="Almanya’ya gitmek ve orada yeni bir hayat kurmak çoğu kişinin gözünde büyük ve zor bir süreç gibi görünebilir. Ancak biz, bu sürecin aslında çok daha kolay olduğunu biliyor ve bunu danışanlarımıza göstermek için çalışıyoruz. Ne yazık ki, birçok danışmanlık firması bu süreci zor ve karmaşık göstererek insanları kendilerine muhtaç hissettirmek istiyor. Bizim farkımız burada ortaya çıkıyor: Şeffaf, açık ve her aşamada kaliteli hizmet sunuyoruz. Deneyimli ekibimizle, dil kurslarından vize işlemlerine kadar her konuda kişiye özel çözümler sunuyor ve amacımız, müşterilerimizin Almanya’daki yeni hayatlarına güvenle adım atmalarını sağlamak. Bu sürecin sizin için mümkün olan en kolay şekilde tamamlanması bizim için esastır."
        />
        <TextChart 
          header="Misyon"
            text="Almanya’ya göç sürecini herkes için anlaşılır, erişilebilir ve mümkün olan en kolay hale getirmeyi hedefliyoruz. Misyonumuz, insanlara doğru bilgi ve rehberlik sunarak eğitim, iş ve yaşam hedeflerine güvenle ulaşmalarını sağlamak. Her adımda şeffaf, profesyonel destek sunarak bu süreci sizin için sorunsuz ve hızlı bir şekilde yönetiyoruz."
        />
        </div>
        <div className="aboutus-founder">
          <Title text="Lütfiye BAKAC Kimdir?"  className="aboutus-founder-title" size='l' align='left'/>
          <div>
            <img src={ProfilePhoto} alt="" />
            <p >Ben <strong>Lütfiye Bakac</strong>. <strong>NiBa-ViSa, NiBa Verwaltungsdienste ve NiBa-Lernstudio’nun</strong> kurucusuyum. 2009 yılından bu yana Almanya’da eğitim, danışmanlık ve idari süreçler alanında faaliyet gösteriyor, insanların Almanya’daki hayatlarını güvenli ve sağlam temeller üzerine kurmalarına destek oluyorum.
            Almanya’da doğdum ve eğitimimi Almanya’da tamamladım. Almanca ve Sosyal Bilgiler öğretmeni, ekonomi hukuku uzmanı ve vergi konularında uzmanım. Bu çok yönlü eğitim ve tecrübe, hukuki, ekonomik ve toplumsal süreçleri birlikte değerlendirebilmemi sağlıyor. Danışmanlık çalışmalarımda sadece tek bir alana değil, bütün sürece bütüncül bir bakış açısıyla yaklaşırım.
            Aynı zamanda Kronach Halk Eğitim Merkezi’nin bir bölgesi için dış temsilcilik sorumlusu olarak eğitim alanında da aktif görev yapıyorum. Dil eğitimi ve entegrasyon konularında yürüttüğüm çalışmalarla insanların yeni bir ülkede kendilerine sağlam bir gelecek kurmalarına katkı sağlamayı hedefliyorum.
            Kurucusu olduğum NiBa-Lernstudio bünyesinde Almanca dersleri, entegrasyon kursları ve çocuklar için destekleyici eğitim programları veriyorum. Benim için eğitim, insanların toplum içinde güçlü bir şekilde yer alabilmelerinin en önemli anahtarıdır.
            Bunun yanında girişimcilik danışmanlığı da yapıyorum. Almanya’da şirket kurmak isteyen girişimcilere, işlerini doğru ve sağlam bir şekilde kurabilmeleri için gerekli idari ve organizasyonel süreçlerde rehberlik ediyorum.
            NiBa-ViSa ve NiBa Verwaltungsdienste aracılığıyla ise insanlara vize işlemleri, oturum izinleri ve Almanya’daki resmi süreçler konusunda profesyonel destek sunuyorum. Dosyaları değerlendirirken hem danışanın hem de resmi makamların bakış açısını dikkate alırım. Bu yaklaşım, gerçekçi ve sürdürülebilir çözümler üretmemi sağlar.
            Ben hiçbir zaman gerçekleşmesi mümkün olmayan vaatlerde bulunmam. Her dosyayı dikkatle analiz eder, hukuki imkanları değerlendirir ve danışanlarıma açık, dürüst ve gerçekçi bir yol haritası sunarım.
            Amacım; insanlara doğru yönü göstermek, fırsatları görünür kılmak ve onların Almanya’da güvenli bir gelecek kurmalarına katkı sağlamaktır
            </p>
                    
          </div>
          </div>
    </div>
  )
}

export default Aboutus