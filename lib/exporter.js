import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { Document, Packer, Paragraph, Table as DocxTable, TableCell, TableRow, WidthType } from 'docx';

export function exportToExcel(table, filename = 'sdkk') {
  // 1. Lấy dữ liệu hiện tại từ bảng (đã áp dụng bộ lọc search/filter nếu có)
  const rows = table.getFilteredRowModel().rows;
  
  // 2. Chuyển đổi dữ liệu thành mảng Object phẳng chứa key-value sạch
  const excelData = rows.map((row) => {
    const original = row.original;
    
    // Ví dụ cấu trúc mapping theo cột của bạn (Thay đổi key/value cho đúng với data của bạn)
    return {
      'Ngày Tháng': original.date || '',
      'Số Đặc Biệt': original.specialNumber || original['number-DB'] || '',
      'Giải Lô Tô': Array.isArray(original.lotoPrize) ? original.lotoPrize.join(', ') : original.lotoPrize || '',
      // 'Tên Cột Excel': original.ten_thuoc_tinh_goc_tu_api
    };
  });

  // 3. Tạo Worksheet và Workbook để xuất file
  const worksheet = XLSX.utils.json_to_sheet(excelData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Data_Sheet');

  // 4. Build buffer và kích hoạt download bằng file-saver
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  
  saveAs(dataBlob, `${filename}_${new Date().getTime()}.xlsx`);
}


export async function exportToDocx(table, filename = 'datatable_export') {
  const rows = table.getFilteredRowModel().rows;

  // 1. Tạo hàng tiêu đề (Header Row) cho bảng trong file Word
  const headerRow = new TableRow({
    children: [
      new TableCell({ children: [new Paragraph({ text: 'Ngày Tháng', bold: true })] }),
      new TableCell({ children: [new Paragraph({ text: 'Số Đặc Biệt', bold: true })] }),
      new TableCell({ children: [new Paragraph({ text: 'Giải Lô Tô', bold: true })] }),
    ],
  });

  // 2. Map các dòng dữ liệu thành các TableRow của thư viện docx
  const dataRows = rows.map((row) => {
    const original = row.original;
    return new TableRow({
      children: [
        new TableCell({ children: [new Paragraph(original.date || '')] }),
        new TableCell({ children: [new Paragraph(original.specialNumber || original['number-DB'] || '')] }),
        new TableCell({ children: [new Paragraph(String(original.lotoPrize || ''))] }),
      ],
    });
  });

  // 3. Tạo cấu trúc Document Word hoàn chỉnh
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({ text: 'BÁO CÁO THỐNG KÊ DỮ LIỆU', heading: 'Heading1', spacing: { after: 200 } }),
          new DocxTable({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [headerRow, ...dataRows], // Gộp header và data lại
          }),
        ],
      },
    ],
  });

  // 4. Đóng gói và trigger download
  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${filename}_${new Date().getTime()}.docx`);
}