// --- DATA: DỮ LIỆU CÔNG VIỆC ---
const jobsData = [
    {
        id: 'uob-consultant',
        title: 'Nhân Viên Tư Vấn Thẻ Tín Dụng',
        bank: 'UOB',
        logo: 'logo_uob.jpg',
        color: 'text-blue-900',
        type: 'Full-time',
        salary: '15 - 20 Triệu ++',
        location: 'Cầu Giấy, Hà Nội',
        address: 'Tầng 3, Tòa nhà Trung Yên 1, Số 1A Vũ Phạm Hàm, Cầu Giấy',
        videoId: 'video_uob.mp4',
        desc: 'Thực hiện cuộc gọi ra cho Khách hàng theo Data có sẵn (do công ty cung cấp)<br> Giới thiệu, tư vấn các sản phẩm thẻ tín dụng, thẻ ATM, khoản vay của UOB. <br>Trao đổi quyền lợi, chương trình khuyến mãi.',
        req: 'Nam/Nữ 18-35 tuổi. <br>Không nợ xấu ngân hàng. <br>Giao tiếp nhanh nhẹn, cầu thị. <br>Ưu tiên có kinh nghiệm Sale/Telesale > 1 năm (Chưa có sẽ được đào tạo).',
        benefit: 'Thu nhập KHÔNG GIỚI HẠN (Lương cứng + Hoa hồng). <br>Đào tạo 5 ngày có hỗ trợ. <br>Lộ trình thăng tiến rõ ràng lên Leader/Manager. <br>BHXH đầy đủ.',
        time: 'T2-T6 (8h00-17h00). <br>Làm 2 ngày T7/tháng. <br>Nghỉ Lễ Tết.'
    },
    {
        id: 'uob-intern',
        title: 'Thực Tập Sinh Telesales',
        bank: 'UOB',
        logo: 'logo_uob.jpg',
        color: 'text-blue-900',
        type: 'Intern',
        salary: '2M + Incentive',
        location: 'Cầu Giấy, Hà Nội',
        address: 'Số 2A Vũ Phạm Hàm, Cầu Giấy, Hà Nội',
        videoId: 'video_uob.mp4',
        desc: 'Gọi điện tư vấn theo data công ty cung cấp (Talk time 2.5-3h/ngày). <br>Giới thiệu sản phẩm theo kịch bản. <br>Báo cáo kết quả hằng ngày.',
        req: 'Sinh viên năm cuối hoặc chờ bằng. <br>Thực tập tối thiểu 3 tháng. <br>Nhanh nhẹn, giọng dễ nghe. Định hướng theo ngành Ngân hàng.',
        benefit: 'Phụ cấp 2.000.000đ/tháng + Incentive (250k - 1.250k). <br>Dấu mộc thực tập. <br>Cơ hội lên nhân viên chính thức.',
        time: 'Full-time T2-T6 (8h30-17h30). Làm 2 ngày T7/tháng.'
    },
    {
        id: 'mb-cskh',
        title: 'CSKH Ngân Hàng Quân Đội',
        bank: 'MB Bank',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_MB_new.png',
        color: 'text-blue-600',
        type: 'Full-time',
        salary: '7 - 9 Triệu',
        location: 'Đống Đa, Hà Nội',
        address: 'Tòa nhà MBBank - 21 Cát Linh, Đống Đa, Hà Nội',
        videoId: 'video_mbbank.mp4',
        desc: 'Tiếp nhận cuộc gọi giải đáp thắc mắc về dịch vụ thẻ. <br>Gọi ra hỗ trợ khách gọi nhỡ (khi có yêu cầu). <br>KHÔNG BÁN HÀNG, KHÔNG ÁP SỐ.',
        req: 'Tốt nghiệp Trung cấp trở lên (chấp nhận chờ bằng). <br>Giọng nói chuẩn, không ngọng, không giọng địa phương. <br>Nhanh nhẹn, hòa đồng.',
        benefit: 'Hỗ trợ 1.000.000đ/khóa đào tạo (10 ngày). <br>Thưởng lễ tết, BHXH, BHYT đầy đủ. <br>Môi trường trẻ trung.',
        time: 'Xoay ca luân phiên (có ca đêm, ca hành chính). <br>Nghỉ 1 ngày bất kỳ/tuần.'
    },
    {
        id: 'tpbank-full',
        title: 'CSKH TPBank (Full-time)',
        bank: 'TPBank',
        logo: 'logo_tpbank.jpg',
        color: 'text-purple-600',
        type: 'Full-time',
        salary: '7 - 9 Triệu',
        location: 'Hà Nội (3 CS)',
        address: 'Lựa chọn: 44 Lê Ngọc Hân / 155 Đội Cấn / Ngoại Giao Đoàn (Bắc Từ Liêm)',
        videoId: 'video_tpbank.mp4',
        desc: 'Tiếp nhận cuộc gọi đến, hỗ trợ giải đáp thắc mắc. <br>Tư vấn mở thẻ, tài khoản, e-banking. <br>KHÔNG BÁN HÀNG, KHÔNG ÁP DOANH SỐ.',
        req: '18-35 tuổi. <br>Tốt nghiệp Trung cấp trở lên. <br>Giọng dễ nghe, không ngọng. <br>Chấp nhận sinh viên năm cuối.',
        benefit: 'Hỗ trợ tài chính trong quá trình đào tạo. <br>Thưởng nóng, thưởng lễ tết. <br>Teambuilding, du lịch hàng năm.',
        time: 'Xoay ca trong khung 07h00 - 22h00. <br>Nghỉ 1 ngày/tuần.'
    },
    {
        id: 'tpbank-part',
        title: 'CSKH TPBank (Part-time)',
        bank: 'TPBank',
        logo: 'logo_tpbank.jpg',
        color: 'text-purple-600',
        type: 'Part-time',
        salary: '3 - 5 Triệu',
        location: 'Hà Nội (3 CS)',
        address: 'Lựa chọn: 44 Lê Ngọc Hân / 155 Đội Cấn / Ngoại Giao Đoàn (Bắc Từ Liêm)',
        videoId: 'video_tpbank.mp4',
        desc: 'Hỗ trợ khách hàng qua điện thoại. <br>Tư vấn dịch vụ thẻ, tài khoản. <br>Không yêu cầu bán hàng.',
        req: 'Sinh viên năm 3, 4. <br>Giọng dễ nghe, không ngọng, không giọng địa phương.',
        benefit: 'Hỗ trợ đào tạo 120.000đ/ngày (7 ngày). <br>Cơ hội trở thành nhân viên chính thức.',
        time: 'Ca tối: 17h-21h hoặc 18h-22h. <br>Tuần nghỉ 1 ngày.'
    },
    {
        id: 'bidv-consultant',
        title: 'Nhân Viên Tư Vấn BIDV',
        bank: 'BIDV',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Logo_BIDV.svg/2560px-Logo_BIDV.svg.png',
        color: 'text-green-600',
        type: 'Full-time',
        salary: '7 - 8 Triệu',
        location: 'Long Biên, HN',
        address: 'Tòa BIDV Tower, 545 Nguyễn Văn Cừ, Long Biên, Hà Nội',
        videoId: 'video_bidv.mp4',
        desc: 'Gọi điện theo data BIDV cung cấp. <br>Giới thiệu CTKM, hướng dẫn mở thẻ, hồ sơ yêu cầu.<br> Cập nhật kết quả lên hệ thống.',
        req: 'Giọng nói chuẩn, không ngọng. <br>Kỹ năng giao tiếp tốt. <br>Có trách nhiệm.',
        benefit: 'Nhận 100% lương thử việc. <br>Hỗ trợ chi phí đào tạo 700k/khóa. <br>BHXH theo quy định.',
        time: 'Hành chính: 8h00 - 17h30 (T2-T7). <br>Nghỉ CN và Lễ Tết.'
    },
    {
        id: 'lpbank-cskh',
        title: 'CSKH LPBank',
        bank: 'LPBank',
        logo: 'logo_lpbank.jpg',
        color: 'text-yellow-600',
        type: 'Full-time',
        salary: '7 - 9 Triệu',
        location: 'Đống Đa, Hà Nội',
        address: '135 Xã Đàn, Phường Kim Liên, Hà Nội',
        videoId: 'video_lpbank.mp4',
        desc: 'Tiếp nhận cuộc gọi, giải đáp thắc mắc dịch vụ. <br>KHÔNG SALE, KHÔNG ÁP SỐ.',
        req: 'Tốt nghiệp Trung cấp trở lên. <br>Thành thạo tin học văn phòng. <br>Giọng chuẩn miền Bắc.',
        benefit: 'Hỗ trợ đào tạo 100k/ngày (8 ngày). <br>BHXH sau 2 tháng. <br>Thưởng nóng, lễ tết, sinh nhật.',
        time: 'Xoay ca 24/7 (Ca sáng/chiều/tối/đêm).<br> Nghỉ 1 ngày/tuần.'
    },
    {
        id: 'vetc-cskh',
        title: 'CSKH Tổng Đài VETC',
        bank: 'VETC',
        logo: 'logo_vetc.png',
        color: 'text-orange-600',
        type: 'Full-time',
        salary: '~ 7.3 Triệu',
        location: 'Long Biên, HN',
        address: 'Số 7-9 Nguyễn Văn Linh, Long Biên, Hà Nội',
        videoId: 'video_vetc.mp4',
        desc: 'Giải đáp thắc mắc dịch vụ thu phí không dừng VETC, định danh tài khoản. <br>KHÔNG BÁN HÀNG.',
        req: 'Từ 18 tuổi, ưu tiên Nam. <br>Tin học cơ bản. <br>Có kinh nghiệm CSKH > 3 tháng là lợi thế.',
        benefit: 'Hỗ trợ đào tạo 100k/ngày. <br>Môi trường trẻ trung. <br>Trang thiết bị đầy đủ.',
        time: 'Xoay ca (có ca đêm, ca hành chính). <br>Tuần nghỉ 1 ngày.'
    },
];

