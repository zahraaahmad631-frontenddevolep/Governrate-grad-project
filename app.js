
const Navbar = ({ searchTerm, setSearchTerm }) => {
const [inputValue, setInputValue] = React.useState("");
const [openChat, setOpenChat] = React.useState(false);
    return (
<>
  <nav className="main-navbar">

    <a href="#" className="brand-logo">عقارات مصر</a>

    <div className="search-container">
      <div className="position-relative">
      <input 
  type="text" 
  className="form-control search-input" 
  placeholder="ابحث..." 
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      setSearchTerm(inputValue);
    }
  }}
/>
        <i className="bi bi-search search-icon"></i>
      </div>
    </div>

    <div className="nav-actions">
      <i 
        className="bi bi-chat-dots action-icon"
        onClick={() => setOpenChat(true)}
      ></i>
    </div>

  </nav>

  {openChat && (
    <div className="chat-box">
      <p>أهلاً! إزاي أساعدك؟</p>
      <button onClick={()=>setOpenChat(false)}>إغلاق</button>
    </div>
  )}

</>
);
};


const FilterSidebar = ({ 
setSelectedCity, 
setSelectedType, 
setMaxPrice, 
setSelectedDemand,
setOpenFilter,
onApply
}) => {
    // قائمة الـ 5 محافظات بمصر
    const governorates = [
        "القاهرة", "الجيزة","السويس","دمياط","البحر الأحمر","الوادي الجديد","بورسعيد","أسوان","الدقهلية","الأقصر","الإسكندرية",
    ];

    // أنواع العقارات الشائعة
    const propertyTypes = [
        "شقة", "فيلا", "تاون هاوس", "توين هاوس", "دوبلكس", "بنتهاوس", "استوديو", "شاليه", "محل تجاري", "مكتب إداري", "أرض"
    ];

    return (
        <div className="filter-wrapper">
            <div className="filter-main-header">تصفية النتائج</div>
            
            <div className="filter-content-card">
                {/* 1. قائمة المحافظات (27 محافظة) */}
                <div className="input-group-custom mb-3">
            <select 
   className="form-select-custom"
   onChange={(e)=>setSelectedCity(e.target.value)}
>
                        <option value="">اختر المحافظة (الكل)</option>
                        {governorates.map((gov, index) => (
                            <option key={index} value={gov}>{gov}</option>
                        ))}
                    </select>
                </div>

                {/* 2. قائمة نوع العقار */}
                <div className="input-group-custom mb-3">
            <select 
className="form-select-custom"
onChange={(e)=>setSelectedType(e.target.value)}
>
                        <option value="">نوع العقار (الكل)</option>
                        {propertyTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                {/* نطاق السعر */}
                <div className="price-section">
                    <span className="section-title">نطاق السعر</span>
              <input 
               type="range" 
                className="w-100" 
                 min="100000" 
                 max="50000000"
                 onChange={(e)=>setMaxPrice(Number(e.target.value))}/>

                    <div className="d-flex justify-content-between small text-muted mt-1">
                        <span>100 ألف</span>
                        <span>50 مليون</span>
                    </div>
                </div>
            </div>

           {/* قسم معدل الطلب  */}
            <div className="demand-card mt-3">
                 <span className="section-title text-center">معدل الطلب</span>
                 {['متنوع', 'مرتفع','مرتفع جداً' ,'متوسط', 'منخفض'].map((label, index) => (
                    <div className="demand-item" key={index} style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                        <span style={{fontSize: '0.9rem'}}>{label}</span>
                        <label className="custom-switch">
                            <input
                   type="checkbox"
      onChange={(e)=> e         .target.checked         && setSelectedDemand(label)}
/>
                            <span className="custom-slider"></span>
                        </label>
                    </div>
                ))}
            </div>

            <button 
  className="apply-btn"
  onClick={() => {
    setOpenFilter(false);
    onApply();
  }}
>
تطبيق
</button>
        </div>
    );
};




const ContentHero = () => {
    const egyptGovernorates = [
          "القاهرة", "الجيزة","السويس","دمياط","بورسعيد","أسوان","الدقهلية","الأقصر","دمياط الجديدة","الإسكندرية"
    ];

    return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-12">
                <div className="hero-section">
            
        {/* المحتوى فوق الصورة */}
                    <div className="hero-content-wrapper">
                        <h1 className="hero-title fw-bold">إستكشاف المشروعات العقارية لبعض المحافظات</h1>
                        <p className="hero-subtitle">اختر المحافظة ونوع العقار لمقارنة الأسعار ومستوى الطلب</p>
               </div>   
                    
         {/* الصورة كخلفية */}
           <img 
             src="https://www.investinegypt.gov.eg/PublishingImages/Lists/ContentPageDetails/AllItems/intro.jpg" 
                        alt="City Skyline" 
                        className="hero-city-img" 
                    />

             </div>
          </div>
         </div>
          

                {/* الخط الفاصل (Border) */}
                <div className="hero-separator mb-4"></div>

                {/* الجزء الثاني: قوائم الاختيارات مرتبة أفقياً من اليمين لليسار */}
                <div className="hero-filters-row d-flex flex-row-reverse flex-wrap gap-2 justify-content-start">
                    
                    {/* 1. اختيار المحافظة */}
                    <div className="hero-select-container active-box">
                        <select className="hero-custom-select fw-bold">
                            <option value="Cairo">القاهرة</option>
                            {egyptGovernorates.map((gov, index) => (
                                gov !== "القاهرة" && <option key={index} value={gov}>{gov}</option>
                            ))}
                        </select>
                    </div>

                    {/* 2. الأعلى سعراً */}
                    <div className="hero-select-container">
                        <select className="hero-custom-select">
                            <option>الأعلى سعراً</option>
                            <option>من 20 مليون إلى 35 مليون ج</option>
                            <option>من 35 مليون إلى 50 مليون ج</option>
                        </select>
                    </div>

                    {/* 3. متوسط سعراً */}
                    <div className="hero-select-container">
                        <select className="hero-custom-select">
                            <option>متوسط سعراً</option>
                            <option>من 5 مليون إلى 10 مليون ج</option>
                            <option>من 10 مليون إلى 15 مليون ج</option>
                        </select>
                    </div>

                    {/* 4. الأقل سعراً */}
                    <div className="hero-select-container">
                        <select className="hero-custom-select">
                            <option>الأقل سعراً</option>
                            <option>من 500 ألف إلى مليون ج</option>
                            <option>من مليون إلى 3 مليون ج</option>
                        </select>
                    </div>
                    </div>
             </div>
                    
    );
};


