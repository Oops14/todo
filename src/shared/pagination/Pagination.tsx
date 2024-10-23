"use client";

import { useRouter } from "next/navigation";

interface PaginationProps {
  currentPage?: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage = 0, totalPages }) => {
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    router.push(`/todos/?page=${newPage}`);
  };

  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index} disabled={currentPage === index} onClick={() => handlePageChange(index)}>
          {index}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