// --- HELPER: LOAD HTML2CANVAS ---
const loadHtml2Canvas = () => {
    return new Promise((resolve, reject) => {
        if (typeof html2canvas !== 'undefined') return resolve();
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};

// --- STATE MANAGEMENT ---
if (typeof window.currentTemplate === 'undefined') {
    window.currentTemplate = 1; 
}

// --- VIEWS: GIAO DIỆN (TEMPLATES) ---

// 1. HOME VIEW
const HomeView = () => `
    <!-- Hero Section -->
    <section class="relative pt-12 pb-16 px-4 text-center">
        <div class="max-w-5xl mx-auto z-10 animate-fade-up">
            <span class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-purple-200 text-purple-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Đang tuyển dụng 2025
            </span>
            
            <h1 class="text-5xl md:text-7xl font-montserrat font-black mb-6 leading-tight text-slate-900 tracking-tight">
                Khởi Đầu Sự Nghiệp <br>
                <span class="animate-title-reveal py-1">Tài Chính Ngân Hàng</span>
            </h1>
            
            <p class="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Gia nhập BELLSYSTEM24 - Đối tác chiến lược của MB, TPBank, BIDV. Môi trường làm việc chuẩn Gen Z, thu nhập hấp dẫn và lộ trình thăng tiến rõ ràng.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <button onclick="window.router.navigate('jobs')" class="btn-primary py-4 px-8 rounded-full text-lg font-bold shadow-lg shadow-purple-200 flex items-center justify-center gap-2 min-w-[200px]">
                    Xem Việc Làm Ngay <i class="fa-solid fa-arrow-right"></i>
                </button>
                
                <button onclick="window.router.navigate('cv-builder')" class="py-4 px-8 rounded-full bg-white text-purple-600 font-bold border border-purple-200 hover:bg-purple-50 transition shadow-sm flex items-center justify-center gap-2 min-w-[200px]">
                    <i class="fa-solid fa-file-pen"></i> Tạo CV Online
                </button>

                <a href="https://www.facebook.com/profile.php?id=61584435535860" target="_blank" class="py-4 px-8 rounded-full bg-white text-slate-700 font-bold border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition shadow-sm flex items-center justify-center gap-2 min-w-[200px]">
                    <i class="fa-brands fa-facebook"></i> Chat với HR
                </a>
            </div>
        </div>
    </section>

    <!-- Partners Marquee -->
    <section class="py-16 overflow-hidden relative border-y border-slate-200/50 bg-white/40 backdrop-blur-sm">
        <p class="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-10 animate-fade-up">
            Được tin tưởng bởi các định chế tài chính hàng đầu
        </p>
        
        <div class="relative w-full max-w-full overflow-hidden">
            <div class="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#f0f9ff] to-transparent z-10 pointer-events-none"></div>
            <div class="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#f0f9ff] to-transparent z-10 pointer-events-none"></div>

            <div class="flex whitespace-nowrap animate-scroll w-max group">
                <!-- Group 1 -->
                <div class="flex gap-16 mx-10 items-center">
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-blue-100 border border-slate-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_MB_new.png" class="w-full h-full object-contain" alt="MB">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">MB Bank</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-purple-100 border border-slate-100">
                            <img src="logo_tpbank.jpg" class="w-full h-full object-contain" alt="TPBank">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">TPBank</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-green-100 border border-slate-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Logo_BIDV.svg/2560px-Logo_BIDV.svg.png" class="w-full h-full object-contain" alt="BIDV">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">BIDV</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-orange-100 border border-slate-100">
                            <img src="logo_vetc.png" class="w-full h-full object-contain" alt="VETC">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">VETC</span>
                    </div>
                </div>
                
                <!-- Group 2 (Duplicate for Infinite Loop) -->
                <div class="flex gap-16 mx-10 items-center">
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-blue-100 border border-slate-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_MB_new.png" class="w-full h-full object-contain" alt="MB">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">MB Bank</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-purple-100 border border-slate-100">
                            <img src="logo_tpbank.jpg" class="w-full h-full object-contain" alt="TPBank">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">TPBank</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-green-100 border border-slate-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Logo_BIDV.svg/2560px-Logo_BIDV.svg.png" class="w-full h-full object-contain" alt="BIDV">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">BIDV</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-orange-100 border border-slate-100">
                            <img src="logo_vetc.png" class="w-full h-full object-contain" alt="VETC">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">VETC</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Grid Redesigned -->
    <section id="about" class="relative py-24 px-4 max-w-7xl mx-auto overflow-hidden">
        <div class="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-50/50 to-transparent -z-10 pointer-events-none"></div>
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            
            <!-- Left Column: Interactive Cards Grid -->
            <div class="order-2 lg:order-1 relative">
                <div class="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40 animate-pulse-glow -z-10"></div>
                
                <div class="grid grid-cols-2 gap-6">
                    <div class="glass-card p-6 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-200/50 group animate-fade-up" style="animation-delay: 0.1s;">
                        <div class="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-500 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <h3 class="font-display font-bold text-slate-800 text-lg mb-2">Gen Z Style</h3>
                        <p class="text-sm text-slate-500 leading-relaxed">Môi trường trẻ, năng động, thoải mái sáng tạo, không gò bó.</p>
                    </div>
                    <div class="glass-card p-6 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/50 mt-12 group animate-fade-up" style="animation-delay: 0.3s;">
                        <div class="w-14 h-14 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                            <i class="fa-solid fa-sack-dollar"></i>
                        </div>
                        <h3 class="font-display font-bold text-slate-800 text-lg mb-2">Thu nhập tốt</h3>
                        <p class="text-sm text-slate-500 leading-relaxed">Lương cứng cạnh tranh + Thưởng KPI không giới hạn.</p>
                    </div>
                    <div class="glass-card p-6 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-200/50 group animate-fade-up" style="animation-delay: 0.2s;">
                        <div class="w-14 h-14 rounded-2xl bg-pink-50 text-pink-500 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500">
                            <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <h3 class="font-display font-bold text-slate-800 text-lg mb-2">Đào tạo A-Z</h3>
                        <p class="text-sm text-slate-500 leading-relaxed">Chưa có kinh nghiệm? Đừng lo, bạn sẽ được cầm tay chỉ việc.</p>
                    </div>
                    <div class="glass-card p-6 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200/50 mt-12 group animate-fade-up" style="animation-delay: 0.4s;">
                        <div class="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                            <i class="fa-solid fa-rocket"></i>
                        </div>
                        <h3 class="font-display font-bold text-slate-800 text-lg mb-2">Thăng tiến</h3>
                        <p class="text-sm text-slate-500 leading-relaxed">Cơ hội thăng tiến lên Leader, Manager minh bạch.</p>
                    </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="order-1 lg:order-2 pl-0 lg:pl-10">
                <span class="inline-block py-1 px-3 rounded-lg bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4 animate-fade-up">Về chúng tôi</span>
                <h2 class="text-4xl md:text-5xl font-montserrat font-black text-slate-900 mb-6 leading-[1.2] animate-fade-up" style="animation-delay: 0.1s;">
                    Nơi Bạn Được <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">Là Chính Mình</span>
                </h2>
                <p class="text-lg text-slate-600 mb-8 leading-relaxed animate-fade-up" style="animation-delay: 0.2s;">
                    Tại BELLSYSTEM24, chúng tôi không chỉ tuyển nhân viên, chúng tôi tìm kiếm đồng đội. Đây là nơi bạn rèn luyện kỹ năng giao tiếp, nghiệp vụ tài chính và tư duy dịch vụ chuyên nghiệp.
                </p>
                <ul class="space-y-5 animate-fade-up" style="animation-delay: 0.3s;">
                    <li class="flex items-start gap-4 group">
                        <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 group-hover:bg-green-500 transition-colors duration-300">
                            <i class="fa-solid fa-check text-green-600 text-xs group-hover:text-white"></i>
                        </div>
                        <span class="font-medium text-slate-700 text-lg">Chấp nhận sinh viên năm cuối, chờ bằng.</span>
                    </li>
                    <li class="flex items-start gap-4 group">
                        <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 group-hover:bg-green-500 transition-colors duration-300">
                            <i class="fa-solid fa-check text-green-600 text-xs group-hover:text-white"></i>
                        </div>
                        <span class="font-medium text-slate-700 text-lg">Văn phòng xịn xò, Pantry ngập tràn đồ ăn.</span>
                    </li>
                    <li class="flex items-start gap-4 group">
                        <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 group-hover:bg-green-500 transition-colors duration-300">
                            <i class="fa-solid fa-check text-green-600 text-xs group-hover:text-white"></i>
                        </div>
                        <span class="font-medium text-slate-700 text-lg">Teambuilding, Party cực "cháy" hàng năm.</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
`;

// 2. JOBS LIST VIEW
const JobsView = () => `
    <section class="max-w-7xl mx-auto px-4 py-12 min-h-screen">
        <div class="text-center mb-16 animate-fade-up">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">Danh Sách <span class="text-gradient">Việc Làm</span></h2>
            <p class="text-slate-500 text-lg">Tìm kiếm vị trí phù hợp với "gu" của bạn.</p>
        </div>

        <div class="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-xl shadow-purple-100/50 mb-12 flex flex-col md:flex-row gap-2 animate-fade-up sticky top-24 z-30 border border-slate-100" style="animation-delay: 0.1s;">
            <div class="flex-1 relative">
                <i class="fa-solid fa-magnifying-glass absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                <input type="text" id="searchInput" placeholder="Tìm kiếm (VD: UOB, CSKH, Part-time...)" 
                    class="w-full pl-12 pr-4 py-4 bg-transparent rounded-xl focus:outline-none text-slate-700 font-medium placeholder-slate-400">
            </div>
            <div class="w-full md:w-px h-px md:h-10 bg-slate-200 self-center"></div>
            <div class="w-full md:w-64">
                <select id="bankFilter" class="w-full h-full px-4 py-4 bg-transparent rounded-xl focus:outline-none cursor-pointer text-slate-700 font-medium appearance-none">
                    <option value="all">Tất cả Ngân hàng</option>
                    <option value="UOB">UOB Bank</option>
                    <option value="TPBank">TPBank</option>
                    <option value="BIDV">BIDV</option>
                    <option value="MB Bank">MB Bank</option>
                    <option value="LPBank">LPBank</option>
                    <option value="VETC">VETC</option>
                    <option value="VIB">VIB</option>
                </select>
            </div>
            <button onclick="window.handleSearch()" class="btn-primary rounded-xl px-8 py-3 font-bold md:w-auto w-full">
                Tìm Ngay
            </button>
        </div>

        <!-- Job Grid -->
        <div id="jobGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2"></div>

        <!-- No Results -->
        <div id="noResults" class="hidden text-center py-20">
            <div class="inline-block p-6 rounded-full bg-slate-100 mb-4">
                <i class="fa-solid fa-magnifying-glass-location text-4xl text-slate-400"></i>
            </div>
            <p class="text-lg text-slate-500 font-medium">Chưa tìm thấy công việc phù hợp.</p>
        </div>
    </section>
`;

// 3. JOB DETAIL VIEW
const JobDetailView = (job) => `
    <section class="max-w-5xl mx-auto px-4 py-8 min-h-screen animate-fade-up">
        <!-- Back Button -->
        <button onclick="window.router.navigate('jobs')" class="mb-8 flex items-center gap-2 text-slate-500 hover:text-purple-600 transition font-medium group bg-white px-4 py-2 rounded-lg shadow-sm">
            <i class="fa-solid fa-arrow-left group-hover:-translate-x-1 transition"></i> Quay lại danh sách
        </button>
        
        <div class="bg-white rounded-[2.5rem] shadow-2xl shadow-purple-100/50 overflow-hidden border border-slate-100 relative">
            <!-- Header -->
            <div class="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 text-white relative overflow-hidden">
                <div class="absolute right-0 top-0 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-3 mb-6">
                        <span class="bg-white/10 backdrop-blur border border-white/20 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2">
                            <img src="${job.logo}" class="w-5 h-5 object-contain" alt="Logo"> ${job.bank}
                        </span>
                        <span class="bg-purple-600/80 backdrop-blur px-3 py-1 rounded-lg text-sm font-bold shadow-lg shadow-purple-500/30 text-white border border-purple-400">
                            ${job.type}
                        </span>
                    </div>
                    <h1 class="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">${job.title}</h1>
                    <div class="flex flex-col md:flex-row gap-8 mt-8 pt-8 border-t border-white/10">
                        <div>
                            <p class="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Mức lương</p>
                            <p class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">${job.salary}</p>
                        </div>
                        <div>
                            <p class="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Địa điểm</p>
                            <p class="text-lg font-medium text-white">${job.location}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row">
                <!-- Main Content -->
                <div class="p-8 md:p-12 flex-1 space-y-10">
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 flex items-center gap-3 mb-4">
                            <span class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><i class="fa-solid fa-file-lines"></i></span>
                            Mô tả công việc
                        </h3>
                        <p class="text-slate-600 leading-relaxed text-justify bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            ${job.desc}
                        </p>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
                                <i class="fa-solid fa-clock text-purple-500"></i> Thời gian
                            </h3>
                            <p class="text-slate-600 text-sm leading-relaxed">${job.time}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
                                <i class="fa-solid fa-location-dot text-red-500"></i> Địa chỉ chi tiết
                            </h3>
                            <p class="text-slate-600 text-sm leading-relaxed">${job.address}</p>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 flex items-center gap-3 mb-4">
                            <span class="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center"><i class="fa-solid fa-user-check"></i></span>
                            Yêu cầu ứng viên
                        </h3>
                        <div class="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 text-slate-700 leading-relaxed">
                            ${job.req}
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 flex items-center gap-3 mb-4">
                            <span class="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center"><i class="fa-solid fa-gift"></i></span>
                            Quyền lợi (Benefits)
                        </h3>
                        <div class="bg-green-50/50 p-6 rounded-2xl border border-green-100 text-slate-700 leading-relaxed">
                            ${job.benefit}
                        </div>
                    </div>
                    <div>
                         <h3 class="text-xl font-bold text-slate-800 flex items-center gap-3 mb-4">
                            <span class="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center"><i class="fa-solid fa-video"></i></span>
                            Góc nhìn công việc (Video)
                        </h3>
                        <div class="video-wrapper bg-slate-100 rounded-2xl overflow-hidden shadow-inner border border-slate-100 relative" style="padding-bottom: 56.25%; height: 0;">
                            <video controls autoplay loop class="absolute top-0 left-0 w-full h-full object-cover">
                                <source src="${job.videoId}" type="video/mp4">
                                Trình duyệt của bạn không hỗ trợ thẻ video.
                            </video>
                        </div>
                        <p class="text-sm text-slate-400 mt-2 italic text-center">Video giới thiệu môi trường làm việc thực tế.</p>
                    </div>
                </div>

                <!-- Sidebar CTA -->
                <div class="lg:w-80 bg-slate-50 p-8 border-l border-slate-100 flex flex-col items-center">
                    <div class="sticky top-24 w-full">
                        <p class="text-slate-500 text-sm mb-6 text-center">Bạn đã sẵn sàng gia nhập?</p>
                        <a href="https://www.facebook.com/profile.php?id=61584435535860" target="_blank" 
                           class="group block w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg text-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition duration-300 animate-pulse-glow">
                            ỨNG TUYỂN NGAY <i class="fa-solid fa-paper-plane ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                        <p class="text-xs text-center text-slate-400 mt-4">
                            Click để chat trực tiếp với bộ phận Tuyển dụng qua Facebook.
                        </p>
                        <div class="mt-8 pt-8 border-t border-slate-200 w-full">
                            <h4 class="font-bold text-slate-700 mb-4">Lưu ý khi ứng tuyển:</h4>
                            <ul class="text-sm text-slate-500 space-y-2 list-disc pl-4">
                                <li>Chuẩn bị sẵn CV (nếu có).</li>
                                <li>Trang phục lịch sự khi phỏng vấn.</li>
                                <li>Đọc kỹ JD trước khi ứng tuyển.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

// --- HELPER: Render CV Template 1 (Classic Blue) ---
// UPDATE: Centered Headers & Increase Font Size
const renderTemplate1 = () => `
    <div id="cv-preview-container" class="bg-white w-[210mm] min-h-[297mm] shadow-2xl flex relative text-slate-800 overflow-hidden">
        <!-- LEFT COLUMN (BLUE) -->
        <div class="w-[35%] bg-[#e0f2f1] p-8 flex flex-col items-center text-center border-r border-[#14b8a6]/20">
            <!-- Avatar -->
            <div class="w-40 h-40 rounded-full border-4 border-[#14b8a6] overflow-hidden mb-8 bg-white shadow-md">
                <img id="cv-avatar-preview" src="https://via.placeholder.com/150?text=IMG" class="w-full h-full object-cover">
            </div>
            
            <h1 id="cv-name" class="text-3xl font-black text-[#0f766e] uppercase mb-3 leading-tight break-words w-full">NGUYỄN VĂN A</h1>
            <p id="cv-title" class="text-lg font-bold text-[#14b8a6] mb-10 uppercase tracking-wider">NHÂN VIÊN CSKH</p>

            <!-- Contact Info (CENTERED HEADER) -->
            <div class="w-full text-left space-y-4 mb-10">
                <div class="flex justify-center items-center bg-[#14b8a6] text-white font-bold py-2 px-4 uppercase text-base mb-6 rounded-full border border-[#0f766e] shadow-sm">THÔNG TIN LIÊN HỆ</div>
                <div id="sec-dob" class="flex items-center gap-3 text-base text-slate-700 break-words"><i class="fa-solid fa-cake-candles w-6 text-[#14b8a6] text-lg flex-shrink-0"></i> <span id="cv-dob">xx/xx/xxxx</span></div>
                <div id="sec-gender" class="flex items-center gap-3 text-base text-slate-700 break-words"><i class="fa-solid fa-user w-6 text-[#14b8a6] text-lg flex-shrink-0"></i> <span id="cv-gender">Nam/Nữ</span></div>
                <div id="sec-phone" class="flex items-center gap-3 text-base text-slate-700 break-words"><i class="fa-solid fa-phone w-6 text-[#14b8a6] text-lg flex-shrink-0"></i> <span id="cv-phone">09xxxxxxxx</span></div>
                <div id="sec-email" class="flex items-center gap-3 text-base text-slate-700 break-words"><i class="fa-solid fa-envelope w-6 text-[#14b8a6] text-lg flex-shrink-0"></i> <span id="cv-email">email@...</span></div>
                <div id="sec-addr" class="flex items-center gap-3 text-base text-slate-700 break-words"><i class="fa-solid fa-location-dot w-6 text-[#14b8a6] text-lg flex-shrink-0"></i> <span id="cv-addr">Hà Nội</span></div>
            </div>

            <!-- Objective (CENTERED HEADER) -->
            <div id="container-objective" class="w-full text-left mb-10" style="display:none;">
                <div class="flex justify-center items-center bg-transparent border-2 border-[#14b8a6] text-[#0f766e] font-bold py-2 px-4 uppercase text-base mb-4 shadow-sm">MỤC TIÊU NGHỀ NGHIỆP</div>
                <p id="cv-objective" class="text-base text-slate-700 leading-relaxed text-justify break-words"></p>
            </div>

            <!-- Skills (CENTERED HEADER) -->
            <div id="container-skills" class="w-full text-left" style="display:none;">
                <div class="flex justify-center items-center bg-transparent border-2 border-[#14b8a6] text-[#0f766e] font-bold py-2 px-4 uppercase text-base mb-4 shadow-sm">KỸ NĂNG</div>
                <p id="cv-skills" class="text-base text-slate-700 leading-relaxed whitespace-pre-line break-words"></p>
            </div>
        </div>

        <!-- RIGHT COLUMN (WHITE) -->
        <div class="w-[65%] p-10 pt-12 flex flex-col">
            <!-- Education (CENTERED HEADER) -->
            <div id="container-education" class="mb-10" style="display:none;">
                <div class="flex justify-center items-center bg-[#0ea5e9] text-white font-bold py-3 px-6 rounded-full uppercase mb-6 w-full tracking-wide text-lg shadow-md">HỌC VẤN</div>
                <div id="cv-education" class="text-base text-slate-800 leading-relaxed whitespace-pre-line pl-4 border-l-4 border-[#0ea5e9]/30 break-words"></div>
            </div>
            <!-- Experience (CENTERED HEADER) -->
            <div id="container-experience" class="mb-10">
                <div class="flex justify-center items-center bg-[#0ea5e9] text-white font-bold py-3 px-6 rounded-full uppercase mb-6 w-full tracking-wide text-lg shadow-md">KINH NGHIỆM LÀM VIỆC</div>
                <div id="cv-exp-list" class="space-y-8">
                    <div id="cv-exp-item-1" class="mb-8 pl-4 border-l-4 border-[#0ea5e9]/30" style="display:none;">
                        <div class="flex justify-between items-baseline mb-2">
                            <h4 id="cv-exp-company-1" class="font-bold text-slate-900 text-xl uppercase break-words"></h4>
                            <span id="cv-exp-time-1" class="text-sm text-slate-500 italic font-medium"></span>
                        </div>
                        <p id="cv-exp-pos-1" class="text-base text-slate-800 font-normal mb-3 italic text-[#0ea5e9] break-words"></p>
                        <p id="cv-exp-desc-1" class="text-base text-slate-700 leading-relaxed whitespace-pre-line text-justify break-words"></p>
                    </div>
                </div>
                <p id="exp-placeholder" class="text-base text-slate-400 italic text-center py-8">(Chưa nhập kinh nghiệm)</p>
            </div>
            <!-- Activities (CENTERED HEADER) -->
            <div id="container-activities" class="mb-10" style="display:none;">
                <div class="flex justify-center items-center bg-[#0ea5e9] text-white font-bold py-3 px-6 rounded-full uppercase mb-6 w-full tracking-wide text-lg shadow-md">HOẠT ĐỘNG</div>
                <div id="cv-activities" class="text-base text-slate-800 leading-relaxed whitespace-pre-line pl-4 border-l-4 border-[#0ea5e9]/30 break-words"></div>
            </div>
            <!-- Footer -->
            <div class="mt-auto pt-12 text-right border-t border-slate-100">
                <p class="text-sm text-slate-400 italic font-medium">CV created via Bellsystem24</p>
            </div>
        </div>
    </div>
`;

// --- HELPER: Render CV Template 2 (Modern Teal) ---
// UPDATE: Centered Headers & Increase Font Size
const renderTemplate2 = () => `
    <div id="cv-preview-container" class="bg-white w-[210mm] min-h-[297mm] shadow-2xl flex flex-col relative text-slate-800 overflow-hidden">
        <!-- Header Section -->
        <div class="relative pt-10 pb-20 px-8 text-center bg-[#e0f2f1] border-b-4 border-teal-500">
            <h1 id="cv-name" class="text-3xl font-black text-gray-800 uppercase tracking-wide mb-2 break-words">NGUYỄN VĂN A</h1>
            <p id="cv-title" class="text-lg font-bold text-gray-600 uppercase tracking-widest mb-6 break-words">NHÂN VIÊN KINH DOANH</p>
            <div class="absolute left-1/2 -translate-x-1/2 -bottom-16 w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white z-10">
                 <img id="cv-avatar-preview" src="https://via.placeholder.com/150?text=IMG" class="w-full h-full object-cover">
            </div>
        </div>
        
        <!-- Info Bar -->
        <div class="mt-20 px-8 flex justify-center gap-6 text-sm text-gray-600 flex-wrap">
             <div id="sec-phone" class="flex items-center gap-2 break-words"><i class="fa-solid fa-phone bg-gray-800 text-white p-1 rounded-full text-xs"></i> <span id="cv-phone">09xxxxxxxx</span></div>
             <div id="sec-email" class="flex items-center gap-2 break-words"><i class="fa-solid fa-envelope bg-gray-800 text-white p-1 rounded-full text-xs"></i> <span id="cv-email">email@...</span></div>
             <div id="sec-addr" class="flex items-center gap-2 break-words"><i class="fa-solid fa-map-marker-alt bg-gray-800 text-white p-1 rounded-full text-xs"></i> <span id="cv-addr">Hà Nội</span></div>
              <div id="sec-dob" class="flex items-center gap-2 break-words"><i class="fa-solid fa-calendar bg-gray-800 text-white p-1 rounded-full text-xs"></i> <span id="cv-dob">xx/xx/xxxx</span></div>
        </div>

         <!-- Main Body Grid -->
        <div class="grid grid-cols-12 gap-8 p-10 pt-6 flex-grow">
            <!-- Left Column (Main Content) -->
            <div class="col-span-5 flex flex-col gap-8 border-r border-gray-200 pr-6">
                
                <!-- Objective (CENTERED HEADER) -->
                <div id="container-objective" style="display:none;">
                    <div class="flex items-center mb-3 justify-center w-full relative">
                         <div class="bg-teal-500 text-white p-2 rounded-full absolute left-0"><i class="fa-solid fa-user"></i></div>
                         <h3 class="font-bold text-gray-700 uppercase text-lg bg-gray-200 py-1 px-4 rounded-r-full w-full flex justify-center items-center pl-10">MỤC TIÊU NGHỀ NGHIỆP</h3>
                    </div>
                    <p id="cv-objective" class="text-base text-gray-600 leading-relaxed text-justify pl-2 break-words"></p>
                </div>

                 <!-- Experience (Timeline Style) - CENTERED HEADER -->
                <div id="container-experience">
                     <div class="flex items-center mb-4 justify-center w-full relative">
                         <div class="bg-teal-500 text-white p-2 rounded-full absolute left-0"><i class="fa-solid fa-briefcase"></i></div>
                         <h3 class="font-bold text-gray-700 uppercase text-lg bg-gray-200 py-1 px-4 rounded-r-full w-full flex justify-center items-center pl-10">KINH NGHIỆM LÀM VIỆC</h3>
                    </div>
                    <div id="cv-exp-list" class="relative border-l-2 border-teal-500 ml-4 pl-6 space-y-6">
                        <div id="cv-exp-item-1" style="display:none;" class="relative">
                             <div class="absolute -left-[31px] top-1 w-3 h-3 bg-teal-500 rounded-full border-2 border-white"></div>
                            <h4 id="cv-exp-company-1" class="font-bold text-gray-800 text-base break-words"></h4>
                            <p id="cv-exp-pos-1" class="text-sm text-teal-600 font-normal mb-1 italic break-words"></p>
                             <span id="cv-exp-time-1" class="text-xs text-gray-500 italic block mb-2"></span>
                            <p id="cv-exp-desc-1" class="text-sm text-gray-600 leading-relaxed text-justify break-words"></p>
                        </div>
                    </div>
                     <p id="exp-placeholder" class="text-sm text-gray-400 italic text-center py-4">(Chưa nhập kinh nghiệm)</p>
                </div>

            </div>

            <!-- Right Column (Sidebar Info) -->
            <div class="col-span-7 flex flex-col gap-8">
                 <!-- Education (CENTERED HEADER) -->
                <div id="container-education" style="display:none;">
                     <div class="flex items-center mb-3 justify-center w-full relative">
                         <div class="bg-teal-500 text-white p-2 rounded-full absolute right-0"><i class="fa-solid fa-graduation-cap"></i></div>
                         <h3 class="font-bold text-gray-700 uppercase text-lg bg-gray-200 py-1 px-4 rounded-l-full w-full flex justify-center items-center pr-10">HỌC VẤN</h3>
                    </div>
                    <div id="cv-education" class="text-base text-gray-600 leading-relaxed whitespace-pre-line text-right pr-2 break-words"></div>
                </div>

                 <!-- Skills (CENTERED HEADER) -->
                <div id="container-skills" style="display:none;">
                    <div class="flex items-center mb-3 justify-center w-full relative">
                         <div class="bg-teal-500 text-white p-2 rounded-full absolute right-0"><i class="fa-solid fa-tools"></i></div>
                         <h3 class="font-bold text-gray-700 uppercase text-lg bg-gray-200 py-1 px-4 rounded-l-full w-full flex justify-center items-center pr-10">KỸ NĂNG</h3>
                    </div>
                    <div id="cv-skills" class="text-base text-gray-600 leading-relaxed whitespace-pre-line text-right pr-2 break-words"></div>
                </div>
                
                 <!-- Soft Skills (CENTERED HEADER) -->
                <div id="container-soft-skills" style="display:none;">
                    <div class="flex items-center mb-3 justify-center w-full relative">
                         <div class="bg-teal-500 text-white p-2 rounded-full absolute right-0"><i class="fa-solid fa-leaf"></i></div>
                         <h3 class="font-bold text-gray-700 uppercase text-lg bg-gray-200 py-1 px-4 rounded-l-full w-full flex justify-center items-center pr-10">KỸ NĂNG MỀM</h3>
                    </div>
                    <div id="cv-soft-skills" class="space-y-3 pr-2 break-words"></div>
                </div>

                 <!-- Hobbies (CENTERED HEADER) -->
                <div id="container-hobbies" style="display:none;">
                    <div class="flex items-center mb-3 justify-center w-full relative">
                         <div class="bg-teal-500 text-white p-2 rounded-full absolute right-0"><i class="fa-solid fa-heart"></i></div>
                         <h3 class="font-bold text-gray-700 uppercase text-lg bg-gray-200 py-1 px-4 rounded-l-full w-full flex justify-center items-center pr-10">SỞ THÍCH</h3>
                    </div>
                    <div id="cv-hobbies" class="text-base text-gray-600 leading-relaxed whitespace-pre-line text-right pr-2 break-words"></div>
                </div>

                 <!-- Activities (CENTERED HEADER) -->
                <div id="container-activities" style="display:none;">
                    <div class="flex items-center mb-3 justify-center w-full relative">
                         <div class="bg-teal-500 text-white p-2 rounded-full absolute right-0"><i class="fa-solid fa-users"></i></div>
                         <h3 class="font-bold text-gray-700 uppercase text-lg bg-gray-200 py-1 px-4 rounded-l-full w-full flex justify-center items-center pr-10">HOẠT ĐỘNG</h3>
                    </div>
                    <div id="cv-activities" class="text-base text-gray-600 leading-relaxed whitespace-pre-line text-right pr-2 break-words"></div>
                </div>
            </div>
        </div>
         <!-- Footer -->
        <div class="absolute bottom-4 right-8">
            <p class="text-[10px] text-gray-400 italic font-medium">CV created via Bellsystem24</p>
        </div>
    </div>
`;


// 4. CV BUILDER VIEW (UPDATED with Template Selector & New Fields)
const CVBuilderView = () => {
    loadHtml2Canvas();
    
    if (typeof window.expCounter === 'undefined') window.expCounter = 1;
    if (typeof window.currentTemplate === 'undefined') window.currentTemplate = 1;

    const renderCurrentTemplate = () => {
        return window.currentTemplate === 1 ? renderTemplate1() : renderTemplate2();
    }

    return `
    <section class="max-w-7xl mx-auto px-4 py-8 min-h-screen flex flex-col lg:flex-row gap-8 bg-slate-50 animate-fade-up">
        <!-- LEFT: EDITOR FORM -->
        <div class="lg:w-1/3 space-y-6 h-fit sticky top-24 max-h-[85vh] overflow-y-auto pr-2">
            <div class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <h2 class="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><i class="fa-solid fa-pen-to-square text-[#14b8a6]"></i> Nhập thông tin CV</h2>
                
                <!-- Template Selector -->
                <div class="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <label class="text-xs font-bold text-slate-500 uppercase block mb-2">Chọn Mẫu CV</label>
                    <div class="flex gap-3">
                        <button onclick="window.switchTemplate(1)" class="flex-1 py-2 px-3 rounded-lg border-2 ${window.currentTemplate === 1 ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-blue-300'} font-bold text-sm transition">
                             Mẫu 1 (Cổ điển)
                        </button>
                        <button onclick="window.switchTemplate(2)" class="flex-1 py-2 px-3 rounded-lg border-2 ${window.currentTemplate === 2 ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-slate-200 hover:border-teal-300'} font-bold text-sm transition">
                             Mẫu 2 (Hiện đại)
                        </button>
                    </div>
                </div>

                <div class="space-y-4">
                    <!-- Avatar -->
                    <div class="space-y-2">
                        <label class="text-sm font-bold text-slate-600 uppercase">Ảnh đại diện</label>
                        <input type="file" accept="image/*" onchange="window.handleAvatar(this)" class="w-full text-base text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#e0f2f1] file:text-[#0f766e] hover:file:bg-[#ccfbf1]"/>
                    </div>

                    <!-- Personal Info -->
                    <div><label class="text-sm font-bold text-slate-600 uppercase">Họ tên (Bắt buộc)</label><input type="text" id="input-name" oninput="window.updateCV('cv-name', this.value)" placeholder="NGUYỄN VĂN A" class="w-full p-3 border rounded mt-1 text-base"></div>
                    <div><label class="text-sm font-bold text-slate-600 uppercase">Vị trí ứng tuyển</label><input type="text" id="input-title" oninput="window.updateCV('cv-title', this.value)" placeholder="NHÂN VIÊN CSKH" class="w-full p-3 border rounded mt-1 text-base"></div>
                    
                    <div class="grid grid-cols-2 gap-3">
                        <div><label class="text-sm font-bold text-slate-600 uppercase">Ngày sinh</label><input type="text" id="input-dob" oninput="window.updateCV('cv-dob', this.value, 'sec-dob')" placeholder="xx/xx/xxxx" class="w-full p-3 border rounded mt-1 text-base"></div>
                        <div><label class="text-sm font-bold text-slate-600 uppercase">Giới tính</label><input type="text" id="input-gender" oninput="window.updateCV('cv-gender', this.value, 'sec-gender')" placeholder="Nam/Nữ" class="w-full p-3 border rounded mt-1 text-base"></div>
                    </div>
                     <div><label class="text-sm font-bold text-slate-600 uppercase">Số điện thoại</label><input type="text" id="input-phone" oninput="window.updateCV('cv-phone', this.value, 'sec-phone')" placeholder="0912 345 678" class="w-full p-3 border rounded mt-1 text-base"></div>
                     <div><label class="text-sm font-bold text-slate-600 uppercase">Email</label><input type="text" id="input-email" oninput="window.updateCV('cv-email', this.value, 'sec-email')" placeholder="email@gmail.com" class="w-full p-3 border rounded mt-1 text-base"></div>
                     <div><label class="text-sm font-bold text-slate-600 uppercase">Địa chỉ</label><input type="text" id="input-addr" oninput="window.updateCV('cv-addr', this.value, 'sec-addr')" placeholder="Hà Nội" class="w-full p-3 border rounded mt-1 text-base"></div>

                    <!-- Sections -->
                    <div class="pt-4 border-t"><label class="text-sm font-bold text-[#14b8a6] uppercase mb-2 block">Mục tiêu nghề nghiệp</label><textarea id="input-objective" oninput="window.updateCV('cv-objective', this.value, 'container-objective')" rows="3" placeholder="Mô tả mục tiêu..." class="w-full p-3 border rounded text-base"></textarea></div>

                    <div class="pt-4 border-t"><label class="text-sm font-bold text-[#14b8a6] uppercase mb-2 block">Kỹ năng</label><textarea id="input-skills" oninput="window.updateCV('cv-skills', this.value, 'container-skills')" rows="3" placeholder="- Kỹ năng A&#10;- Kỹ năng B" class="w-full p-3 border rounded text-base"></textarea></div>
                    
                    <!-- NEW FIELDS for Template 2 -->
                    <div class="pt-4 border-t"><label class="text-sm font-bold text-[#14b8a6] uppercase mb-2 block">Kỹ năng mềm (Cho Mẫu 2)</label><textarea id="input-soft-skills" oninput="window.updateSoftSkills(this.value)" rows="3" placeholder="- Quản lý thời gian&#10;- Làm việc nhóm" class="w-full p-3 border rounded text-base"></textarea></div>

                    <div class="pt-4 border-t"><label class="text-sm font-bold text-[#14b8a6] uppercase mb-2 block">Sở thích (Cho Mẫu 2)</label><textarea id="input-hobbies" oninput="window.updateCV('cv-hobbies', this.value, 'container-hobbies')" rows="2" placeholder="- Du lịch, Đọc sách..." class="w-full p-3 border rounded text-base"></textarea></div>

                    <div class="pt-4 border-t"><label class="text-sm font-bold text-[#14b8a6] uppercase mb-2 block">Học vấn</label><textarea id="input-edu" oninput="window.updateCV('cv-education', this.value, 'container-education')" rows="3" placeholder="Đại học ABC - Chuyên ngành XYZ (2018-2022)" class="w-full p-3 border rounded text-base"></textarea></div>

                    <!-- EXPERIENCE SECTION (UPDATED LAYOUT) -->
                    <div class="pt-4 border-t">
                        <label class="text-sm font-bold text-[#14b8a6] uppercase mb-2 block">KINH NGHIỆM LÀM VIỆC</label>
                        <div id="exp-input-list">
                            <!-- Experience Item 1 -->
                            <div class="mb-4 pb-4 border-b border-dashed border-slate-200" id="input-group-exp-1">
                                <input type="text" placeholder="Tên Công Ty (Tô đậm)" oninput="window.updateExp(1, 'company', this.value)" class="w-full p-3 border rounded mb-2 text-base font-bold input-exp-company">
                                <input type="text" placeholder="Thời gian (VD: 8/2024 - Nay)" oninput="window.updateExp(1, 'time', this.value)" class="w-full p-3 border rounded mb-2 text-base input-exp-time">
                                <input type="text" placeholder="Vị trí công việc" oninput="window.updateExp(1, 'pos', this.value)" class="w-full p-3 border rounded mb-2 text-base input-exp-pos">
                                <textarea placeholder="Mô tả công việc..." oninput="window.updateExp(1, 'desc', this.value)" rows="3" class="w-full p-3 border rounded text-base input-exp-desc"></textarea>
                            </div>
                        </div>
                        <button onclick="window.addExperience()" class="w-full py-3 border-2 border-dashed border-[#14b8a6] text-[#14b8a6] rounded-lg font-bold hover:bg-teal-50 transition text-base">+ Thêm kinh nghiệm</button>
                    </div>

                    <div class="pt-4 border-t"><label class="text-sm font-bold text-[#14b8a6] uppercase mb-2 block">Hoạt động</label><textarea id="input-activities" oninput="window.updateCV('cv-activities', this.value, 'container-activities')" rows="3" placeholder="Tham gia CLB..." class="w-full p-3 border rounded text-base"></textarea></div>
                </div>

                <div class="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
                    <button onclick="window.downloadPNG()" class="w-full py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition flex items-center justify-center gap-2 text-lg">
                        <i class="fa-solid fa-download"></i> Tải Ảnh CV (PNG)
                    </button>
                     <button onclick="window.exportToWord()" class="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 text-lg">
                        <i class="fa-solid fa-file-word"></i> Tải File Word
                    </button>
                    <button onclick="window.router.navigate('home')" class="w-full py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition text-lg">Quay lại trang chủ</button>
                </div>
            </div>
        </div>

        <!-- RIGHT: CV PREVIEW -->
        <div class="lg:w-2/3 flex justify-center bg-slate-200/50 p-4 rounded-2xl border border-slate-200 overflow-auto" id="cv-preview-wrapper">
            <!-- Dynamic Template Rendering -->
            ${renderCurrentTemplate()}
        </div>
    </section>
    `;
};

// --- HELPER FUNCTIONS ---

window.switchTemplate = (templateId) => {
    window.currentTemplate = templateId;
    const app = document.getElementById('app');
    app.innerHTML = CVBuilderView();
    
    const wrapper = document.getElementById('cv-preview-wrapper');
    if(wrapper) {
         wrapper.innerHTML = window.currentTemplate === 1 ? renderTemplate1() : renderTemplate2();
         // Re-populate data
         const inputs = ['cv-name', 'cv-title', 'cv-email', 'cv-phone', 'cv-dob', 'cv-gender', 'cv-addr', 'cv-objective', 'cv-skills', 'cv-education', 'cv-activities', 'cv-hobbies'];
         inputs.forEach(id => {
             const inputEl = document.getElementById(id.replace('cv', 'input'));
             if(inputEl) window.updateCV(id, inputEl.value, `container-${id.replace('cv-', '')}`);
         });
         const softInput = document.getElementById('input-soft-skills');
         if(softInput) window.updateSoftSkills(softInput.value);
         for(let i=1; i<=window.expCounter; i++) {
             const comp = document.querySelector(`#input-group-exp-${i} .input-exp-company`)?.value;
             const time = document.querySelector(`#input-group-exp-${i} .input-exp-time`)?.value;
             const pos = document.querySelector(`#input-group-exp-${i} .input-exp-pos`)?.value;
             const desc = document.querySelector(`#input-group-exp-${i} .input-exp-desc`)?.value;
             if(comp || time || pos || desc) {
                 window.updateExp(i, 'company', comp);
                 window.updateExp(i, 'time', time);
                 window.updateExp(i, 'pos', pos);
                 window.updateExp(i, 'desc', desc);
             }
         }
         if(window.uploadedAvatarBase64) {
              document.getElementById('cv-avatar-preview').src = window.uploadedAvatarBase64;
         }
    }
    
    const buttons = document.querySelectorAll('button[onclick^="window.switchTemplate"]');
    buttons.forEach((btn, idx) => {
        if ((idx + 1) === templateId) {
             btn.className = `flex-1 py-2 px-3 rounded-lg border-2 ${templateId === 1 ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-teal-500 bg-teal-50 text-teal-700'} font-bold text-sm transition`;
        } else {
             btn.className = 'flex-1 py-2 px-3 rounded-lg border-2 border-slate-200 hover:border-gray-300 font-bold text-sm transition text-gray-500';
        }
    });
};