//معلومات الكروت
const propertiesData =[
    {
        id:1,
        title:"Bosco New Capital",
        city:"القاهرة",
        location:"الحي السكني السابع-العاصمة الإدارية الجديدة",
        price:"3,800,000",
        demand:"مرتفع",
        demandClass:"status-high",
        area:"105-400",
        type:"شقة/دوبلاكس/فيلا",
        image:"https://www.propertyfinder.eg/blog/wp-content/uploads/2024/02/%D8%A7%D9%94%D8%B3%D8%B9%D8%A7%D8%B1-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%AA%D8%A7%D8%AC-%D8%B3%D9%8A%D8%AA%D9%8A-800x424.webp",
        
        
    },
    
    {
        id:2,
        title:"(Sarai)كومبوند سرايا",
        city:"القاهرة",
        location:"التجمع الخامس",
        price:"5,500,000",
        demand:"مرتفع",
        demandClass:"status-high",
        area:"100-200",
        type:"شقة/فيلا",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtoZDe6wnj5UxmWyU25igMeYZ6uusZys8Bw7H0hHFkw0-Rnxzu2aLYpHuO&s=10",
        
    },
    {
        id:3,
        title:"Cairo Town",
        city:"القاهرة",
        location:"مدينة نصر",
        price:"587,000",
        demand:"متوسط",
        demandClass:"status-medium",
        area:"92-164",
        type:"شقة فقط",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRC-ha6cjpKKB0agl9ybvUeRUSbzjz26jg8jnR8wb8Ytyxr8lCY1rHSw&s=10",
        
    },
       {
        id:4,
        title:"El patio 1 Compound",
        city:"القاهرة",
        location:"التجمع الخامس",
        price:"30,000,000",
        demand:"مرتفع",
        demandClass:"status-high",
        area:"500-900",
        type:"شقة/فيلا/تاون هاوس",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivuCTPKmYam9XeXbWABEHy7ncCSszSoqTkeL6E0yCspSdYy6IEIYi6KDr&s=10",
        
    },
       {
        id:5,
        title:"Katameya Heights",
        city:"القاهرة",
        location:"القطامية",
        price:"20,000,000",
        demand:"مرتفع جداً",
        demandClass:"status-very-high",
        area:"300-600",
        type:"فيلا",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZmtnr9hOu6sGAnRJ1YdGnqaFokm4zu4pKbIHdNdjwg&s=10",
        
    },
     {
        id:6,
        title:"The Brooks New Cairo",
        city:"القاهرة",
        location:"القطامية-بجوار المعادي",
        price:"4,000,000",
        demand:"متوسط إلى مرتفع",
        demandClass:"status-medium",
        area:"100-240",
        type:"شقة/استوديو/بنتهاوس",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdXQt1T6kV8SER2AXqLvZxFeBRyTRJdSEF8VQlMPEagCdw9iZtaBeQ8I&s=10",
        
    },
    {
        id:7,
        title:"Uptown Cairo",
        city:"القاهرة",
        location:"المقطم",
        price:"8,000,000",
        demand:"مرتفع جداً",
        demandClass:"status-very-high",
        area:"100-500",
        type:"شقة/دوبلاكس/فيلا",
        image:"https://www.egymls.com/wp-content/uploads/2025/01/Uptown-Cairo-Mokattam-Emaar-Misr-%E2%80%93-New-Cairo-Egypt0.jpg",
        
    },
       {
        id:8,
        title:"Maadi Grand City",
        city:"القاهرة",
        location:"المعادي",
        price:"3,000,000",
        demand:"مرتفع",
        demandClass:"status-high",
        area:"90-250",
        type:"شقة/فيلا/تاون هاوس",
        image:"https://memar-v2.s3.amazonaws.com/11996/1595775660_3835_desktop_19-July-2020--1330.jpg",
        
    },
     {
        id:9,
        title:"Capital Gardens",
        city:"القاهرة",
        location:"مدينة المستقبل",
        price:"4,000,000",
        demand:"متوسط",
        demandClass:"status-medium",
        area:"100-180",
        type:"شقة",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_DS4U735ARVPvjBMVl2BvfwnR2_VovbtSAuOONaBpw&s=10",
        
    },
    {
        id:10,
        title:"Madinaty",
        city:"القاهرة",
        location:"القاهرة الجديدة-شرق القاهرة",
        price:"4,000,000",
        demand:"مرتفع",
        demandClass:"status-high",
        area:"80-210",
        type:"شقة/فيلا",
        image:"https://flatandvilla.com/wp-content/uploads/2023/04/%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D9%85%D8%AF%D9%8A%D9%86%D8%AA%D9%8A-%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.webp",
        
    },
    {
        id:11,
        title:"The Village",
        city:"القاهرة",
        location:"التجمع الخامس",
        price:"4,800,000",
        demand:"مرتفع",
        demandClass:"status-high",
        area:"80-270",
        type:"شقة/استوديو/بنتهاوس",
        image:"https://aqarsky.com/wp-content/uploads/2025/08/%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF-%D9%81%D9%8A%D9%84%D8%AF%D8%AC-%D8%AC%D9%8A%D8%AA-%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9-%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B36.webp",
        
    },
     {
        id:12,
        title:"Do Joya New Capital",
        city:"القاهرة",
        location:"العاصمة الإدارية-R8",
        price:"2,200,000",
        demand:"مرتفع جداً",
        demandClass:"status-very-high",
        area:"70-220",
        type:"شقة/دوبلاكس",
        image:"https://newcapital-developments.com/wp-content/uploads/2023/11/Designs-of-De-joya-3-Compound-in-New-Capital.jpg",
        },
          {
        id:13,
        title:"Palm Hills",
        city:"السويس",
        location:"السويس",
        price:"2,300,000",
        demand:"مرتفع",
        demandClass:"status-high",
        area:"70-120",
        type:"شاليه/وحدات ساحلية",
        image:"https://newcairo-developments.com/wp-content/uploads/2024/03/%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF-%D8%A8%D8%A7%D9%84%D9%85-%D9%87%D9%8A%D9%84%D8%B2-%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9-%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3.jpg",
        },
          {
        id:14,
        title:"Eclat",
        city:"بورسعيد",
        location:"بورسعيد",
        price:"2,000,000",
        demand:"متوسط إلى مرتفع",
        demandClass:"status-medium",
        area:"80-130",
        type:"شقة سكنية",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknwfLXTBekxxzn9kIc_-WU57kFAlLNpRFNCsXk14Zq6xTj_oMaYjaTL4&s=10",
        },
         {
        id:15,
        title:"San Stefano Grand Plaza",
        city:"الإسكندرية",
        location:"الإسكندرية",
        price:"5,800,000",
        demand:"مرتفع جداً",
        demandClass:"status-very-high",
        area:"136-300",
        type:"شقة سكنية/فندقية",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStM54U9YKYpt-WA-U9KMI7etOwWIFuQzS_w5oEhaVDzdzwEM0KrK6ynLUs&s=10",
        },
          {
        id:16,
        title:"كومبوند فيينا",
        city:"الجيزة",
        location:"الجيزة",
        price:"4,000,000",
        demand:"متوسط إلى مرتفع",
        demandClass:"status-medium",
        area:"150",
        type:"فيلا/تاون هاوس",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6o_J3YVT-6bgbHiBqx_ZL9W-MHIroyh-L6IEY7gwKxccJrWsJBk4Vh_4&s=10",
        },
         {
        id:17,
        title:"كومبوند نسيم",
        city:"دمياط",
        location:"دمياط",
        price:"2,000,000",
        demand:"متوسط",
        demandClass:"status-medium",
        area:"80-250",
        type:"شقة/فيلا",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86RitLu258lTfy2wSoqedAPVC18E4MNX9Y-xBdBhq5I961zJS1M6L7uk&s=10",
        },
        {
        id:18,
        title:"Palm Hills Alexandria",
        city:"الأسكندرية",
        location:"الكيلو 28 طريق إسكندرية الصحراوي",
        price:"3,000,000",
        demand:"مرتفع",
        demandClass:"status-high",
        area:"120-300",
        type:"شقة/فيلا",
        image:"https://www.palmhills.properties/wp-content/uploads/2023/12/%D8%A8%D8%A7%D9%84%D9%85-%D9%87%D9%8A%D9%84%D8%B2-%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9-3-460x444.jpg",
        },
         {
        id:19,
        title:"مشروع Janna (الإسكان الفاخر)",
        city:"دمياط الجديدة",
        location:"دمياط الجديدة",
        price:"1,000,000",
        demand:"متوسط",
        demandClass:"status-medium",
        area:"100-150",
        type:"شقة",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDGL9kk4ifqT4yMSIrtQqinCmujg5wcK7FtZXdpOhiNVu7j1UpiMv8FA&s=10",
        },
         {
        id:20,
        title:"دار مصر",
        city:"دمياط الجديدة",
        location:"دمياط الجديدة",
        price:"900,000",
        demand:"متوسط",
        demandClass:"status-medium",
        area:"100-130",
        type:"شقة/وحدات سكنية",
        image:"https://images.alborsaanews.com/2021/01/1543395858_547_75099_636542728776796006_2_15_13_0_37_419.jpg",
        },
         {
        id:21,
        title:"Palm Hills Sokhna",
        city:"السويس",
        location:"العين السخنه",
        price:"2,000,000",
        demand:"مرتفع",
        demandClass:"status-high",
        area:"70-150",
        type:"شالية",
        image:"https://selecthouse.co/wp-content/uploads/2020/05/%D8%A8%D8%A7%D9%84%D9%85-%D9%87%D9%8A%D9%84%D8%B2-%D8%A7%D9%84%D8%B3%D8%AE%D9%86%D8%A9-Palm-Hills-Sokhna-2.jpg",
        },
          {
        id:22,
        title:"Il Monte Galala",
        city:"السويس",
        location:"الجلاله",
        price:"2,000,000",
        demand:"مرتفع جداً",
        demandClass:"status-very-high",
        area:"80-300",
        type:"شالية/فيلا",
        image:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/587192411.jpg?k=51900fc6303c47991c4150e0ea3ea8b3d795022a80be1fc67ea1c6dedefc1c15&o=",
        },
         {
        id:23,
        title:"كومباوند الإسكان المتميز",
        city:"أسوان",
        location:"حي العقاد الجديد",
        price:"900,000",
        demand:"متوسط",
        demandClass:"status-medium",
        area:"100-150",
        type:"شقة",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VXDBbp617TNs08C4FFaynvko5igp62dcATi7AtZTTeGPqYj2AVsYrkM&s=10",
        },
          {
        id:24,
        title:"مشروع الإسكان الإجتماعى ",
        city:"أسوان",
        location:"أسوان الجديدة-الحي الأول",
        price:"500,000",
        demand:"متوسط",
        demandClass:"status-medium",
        area:"75-90",
        type:"شقة",
        image:"https://media.almalnews.com/2017/6/large/4d28977c-0190-4998-899f-138b6dc29efc.jpg",
        },
          {
        id:25,
        title:"The Pearl New Mansoura",
        city:"الدقهلية",
        location:"المنصورة الجديدة",
        price:"2,000,000",
        demand:"مرتفع",
        demandClass:"status-high",
        area:"52-280",
        type:"فيلا/بنتهاوس",
        image:"https://ipgegypt.com/storage/attachments/new/63984c7b3a790_1-The-Pearl-New-Mansoura-Safwa-Urban-Development-%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF-%D8%B0%D8%A7-%D8%A8%D9%8A%D8%B1%D9%84-%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D8%B4%D9%82%D9%82-%D9%81%D9%8A%D9%84%D8%A7%D8%AA",
        },
         {
        id:26,
        title:"Jaz Residences Luxor(Iberotel Luxor)",
        city:"الأقصر",
        location:"مناطق سياحية بالأقصر",
        price:"5,000,000",
        demand:"مرتفع",
        demandClass:"status-high",
        area:"70-150",
        type:"وحدات سياحية/فنادق",
        image:"https://images.jazhotels.com/ljTNepTZK2eNkXQPv9DkJJ3VKtw=/380x342/storage.googleapis.com%2Fjaz-prod%2Fstrapi%2F16268_Iberotel_Luxor_Iberotel_Luxor_45_Edit_3dee82d49d%2F16268_Iberotel_Luxor_Iberotel_Luxor_45_Edit_3dee82d49d.jpg",
        },
];

