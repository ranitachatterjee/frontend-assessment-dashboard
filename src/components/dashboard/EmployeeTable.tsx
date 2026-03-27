 

import { useState } from "react";
import { Search, Pencil, Trash2, Eye } from "lucide-react";
import Dropdown from "../ui/Dropdown";

type Row = {
  id: number;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  status: string;

  assigned: "Assigned" | "Pending" | "Contacted";
  conversion: "Converted" | "Non Converted";

  converted: boolean;
  followUp: boolean;
  callDuration: number;
};

const EmployeeTable = ({ data, darkMode }: { data: Row[]; darkMode: boolean }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  //  FILTER
  const filtered = data.filter((row) =>
    Object.values(row).some((val) =>
      val.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  //  PAGINATION
  const totalPages = Math.ceil(filtered.length / rowsPerPage);

  const paginatedData = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  //  SMART PAGINATION
  const getPageNumbers = () => {
    const pages = [];

    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, page + 2);

    if (page <= 3) {
      start = 1;
      end = Math.min(5, totalPages);
    }

    if (page >= totalPages - 2) {
      start = Math.max(1, totalPages - 4);
      end = totalPages;
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div  className={`
    ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-900 border-gray-200"}
    rounded-lg shadow-sm border flex flex-col gap-4 w-full overflow-hidden transition-colors
  `}>
      
      {/* HEADER */}
      <div  className={`flex justify-between items-center p-4 border-b ${
    darkMode ? "border-gray-600" : "border-gray-200"
  }`}>
        <h3 className="text-lg font-semibold">Employee Overview</h3>
        <Dropdown darkMode={darkMode} />
      </div>

      {/* SEARCH */}
      <div className="px-4 flex justify-end">
        <div  className={`flex items-center gap-2 border rounded-lg px-3 py-2 ${
    darkMode ? "border-gray-500 bg-gray-800" : "border-gray-300 bg-white"
  }`}>
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Anything"
            className={`outline-none text-sm w-full bg-transparent ${
    darkMode ? "text-white placeholder-gray-400" : "text-gray-900"
  }`}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="px-4">
        <div className="w-full overflow-x-auto border rounded-lg">
          
          {/* vertical scroll */}
          <div className="max-h-[320px] overflow-y-auto">
            
            {/*  FIXED TABLE */}
            <table className="w-full table-auto text-sm">
              
              {/* HEAD */}
              <thead  className={`sticky top-0 ${
    darkMode ? "bg-gray-600 text-white" : "bg-gray-100 text-gray-900"
  }`}>
                <tr className="text-left">
                  <th className="p-3 font-semibold">Sl. No.</th>
                  <th className="p-3 font-semibold">Name</th>
                  <th className="p-3 font-semibold">Phone Number</th>
                  <th className="p-3 font-semibold">Email</th>
                  <th className="p-3 font-semibold">Date</th>
                  <th className="p-3 font-semibold">Time</th>
                  <th className="p-3 font-semibold">Lead Status</th>
                  <th className="p-3 font-semibold">Assigned</th>
                  <th className="p-3 font-semibold">Conversion</th>

                  {/*  prevent extra spacing */}
                  <th className="p-3 font-semibold w-[1%] whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
  {paginatedData.length > 0 ? (
    paginatedData.map((row) => (
      <tr key={row.id}  className={`border-b ${
    darkMode
      ? "border-gray-600 hover:bg-gray-600"
      : "border-gray-200 hover:bg-gray-50"
  }`}>
        
        <td className="p-3">{row.id}</td>
        <td className="p-3">{row.name}</td>
        <td className="p-3">{row.phone}</td>
        <td className="p-3">{row.email}</td>
        <td className="p-3">{row.date}</td>
        <td className="p-3">{row.time}</td>
        <td className="p-3">{row.status}</td>
        <td className="p-3">{row.assigned}</td>
        <td className="p-3">{row.conversion}</td>

        <td className="p-3 flex gap-2 whitespace-nowrap">
          <Eye size={16} className="text-blue-500 cursor-pointer" />
          <Pencil size={16} className="text-yellow-500 cursor-pointer" />
          <Trash2 size={16} className="text-red-500 cursor-pointer" />
        </td>

      </tr>
    ))
  ) : (
    <tr>
      <td
        colSpan={10}
        className="text-center py-10 text-gray-500 font-medium"
      >
        No data found
      </td>
    </tr>
  )}
</tbody>
            </table>
          </div>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center pb-4">
        <div className="flex items-center gap-2">
          
          {/* PREV */}
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            {"<"}
          </button>

          {/* PAGES */}
          {getPageNumbers().map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-8 h-8 rounded border ${
                page === p
                  ? "bg-blue-900 text-white"
                  : "bg-white text-blue-900"
              }`}
            >
              {p}
            </button>
          ))}

          {/* ... */}
          {page < totalPages - 2 && <span>...</span>}

          {/* LAST */}
          {totalPages > 5 && page < totalPages - 2 && (
            <button
              onClick={() => setPage(totalPages)}
              className="w-8 h-8 border rounded"
            >
              {totalPages}
            </button>
          )}

          {/* NEXT */}
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            {">"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;