window.updateCV = (id, value, containerId = null) => {
    const element = document.getElementById(id);
    if(element) {
        const text = value ? value.replace(/\n/g, '<br>') : '';
        element.innerHTML = text;
        if(containerId) {
            const container = document.getElementById(containerId);
            if(container) {
                container.style.display = value && value.trim() !== '' ? 'block' : 'none';
            }
        }
    }
};

window.updateSoftSkills = (value) => {
    const container = document.getElementById('container-soft-skills');
    const listContainer = document.getElementById('cv-soft-skills');
    if (!container || !listContainer) return;
    if (!value || value.trim() === '') { container.style.display = 'none'; return; }
    container.style.display = 'block';
    const lines = value.split('\n');
    const html = lines.map(line => {
        if(line.trim()) {
            const randomWidth = Math.floor(Math.random() * (100 - 60 + 1) + 60);
            return `<div><p class="text-sm text-gray-700 font-medium mb-1">${line.replace(/^- /, '')}</p><div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-teal-500 h-2.5 rounded-full" style="width: ${randomWidth}%"></div></div></div>`;
        }
        return '';
    }).join('');
    listContainer.innerHTML = html;
};

window.addExperience = () => {
    window.expCounter++;
    const id = window.expCounter;
    const inputHTML = `<div class="mb-4 pb-4 border-b border-dashed border-slate-200" id="input-group-exp-${id}"><input type="text" placeholder="Tên Công Ty (Tô đậm)" oninput="window.updateExp(${id}, 'company', this.value)" class="w-full p-3 border rounded mb-2 text-base font-bold input-exp-company"><input type="text" placeholder="Thời gian (VD: 8/2024 - Nay)" oninput="window.updateExp(${id}, 'time', this.value)" class="w-full p-3 border rounded mb-2 text-base input-exp-time"><input type="text" placeholder="Vị trí công việc" oninput="window.updateExp(${id}, 'pos', this.value)" class="w-full p-3 border rounded mb-2 text-base input-exp-pos"><textarea placeholder="Mô tả công việc..." oninput="window.updateExp(${id}, 'desc', this.value)" rows="3" class="w-full p-3 border rounded text-base input-exp-desc"></textarea></div>`;
    document.getElementById('exp-input-list').insertAdjacentHTML('beforeend', inputHTML);
    const isTemplate2 = window.currentTemplate === 2;
    let previewHTML = '';
    if (isTemplate2) {
         previewHTML = `<div id="cv-exp-item-${id}" style="display:none;" class="relative"><div class="absolute -left-[31px] top-1 w-3 h-3 bg-teal-500 rounded-full border-2 border-white"></div><h4 id="cv-exp-company-${id}" class="font-bold text-gray-800 text-base break-words"></h4><p id="cv-exp-pos-${id}" class="text-sm text-teal-600 font-normal mb-1 italic break-words"></p><span id="cv-exp-time-${id}" class="text-xs text-gray-500 italic block mb-2"></span><p id="cv-exp-desc-${id}" class="text-sm text-gray-600 leading-relaxed text-justify break-words"></p></div>`;
    } else {
        previewHTML = `<div id="cv-exp-item-${id}" class="mb-8 pl-4 border-l-4 border-[#0ea5e9]/30" style="display:none;"><div class="flex justify-between items-baseline mb-2"><h4 id="cv-exp-company-${id}" class="font-bold text-slate-900 text-xl uppercase break-words"></h4><span id="cv-exp-time-${id}" class="text-sm text-slate-500 italic font-medium"></span></div><p id="cv-exp-pos-${id}" class="text-base text-slate-800 font-normal mb-3 italic text-[#0ea5e9] break-words"></p><p id="cv-exp-desc-${id}" class="text-base text-slate-700 leading-relaxed whitespace-pre-line text-justify break-words"></p></div>`;
    }
    document.getElementById('cv-exp-list').insertAdjacentHTML('beforeend', previewHTML);
};

