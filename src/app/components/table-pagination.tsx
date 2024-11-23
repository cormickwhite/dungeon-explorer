"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

import { PER_PAGE } from "../lib/data";

export default function TablePagination(props: { totalCount: number }) {
  const { totalCount } = props;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) ?? 1
  );

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    params.set("page", currentPage.toString());

    replace(`${pathname}?${params.toString()}`);
  }, [currentPage]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ padding: 2 }}
    >
      <Grid item>
        <Pagination
          count={Math.ceil(totalCount / PER_PAGE)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Grid>
    </Grid>
  );
}
