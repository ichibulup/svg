

export const generateDynamicMonths = (count = 18) => {
  const list = [];
  const currentDate = new Date();

  for (let i = 0; i < count; i++) {
    const d = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const monthNum = d.getMonth() + 1; // getMonth() chạy từ 0-11
    const yearNum = d.getFullYear();

    // key đồng bộ hệ thống để map dữ liệu (Ví dụ: "thang_01_2026")
    const key = `thang_${String(monthNum).padStart(2, "0")}_${yearNum}`;

    // CHÍNH XÁC THEO ẢNH: Nếu là tháng 1 thì ghi kèm năm "1-YYYY", ngược lại các tháng khác chỉ ghi số tháng.
    const label = monthNum === 1 ? `1-${yearNum}` : `${monthNum}`;

    list.push({ key, label });
  }

  // Đảo ngược mảng để tháng hiện tại nằm cuối cùng bên phải như ảnh mẫu của bạn
  return list.reverse();
};

// 1. Hàm phụ trợ sinh số ngẫu nhiên 5 chữ số định dạng chuỗi (VD: "05164", "90148")
// Riêng một số ngày Tết có thể trả về chữ "TẾT" như trong ảnh mẫu của bạn
const generateMockLotteryNumber = (day, month) => {
  // Giả lập một vài ngày Tết ở tháng 2 (ví dụ từ ngày 16 đến 19 tháng 2 năm cũ) để giống ảnh mẫu
  if (month === 2 && day >= 16 && day <= 19) {
    return "TẾT";
  }
  return String(Math.floor(10000 + Math.random() * 90000));
};

// 2. Hàm kiểm tra xem một ngày (1-31) có hợp lệ trong tháng/năm đó hay không
const isValidDay = (day, month, year) => {
  // getMonth() trong JS truyền vào month-1, ngày truyền vào 0 nghĩa là ngày cuối cùng của tháng trước.
  // Nhưng truyền thẳng năm, month-1, day và check ngược lại d.getDate() là cách kiểm tra tràn ngày chuẩn nhất.
  const d = new Date(year, month - 1, day);
  return d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day;
};

// 3. Hàm chính sinh ra dữ liệu mẫu gồm 31 dòng cho DataTable
export const generateDataTableMockData = () => {
  const data = [];
  const currentDate = new Date();
  
  // Tạo lại danh sách 18 tháng (phục vụ việc lấy key để sinh data chuẩn theo cột)
  const dynamicMonths = [];
  for (let i = 0; i < 18; i++) {
    const d = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    dynamicMonths.push({
      monthNum: d.getMonth() + 1,
      yearNum: d.getFullYear(),
      key: `thang_${String(d.getMonth() + 1).padStart(2, "0")}_${d.getFullYear()}`
    });
  }
  // Đảo ngược để khớp thứ tự cột từ trái qua phải
  dynamicMonths.reverse();

  // Vòng lặp tạo đúng 31 dòng (tương ứng từ ngày 1 đến ngày 31)
  for (let day = 1; day <= 31; day++) {
    // Khởi tạo object cho dòng hiện tại
    const rowItem = {
      id: `row-${day}`,
      first_month: day, // Hiển thị số ngày ở cột đầu tiên
      last_month: day,  // Hiển thị số ngày ở cột cuối cùng
    };

    // Điền dữ liệu cho từng cột tháng (18 tháng)
    dynamicMonths.forEach((m) => {
      if (isValidDay(day, m.monthNum, m.yearNum)) {
        // Nếu ngày đó tồn tại trong tháng (Ví dụ: ngày 30/04 hợp lệ)
        rowItem[m.key] = generateMockLotteryNumber(day, m.monthNum);
      } else {
        // Nếu ngày đó KHÔNG tồn tại (Ví dụ: ngày 31 tháng 4 hoặc ngày 30 tháng 2) -> Để trống ô
        rowItem[m.key] = "";
      }
    });

    data.push(rowItem);
  }

  return data;
};

// Xuất dữ liệu ra biến để truyền vào DataTable <DataTable data={lotteryMockData} columns={columns} />
export const lotteryMockData = generateDataTableMockData();