window.updateExp = (id, field, value) => {
    const company = document.getElementById(`cv-exp-company-${id}`);
    const time = document.getElementById(`cv-exp-time-${id}`);
    const pos = document.getElementById(`cv-exp-pos-${id}`);
    const desc = document.getElementById(`cv-exp-desc-${id}`);
    const itemContainer = document.getElementById(`cv-exp-item-${id}`);
    const placeholder = document.getElementById('exp-placeholder');
    if(field === 'company') company.innerText = value;
    if(field === 'time') time.innerText = value;
    if(field === 'pos') pos.innerText = value;
    if(field === 'desc') desc.innerHTML = value ? value.replace(/\n/g, '<br>') : '';
    const hasData = company.innerText || pos.innerText || desc.innerText;
    itemContainer.style.display = hasData ? 'block' : 'none';
    const allItems = document.querySelectorAll('[id^="cv-exp-item-"]');
    let anyVisible = false;
    allItems.forEach(item => { if(item.style.display !== 'none') anyVisible = true; });
    placeholder.style.display = anyVisible ? 'none' : 'block';
};

window.handleAvatar = (input) => {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            window.uploadedAvatarBase64 = e.target.result;
            document.getElementById('cv-avatar-preview').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
};

// UPDATED: DOWNLOAD PNG FUNCTION (FIXED LAYOUT + Full Height Capture)
window.downloadPNG = async () => {
    const element = document.getElementById('cv-preview-container');
    if (!element) return;

    await loadHtml2Canvas(); 

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.style.position = 'absolute';
    wrapper.style.top = '-9999px';
    wrapper.style.left = '-9999px';
    wrapper.style.width = '1000px'; // Consistent width for high res
    document.body.appendChild(wrapper);

    const clone = element.cloneNode(true);
    wrapper.appendChild(clone);
    
    // Force styles on clone for high-res capture and full height
    Object.assign(clone.style, {
        width: '100%', 
        height: 'auto', 
        minHeight: '1414px', 
        backgroundColor: '#ffffff',
        margin: '0',
        padding: window.currentTemplate === 2 ? '0' : '40px',
        transform: 'none',
        boxShadow: 'none',
        visibility: 'visible',
        overflow: 'visible',
        zIndex: '-1' 
    });
    
    const allText = clone.querySelectorAll('*');
    allText.forEach(el => {
        const computed = window.getComputedStyle(el);
        if (computed.color === 'rgb(255, 255, 255)' || computed.color === 'rgba(0, 0, 0, 0)') {
             if (!el.classList.contains('text-white')) el.style.color = '#000000';
        }
    });

    try {
        await new Promise(resolve => setTimeout(resolve, 500));
        // Capture full scroll height
        const canvas = await html2canvas(clone, {
            scale: 2, 
            useCORS: true, 
            backgroundColor: '#ffffff', 
            scrollY: 0,
            windowWidth: 1000,
            windowHeight: clone.scrollHeight + 100, 
            onclone: (clonedDoc) => {
                clonedDoc.body.style.overflow = 'visible';
            }
        });
        const link = document.createElement('a');
        link.download = `CV_BellSystem24_Template${window.currentTemplate}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (err) {
        alert('Lỗi khi tạo ảnh PNG: ' + err.message);
        console.error(err);
    } finally {
        document.body.removeChild(wrapper);
    }
}

window.exportToWord = () => { /* ... same as before ... */ const avatarSrc = window.uploadedAvatarBase64 || "https://via.placeholder.com/150?text=Avatar"; const nameVal = document.getElementById('input-name')?.value || "NGUYỄN VĂN A"; const wordHTML = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>CV Export</title></head><body><h1>${nameVal}</h1><p>CV được tạo từ hệ thống. Vui lòng tải ảnh PNG để có giao diện đẹp nhất.</p></body></html>`; const blob = new Blob(['\ufeff', wordHTML], { type: 'application/msword' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'CV_BellSystem24.doc'; document.body.appendChild(link); link.click(); document.body.removeChild(link); };

const createJobCard = (job) => { /* ... */ return `<div class="job-card bg-white rounded-[1.5rem] p-6 cursor-pointer group flex flex-col h-full relative overflow-hidden border border-slate-100 shadow-sm" onclick="window.router.navigate('detail', '${job.id}')"><div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div><div class="flex justify-between items-start mb-5"><div class="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl ${job.color} group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition duration-300 shadow-sm"><img src="${job.logo}" class="w-full h-full object-contain p-2" alt="Logo"></div><span class="px-3 py-1 rounded-lg text-xs font-bold uppercase ${job.type === 'Full-time' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}">${job.type}</span></div><div class="mb-4"><p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1"><i class="fa-solid fa-building"></i> ${job.bank}</p><h3 class="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition line-clamp-2 min-h-[3.5rem] leading-snug">${job.title}</h3></div><div class="mt-auto pt-4 border-t border-slate-100 space-y-3"><div class="flex items-center gap-2 text-sm text-slate-600"><i class="fa-solid fa-wallet text-slate-400 w-5"></i><span class="font-bold text-slate-900">${job.salary}</span></div><div class="flex items-center gap-2 text-sm text-slate-500"><i class="fa-solid fa-location-dot text-slate-400 w-5"></i><span class="line-clamp-1">${job.location}</span></div></div></div>`; }

window.handleSearch = () => { /* ... */ const keyword = document.getElementById('searchInput').value.toLowerCase(); const bank = document.getElementById('bankFilter').value; const filtered = jobsData.filter(job => (job.title.toLowerCase().includes(keyword) || job.bank.toLowerCase().includes(keyword)) && (bank === 'all' || job.bank === bank)); const grid = document.getElementById('jobGrid'); const noRes = document.getElementById('noResults'); if (filtered.length === 0) { grid.innerHTML = ''; noRes.classList.remove('hidden'); } else { noRes.classList.add('hidden'); grid.innerHTML = filtered.map(createJobCard).join(''); document.querySelectorAll('.job-card').forEach((card, index) => { card.style.opacity = '0'; card.style.animation = `fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards ${index * 0.05}s`; }); } }

window.router = {
    navigate: (page, param = null) => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        const app = document.getElementById('app');
        if (page === 'home') { app.innerHTML = HomeView(); if(param==='about') setTimeout(() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'}), 100); }
        else if (page === 'jobs') { app.innerHTML = JobsView(); window.handleSearch(); document.getElementById('searchInput').addEventListener('input', window.handleSearch); document.getElementById('bankFilter').addEventListener('change', window.handleSearch); }
        else if (page === 'detail') { const job = jobsData.find(j => j.id === param); if (job) app.innerHTML = JobDetailView(job); }
        else if (page === 'cv-builder') { app.innerHTML = CVBuilderView(); }
    }
};

document.addEventListener('DOMContentLoaded', () => { window.router.navigate('home'); });