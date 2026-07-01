"use client";

import Image from "next/image";
import { Button } from "gorth-base-primitive/custom/button";
import { Checkbox } from "gorth-base-primitive/default/checkbox";
import { Switch } from "gorth-base-primitive/default/switch";
import { Download } from "gorth-base-primitive/cores/lucide";
import { TData } from "gorth-base-primitive/cores/tanstack/table";
import {
  DataTable,
  DataTableSortButton,
} from "gorth-base-primitive/custom/data-table";
import { exportToExcel, exportToDocx } from "@/lib/exporter";

export function DataTableToolbar({ table }) {
  return (
    <div className="flex items-center justify-between gap-2">
      {/* Các bộ lọc tìm kiếm hiện tại của bạn... */}

      {/* Nhóm nút Export file */}
      <div className="flex items-center gap-2 ml-auto">
        <Button
          variant="outline"
          size="sm"
          onClick={() => exportToExcel(table, "thong_ke_xo_so")}
        >
          <Download className="mr-2 h-4 w-4" />
          Xuất Excel (.xlsx)
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => exportToDocx(table, "thong_ke_xo_so")}
        >
          <Download className="mr-2 h-4 w-4" />
          Xuất Word (.docx)
        </Button>
      </div>
    </div>
  );
}

export default function Page() {
  const generateDynamicMonths = (count = 18) => {
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

  const months = generateDynamicMonths(18)
  // const months = [
  //   { key: "january", label: "1" },
  //   { key: "february", label: "2" },
  //   { key: "march", label: "3" },
  //   { key: "april", label: "4" },
  //   { key: "may", label: "5" },
  //   { key: "june", label: "6" },
  //   { key: "july", label: "7" },
  //   { key: "august", label: "8" },
  //   { key: "september", label: "9" },
  //   { key: "october", label: "10" },
  //   { key: "november", label: "11" },
  //   { key: "december", label: "12" },
  // ]; // 18

  const columns = [
    // {
    //   id: "select",
    //   header: ({ table }) => (
    //     <Checkbox
    //       className="w-4.5 h-4.5 ml-2"
    //       checked={
    //         table.getIsAllPageRowsSelected() ||
    //         (table.getIsSomePageRowsSelected() && "indeterminate")
    //       }
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       className="w-4.5 h-4.5 ml-2"
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    //   size: 50,
    // },
    // {
    //   accessorKey: "month",
    //   header: ({ column }) => (
    //     <DataTableSortButton column={column} title="Month" />
    //   ),
    //   cell: ({ row }) => {
    //     return (
    //       <div className="flex items-center gap-3">
    //         <div className="shrink-0">
    //           {row.original.image_url ? (
    //             <Image
    //               className="h-9 w-9 rounded-md object-cover"
    //               src={row.original.image_url}
    //               alt="avatar"
    //               width={36}
    //               height={36}
    //             />
    //           ) : (
    //             <div className="h-9 w-9 rounded-md bg-accent flex items-center justify-center">
    //               <span className="text-sm font-medium text-primary">CY</span>
    //             </div>
    //           )}
    //         </div>
    //         <div className="min-w-0 flex-1">
    //           <div className="truncate font-medium text-sm">
    //             {row.original.name}
    //           </div>
    //           <div className="truncate text-xs text-muted-foreground">
    //             {row.original.description}
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   },
    //   size: 120,
    // },
    
    {
      accessorKey: "first_month",
      header: ({ column }) => (
        <div className="text-center font-semibold">*</div>
      ),
      cell: ({ row }) => (
        <div className="text-center font-semibold">{row}</div>
      ),
      size: 64,
    },
    ...months.map((month) => ({
      accessorKey: month.key,
      header: () => (
        <div className="text-center font-semibold">{month.label}</div>
      ),
      cell: ({ row }) => {
        // Lưu ý: Đoạn này đang lấy trạng thái switch động theo từng tháng,
        // ví dụ: row.original.january hoặc row.original.february dưới dạng boolean.
        // Nếu data của bạn lưu trạng thái tất cả các tháng chung một biến `is_active`, hãy đổi lại thành row.original.is_active
        const isMonthActive = !!row.original[month.key];

        return (
          <div className="flex items-center justify-center">
            <Switch
              checked={isMonthActive}
              onCheckedChange={(checked) =>
                handleToggleStatus(row.original.id, month.key, checked)
              }
              disabled={isUpdating}
            />
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      size: 70,
    })),
    // {
    //   accessorKey: "month",
    //   header: ({ column }) => (
    //     <DataTableSortButton column={column} title="Month" />
    //   ),
    //   cell: ({ row }) => {
    //     return (
    //       <div className="flex items-center gap-3">
    //         {/* <div className="shrink-0">
    //           {row.original.image_url ? (
    //             <Image
    //               className="h-9 w-9 rounded-md object-cover"
    //               src={row.original.image_url}
    //               alt="avatar"
    //               width={36}
    //               height={36}
    //             />
    //           ) : (
    //             <div className="h-9 w-9 rounded-md bg-accent flex items-center justify-center">
    //               <span className="text-sm font-medium text-primary">CY</span>
    //             </div>
    //           )}
    //         </div>
    //         <div className="min-w-0 flex-1">
    //           <div className="truncate font-medium text-sm">
    //             {row.original.name}
    //           </div>
    //           <div className="truncate text-xs text-muted-foreground">
    //             {row.original.description}
    //           </div>
    //         </div> */}
    //       </div>
    //     );
    //   },
    //   size: 120,
    // },
    {
      accessorKey: "last_month",
      header: ({ column }) => (
        <div className="text-center font-semibold">*</div>
      ),
      cell: ({ row }) => (
        <div className="text-center font-semibold">{row}</div>
      ),
      size: 64,
    },
  ];

  return (
    <div>
      Japtor
      <DataTable
        columns={columns}
        data={[]}
        search={{
          column: "first_month",
          placeholder: "Search...",
        }}
        // max="month"
        filter={[]}
        onCreate={() => {}}
        onReload={() => {}}
      />
      {/* <DataTable
        columns={""}
        data=""
        search=""
        filter={[
          
        ]}
        max=""
        onReload={() => {}}
        onDownload={() => {}}
        onCreate={() => {}}
        onUpdate={() => {}}
        onChange={() => {}}
      /> */}
    </div>
  );
}
