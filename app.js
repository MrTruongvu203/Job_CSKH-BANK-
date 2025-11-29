// --- DATA: DỮ LIỆU CÔNG VIỆC ---
const jobsData = [
    {
        id: 'uob-consultant',
        title: 'Nhân Viên Tư Vấn Thẻ Tín Dụng',
        bank: 'UOB',
        logo: 'fa-building-columns',
        color: 'text-blue-900',
        type: 'Full-time',
        salary: '15 - 20 Triệu ++',
        location: 'Cầu Giấy, Hà Nội',
        address: 'Tầng 3, Tòa nhà Trung Yên 1, Số 1A Vũ Phạm Hàm, Cầu Giấy',
        desc: 'Thực hiện cuộc gọi ra cho Khách hàng theo Data có sẵn (do công ty cung cấp)<br> Giới thiệu, tư vấn các sản phẩm thẻ tín dụng, thẻ ATM, khoản vay của UOB. <br>Trao đổi quyền lợi, chương trình khuyến mãi.',
        req: 'Nam/Nữ 18-35 tuổi. <br>Không nợ xấu ngân hàng. <br>Giao tiếp nhanh nhẹn, cầu thị. <br>Ưu tiên có kinh nghiệm Sale/Telesale > 1 năm (Chưa có sẽ được đào tạo).',
        benefit: 'Thu nhập KHÔNG GIỚI HẠN (Lương cứng + Hoa hồng). <br>Đào tạo 5 ngày có hỗ trợ. <br>Lộ trình thăng tiến rõ ràng lên Leader/Manager. <br>BHXH đầy đủ.',
        time: 'T2-T6 (8h00-17h00). <br>Làm 2 ngày T7/tháng. <br>Nghỉ Lễ Tết.'
    },
    {
        id: 'uob-intern',
        title: 'Thực Tập Sinh Telesales',
        bank: 'UOB',
        logo: 'fa-user-graduate',
        color: 'text-blue-900',
        type: 'Intern',
        salary: '2M + Incentive',
        location: 'Cầu Giấy, Hà Nội',
        address: 'Số 2A Vũ Phạm Hàm, Cầu Giấy, Hà Nội',
        desc: 'Gọi điện tư vấn theo data công ty cung cấp (Talk time 2.5-3h/ngày). <br>Giới thiệu sản phẩm theo kịch bản. <br>Báo cáo kết quả hằng ngày.',
        req: 'Sinh viên năm cuối hoặc chờ bằng. <br>Thực tập tối thiểu 3 tháng. <br>Nhanh nhẹn, giọng dễ nghe. Định hướng theo ngành Ngân hàng.',
        benefit: 'Phụ cấp 2.000.000đ/tháng + Incentive (250k - 1.250k). <br>Dấu mộc thực tập. <br>Cơ hội lên nhân viên chính thức.',
        time: 'Full-time T2-T6 (8h30-17h30). Làm 2 ngày T7/tháng.'
    },
    {
        id: 'mb-cskh',
        title: 'CSKH Ngân Hàng Quân Đội',
        bank: 'MB Bank',
        logo: 'fa-star',
        color: 'text-blue-600',
        type: 'Full-time',
        salary: '7 - 9 Triệu',
        location: 'Đống Đa, Hà Nội',
        address: 'Tòa nhà MBBank - 21 Cát Linh, Đống Đa, Hà Nội',
        desc: 'Tiếp nhận cuộc gọi giải đáp thắc mắc về dịch vụ thẻ. <br>Gọi ra hỗ trợ khách gọi nhỡ (khi có yêu cầu). <br>KHÔNG BÁN HÀNG, KHÔNG ÁP SỐ.',
        req: 'Tốt nghiệp Trung cấp trở lên (chấp nhận chờ bằng). <br>Giọng nói chuẩn, không ngọng, không giọng địa phương. <br>Nhanh nhẹn, hòa đồng.',
        benefit: 'Hỗ trợ 1.000.000đ/khóa đào tạo (10 ngày). <br>Thưởng lễ tết, BHXH, BHYT đầy đủ. <br>Môi trường trẻ trung.',
        time: 'Xoay ca luân phiên (có ca đêm, ca hành chính). <br>Nghỉ 1 ngày bất kỳ/tuần.'
    },
    {
        id: 'tpbank-full',
        title: 'CSKH TPBank (Full-time)',
        bank: 'TPBank',
        logo: 'fa-money-bill-transfer',
        color: 'text-purple-600',
        type: 'Full-time',
        salary: '7 - 9 Triệu',
        location: 'Hà Nội (3 CS)',
        address: 'Lựa chọn: 44 Lê Ngọc Hân / 155 Đội Cấn / Ngoại Giao Đoàn (Bắc Từ Liêm)',
        desc: 'Tiếp nhận cuộc gọi đến, hỗ trợ giải đáp thắc mắc. <br>Tư vấn mở thẻ, tài khoản, e-banking. <br>KHÔNG BÁN HÀNG, KHÔNG ÁP DOANH SỐ.',
        req: '18-35 tuổi. <br>Tốt nghiệp Trung cấp trở lên. <br>Giọng dễ nghe, không ngọng. <br>Chấp nhận sinh viên năm cuối.',
        benefit: 'Hỗ trợ tài chính trong quá trình đào tạo. <br>Thưởng nóng, thưởng lễ tết. <br>Teambuilding, du lịch hàng năm.',
        time: 'Xoay ca trong khung 07h00 - 22h00. <br>Nghỉ 1 ngày/tuần.'
    },
    {
        id: 'tpbank-part',
        title: 'CSKH TPBank (Part-time)',
        bank: 'TPBank',
        logo: 'fa-clock',
        color: 'text-purple-600',
        type: 'Part-time',
        salary: '3 - 5 Triệu',
        location: 'Hà Nội (3 CS)',
        address: 'Lựa chọn: 44 Lê Ngọc Hân / 155 Đội Cấn / Ngoại Giao Đoàn (Bắc Từ Liêm)',
        desc: 'Hỗ trợ khách hàng qua điện thoại. <br>Tư vấn dịch vụ thẻ, tài khoản. <br>Không yêu cầu bán hàng.',
        req: 'Sinh viên năm 3, 4. <br>Giọng dễ nghe, không ngọng, không giọng địa phương.',
        benefit: 'Hỗ trợ đào tạo 120.000đ/ngày (7 ngày). <br>Cơ hội trở thành nhân viên chính thức.',
        time: 'Ca tối: 17h-21h hoặc 18h-22h. <br>Tuần nghỉ 1 ngày.'
    },
    {
        id: 'bidv-consultant',
        title: 'Nhân Viên Tư Vấn BIDV',
        bank: 'BIDV',
        logo: 'fa-leaf',
        color: 'text-green-600',
        type: 'Full-time',
        salary: '7 - 8 Triệu',
        location: 'Long Biên, HN',
        address: 'Tòa BIDV Tower, 545 Nguyễn Văn Cừ, Long Biên, Hà Nội',
        desc: 'Gọi điện theo data BIDV cung cấp. <br>Giới thiệu CTKM, hướng dẫn mở thẻ, hồ sơ yêu cầu.<br> Cập nhật kết quả lên hệ thống.',
        req: 'Giọng nói chuẩn, không ngọng. <br>Kỹ năng giao tiếp tốt. <br>Có trách nhiệm.',
        benefit: 'Nhận 100% lương thử việc. <br>Hỗ trợ chi phí đào tạo 700k/khóa. <br>BHXH theo quy định.',
        time: 'Hành chính: 8h00 - 17h30 (T2-T7). <br>Nghỉ CN và Lễ Tết.'
    },
    {
        id: 'lpbank-cskh',
        title: 'CSKH LPBank',
        bank: 'LPBank',
        logo: 'fa-sack-dollar',
        color: 'text-yellow-600',
        type: 'Full-time',
        salary: '7 - 9 Triệu',
        location: 'Đống Đa, Hà Nội',
        address: '135 Xã Đàn, Phường Kim Liên, Hà Nội',
        desc: 'Tiếp nhận cuộc gọi, giải đáp thắc mắc dịch vụ. <br>KHÔNG SALE, KHÔNG ÁP SỐ.',
        req: 'Tốt nghiệp Trung cấp trở lên. <br>Thành thạo tin học văn phòng. <br>Giọng chuẩn miền Bắc.',
        benefit: 'Hỗ trợ đào tạo 100k/ngày (8 ngày). <br>BHXH sau 2 tháng. <br>Thưởng nóng, lễ tết, sinh nhật.',
        time: 'Xoay ca 24/7 (Ca sáng/chiều/tối/đêm).<br> Nghỉ 1 ngày/tuần.'
    },
    {
        id: 'vetc-cskh',
        title: 'CSKH Tổng Đài VETC',
        bank: 'VETC',
        logo: 'fa-car',
        color: 'text-orange-600',
        type: 'Full-time',
        salary: '~ 7.3 Triệu',
        location: 'Long Biên, HN',
        address: 'Số 7-9 Nguyễn Văn Linh, Long Biên, Hà Nội',
        desc: 'Giải đáp thắc mắc dịch vụ thu phí không dừng VETC, định danh tài khoản. <br>KHÔNG BÁN HÀNG.',
        req: 'Từ 18 tuổi, ưu tiên Nam. <br>Tin học cơ bản. <br>Có kinh nghiệm CSKH > 3 tháng là lợi thế.',
        benefit: 'Hỗ trợ đào tạo 100k/ngày. <br>Môi trường trẻ trung. <br>Trang thiết bị đầy đủ.',
        time: 'Xoay ca (có ca đêm, ca hành chính). <br>Tuần nghỉ 1 ngày.'
    },
];