// 2. مكوّن الكارت 
const PropertyCard = ({ item }) => {
return (

    <div className="custom-card-wrapper">

    <div className="card custom-property-card" dir="rtl">

      <div className="prop-image-box">
     <img src={item.image} alt={item.title}/>
</div>

     <div className="card-body">

     <h5 className="property-title">{item.title}</h5>

      <p className="location-text">{item.location}</p>

      <div className="prop-divider"></div>

      <div className="price-demand-row">
    <div className={`status-pill ${item.demandClass}`}>
{item.demand}
</div>

    <div className="price-box">
   <span className="price-label">يبدأ من:</span>
   <span className="price-value">{item.price} ج</span>
</div>

</div>
      <div className="prop-divider"></div>

   <div className="footer-info">

     <span>{item.type}</span>

      <span>{item.area} م²</span>

</div>

</div>

</div>

</div>

);
};




const App = () => {

const [openFilter,setOpenFilter] = React.useState(false)
const [searchTerm, setSearchTerm] = React.useState("");
const resultsRef = React.useRef(null);

const applyFilter = () => {
  setTimeout(() => {
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

const [selectedCity,setSelectedCity] = React.useState("");
const [selectedType,setSelectedType] = React.useState("");
const [maxPrice,setMaxPrice] = React.useState(50000000);
const [selectedDemand,setSelectedDemand] = React.useState("");
React.useEffect(() => {
  if (searchTerm && resultsRef.current) {
    resultsRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [searchTerm]);


const filteredProperties = propertiesData.filter((item)=>{

  if(selectedCity && item.city !== selectedCity) return false;

  if(selectedType && item.type !== selectedType) return false;

  if(Number(item.price.replace(/,/g, "")) > maxPrice) return false;

  if(selectedDemand && item.demand !== selectedDemand) return false;

  if (searchTerm) {
    const search = searchTerm.toLowerCase();

    const nameMatch = item.title?.toLowerCase().includes(search);
    const cityMatch = item.city?.toLowerCase().includes(search);
    const typeMatch = item.type?.toLowerCase().includes(search);
    const priceMatch = item.price?.toString().includes(search);

    if (!nameMatch && !cityMatch && !typeMatch && !priceMatch) {
      return false;
    }
  } 

  return true;
});
return (
<div style={{ direction: 'rtl', backgroundColor: '#f8fafc' }}>

<Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

<button 
className="filter-btn"
onClick={()=>setOpenFilter(!openFilter)}
>
فلتر النتائج
</button>

{openFilter && <div className="overlay" onClick={()=>setOpenFilter(false)}></div>}


<div className="main-layout d-flex">

<aside className={`sidebar-section ${openFilter ? "show-filter" : ""}`}>
<FilterSidebar 
  setSelectedCity={setSelectedCity}
  setSelectedType={setSelectedType}
  setMaxPrice={setMaxPrice}
  setSelectedDemand={setSelectedDemand}
  setOpenFilter={setOpenFilter}
  onApply={applyFilter}
/>
</aside>

<main className="content-section flex-grow-1">

<ContentHero />

<div className="properties-grid" ref={resultsRef}>
{filteredProperties.length === 0 ? (
<p style={{textAlign:"center", width:"100%"}}>لا توجد نتائج مطابقة</p>
) : (
filteredProperties.map(prop => (
<PropertyCard key={prop.id} item={prop} />
))
)}
</div>

</main>

</div>

</div>
);
};



const startApp = () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);
        root.render(<App />);
    } else {
        console.error;
    }
    
    

};


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}
