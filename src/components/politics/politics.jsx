import React from 'react'
import './politics.css'
import { useState } from 'react'



const Politics = () => {

    const [isOpen, setIsOpen] = useState(false);

    let showPoliticts = () => {
    setIsOpen(!isOpen);
    }

  return (
    <div className='politics-container'>
         <h4 onClick={showPoliticts}>Danışmanlık ve Hizmet Politikamız  { isOpen ? '▼' : '▶' } </h4>
         <p style={{ display: isOpen ? 'block' : 'none' }}>NiBa-ViSa ve NiBa Verwaltungsdienste olarak çalışmalarımızda şeffaflık, güven ve doğrudan iletişim temel prensiplerimizdir.
Tüm danışmanlık süreçleri bizzat Lütfiye Bakac tarafından yürütülmektedir. Her danışan ile ilk görüşme ve dosya değerlendirmesi doğrudan kendisi tarafından yapılır.
Sözleşmeler, danışmanlık kapsamı ve hizmet detayları Lütfiye Bakac tarafından hazırlanır ve açıklanır. Danışanlarımıza verilen tüm bilgiler, yapılan değerlendirmeler ve sunulan çözümler yalnızca kendisi tarafından aktarılır.
Danışmanlık ücretleri hakkında bilgi verme yetkisi de yalnızca Lütfiye Bakac’a aittir. Ödemeler doğrudan kendisine yapılır ve resmi şekilde kayıt altına alınır.
NiBa-ViSa ve NiBa Verwaltungsdienste adına hiçbir üçüncü kişi, aracı veya temsilci danışmanlık hizmeti sunma, ücret belirleme veya ödeme alma yetkisine sahip değildir.
Danışanlarımızın güvenliği ve haklarının korunması için, şirketimiz adına yapılan tüm resmi işlemler ve danışmanlık faaliyetleri yalnızca Lütfiye Bakac tarafından yürütülmektedir.</p>
    </div>
  )
}

export default Politics