// --- VIEWS: GIAO DIỆN (TEMPLATES) ---

// 1. HOME VIEW
const HomeView = () => `
    <!-- Hero Section -->
    <section class="relative pt-12 pb-24 px-4 text-center">
        <div class="max-w-5xl mx-auto z-10 animate-fade-up">
            <span class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-purple-200 text-purple-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Đang tuyển dụng 2025
            </span>
            <h1 class="text-5xl md:text-7xl font-display font-black mb-6 leading-tight text-slate-900 tracking-tight">
                Khởi Đầu Sự Nghiệp <br>
                <span class="text-gradient">Tài Chính Ngân Hàng</span>
            </h1>
            <p class="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Gia nhập BELLSYSTEM24 - Đối tác chiến lược của MB, UOB, TPBank, BIDV. Môi trường làm việc chuẩn Gen Z, thu nhập hấp dẫn và lộ trình thăng tiến rõ ràng.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button onclick="router.navigate('jobs')" class="btn-primary py-4 px-10 rounded-full text-lg font-bold shadow-lg shadow-purple-200 flex items-center justify-center gap-2">
                    Xem Việc Làm Ngay <i class="fa-solid fa-arrow-right"></i>
                </button>
                <a href="https://www.facebook.com/profile.php?id=61584435535860" target="_blank" class="py-4 px-10 rounded-full bg-white text-slate-700 font-bold border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition shadow-sm flex items-center justify-center gap-2">
                    <i class="fa-brands fa-facebook"></i> Chat với HR
                </a>
            </div>
        </div>
    </section>

    <!-- Partners Logos -->
    <section class="py-10 border-y border-slate-200/60 bg-white/40 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-4">
            <p class="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-10">Đối tác chiến lược hàng đầu</p>
            <div class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <div class="flex items-center gap-2 text-xl font-bold text-slate-700"><i class="fa-solid fa-building-columns text-blue-900"></i> UOB</div>
                <div class="flex items-center gap-2 text-xl font-bold text-slate-700"><i class="fa-solid fa-star text-blue-600"></i> MB Bank</div>
                <div class="flex items-center gap-2 text-xl font-bold text-slate-700"><i class="fa-solid fa-money-bill-transfer text-purple-600"></i> TPBank</div>
                <div class="flex items-center gap-2 text-xl font-bold text-slate-700"><i class="fa-solid fa-leaf text-green-600"></i> BIDV</div>
                <div class="flex items-center gap-2 text-xl font-bold text-slate-700"><i class="fa-solid fa-car text-orange-500"></i> VETC</div>
            </div>
        </div>
    </section>

    <!-- Features Grid -->
    <section id="about" class="py-24 px-4 max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="order-2 md:order-1 animate-fade-up" style="animation-delay: 0.2s;">
                <div class="grid grid-cols-2 gap-6">
                    <div class="glass-card p-6 rounded-3xl hover:-translate-y-2 transition duration-300">
                        <div class="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-2xl mb-4"><i class="fa-solid fa-bolt"></i></div>
                        <h3 class="font-bold text-slate-800 text-lg mb-1">Gen Z Style</h3>
                        <p class="text-sm text-slate-500">Môi trường trẻ, năng động, thoải mái sáng tạo.</p>
                    </div>
                    <div class="glass-card p-6 rounded-3xl hover:-translate-y-2 transition duration-300 mt-8">
                        <div class="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-4"><i class="fa-solid fa-money-check-dollar"></i></div>
                        <h3 class="font-bold text-slate-800 text-lg mb-1">Thu nhập tốt</h3>
                        <p class="text-sm text-slate-500">Lương cứng + Thưởng KPI không giới hạn.</p>
                    </div>
                    <div class="glass-card p-6 rounded-3xl hover:-translate-y-2 transition duration-300">
                        <div class="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center text-2xl mb-4"><i class="fa-solid fa-graduation-cap"></i></div>
                        <h3 class="font-bold text-slate-800 text-lg mb-1">Đào tạo A-Z</h3>
                        <p class="text-sm text-slate-500">Không cần kinh nghiệm, đào tạo có lương.</p>
                    </div>
                    <div class="glass-card p-6 rounded-3xl hover:-translate-y-2 transition duration-300 mt-8">
                        <div class="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl mb-4"><i class="fa-solid fa-rocket"></i></div>
                        <h3 class="font-bold text-slate-800 text-lg mb-1">Thăng tiến</h3>
                        <p class="text-sm text-slate-500">Lộ trình lên Leader, Manager rõ ràng.</p>
                    </div>
                </div>
            </div>
            <div class="order-1 md:order-2 animate-fade-up">
                <span class="text-purple-600 font-bold tracking-wider text-sm uppercase mb-2 block">Về chúng tôi</span>
                <h2 class="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900 leading-tight">Nơi Bạn Được Là Chính Mình</h2>
                <p class="text-slate-600 mb-8 leading-relaxed text-lg">
                    Tại BELLSYSTEM24, chúng tôi không chỉ tuyển nhân viên, chúng tôi tìm kiếm đồng đội. Đây là nơi bạn rèn luyện kỹ năng giao tiếp, nghiệp vụ tài chính và tư duy dịch vụ chuyên nghiệp.
                </p>
                <ul class="space-y-4">
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-circle-check text-green-500"></i>
                        <span class="font-medium text-slate-700">Chấp nhận sinh viên năm cuối, chờ bằng.</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-circle-check text-green-500"></i>
                        <span class="font-medium text-slate-700">Văn phòng hiện đại, Pantry ngập tràn đồ ăn.</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-circle-check text-green-500"></i>
                        <span class="font-medium text-slate-700">Teambuilding, Year End Party cực "cháy".</span>
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

        <!-- Search & Filter Bar -->
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
            <button onclick="handleSearch()" class="btn-primary rounded-xl px-8 py-3 font-bold md:w-auto w-full">
                Tìm Ngay
            </button>
        </div>

        <!-- Job Grid -->
        <div id="jobGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
            <!-- Cards will be injected here -->
        </div>

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
        <button onclick="router.navigate('jobs')" class="mb-8 flex items-center gap-2 text-slate-500 hover:text-purple-600 transition font-medium group bg-white px-4 py-2 rounded-lg shadow-sm">
            <i class="fa-solid fa-arrow-left group-hover:-translate-x-1 transition"></i> Quay lại danh sách
        </button>
        
        <div class="bg-white rounded-[2.5rem] shadow-2xl shadow-purple-100/50 overflow-hidden border border-slate-100 relative">
            
            <!-- Header -->
            <div class="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 text-white relative overflow-hidden">
                <div class="absolute right-0 top-0 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-3 mb-6">
                        <span class="bg-white/10 backdrop-blur border border-white/20 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2">
                            <i class="fa-solid ${job.logo}"></i> ${job.bank}
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
                    <!-- Section -->
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

// --- CORE LOGIC: ROUTER & RENDER ---

const createJobCard = (job) => {
    const tagClass = job.type === 'Full-time' ? 'bg-blue-100 text-blue-700' : (job.type === 'Intern' ? 'bg-green-100 text-green-700' : 'bg-pink-100 text-pink-700');
    
    return `
        <div class="job-card bg-white rounded-[1.5rem] p-6 cursor-pointer group flex flex-col h-full relative overflow-hidden border border-slate-100 shadow-sm" onclick="router.navigate('detail', '${job.id}')">
            <!-- Hover Effect -->
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            
            <div class="flex justify-between items-start mb-5">
                <div class="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl ${job.color} group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition duration-300 shadow-sm">
                    <i class="fa-solid ${job.logo}"></i>
                </div>
                <span class="px-3 py-1 rounded-lg text-xs font-bold uppercase ${tagClass}">${job.type}</span>
            </div>
            
            <div class="mb-4">
                <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1"><i class="fa-solid fa-building"></i> ${job.bank}</p>
                <h3 class="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition line-clamp-2 min-h-[3.5rem] leading-snug">${job.title}</h3>
            </div>

            <div class="mt-auto pt-4 border-t border-slate-100 space-y-3">
                <div class="flex items-center gap-2 text-sm text-slate-600">
                    <i class="fa-solid fa-wallet text-slate-400 w-5"></i>
                    <span class="font-bold text-slate-900">${job.salary}</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-slate-500">
                    <i class="fa-solid fa-location-dot text-slate-400 w-5"></i>
                    <span class="line-clamp-1">${job.location}</span>
                </div>
            </div>
        </div>
    `;
}

const handleSearch = () => {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const bank = document.getElementById('bankFilter').value;
    
    const filtered = jobsData.filter(job => {
        const matchKeyword = job.title.toLowerCase().includes(keyword) || 
                           job.bank.toLowerCase().includes(keyword) ||
                           job.type.toLowerCase().includes(keyword);
        const matchBank = bank === 'all' || job.bank === bank;
        return matchKeyword && matchBank;
    });

    const grid = document.getElementById('jobGrid');
    const noRes = document.getElementById('noResults');

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noRes.classList.remove('hidden');
    } else {
        noRes.classList.add('hidden');
        grid.innerHTML = filtered.map(createJobCard).join('');
        
        // Animation Stagger
        document.querySelectorAll('.job-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.animation = `fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards ${index * 0.05}s`;
        });
    }
}

const app = document.getElementById('app');

const router = {
    navigate: (page, param = null) => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        
        if (page === 'home') {
            app.innerHTML = HomeView();
            if(param === 'about') {
                setTimeout(() => {
                    const section = document.getElementById('about');
                    if(section) section.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else if (page === 'jobs') {
            app.innerHTML = JobsView();
            handleSearch(); 
            
            document.getElementById('searchInput').addEventListener('input', handleSearch);
            document.getElementById('bankFilter').addEventListener('change', handleSearch);
        } else if (page === 'detail') {
            const job = jobsData.find(j => j.id === param);
            if (job) {
                app.innerHTML = JobDetailView(job);
            }
        }
    }
};

// Init App
document.addEventListener('DOMContentLoaded', () => {
    router.navigate('home');
});