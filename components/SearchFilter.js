import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import { filterData, getFilterValues } from "../utils/filterData";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SearchFilter = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });
    router.push({ pathname: path, query });
  };
  return (
    <div className='flex justify-center items-center bg-gray-200 pb-4 rounded-b-2xl flex-wrap'>
      {filters.map((filter) => (
        <div key={filter.queryName} className='min-w-[160px] p-1'>
          <FormControl fullWidth size='small'>
            <InputLabel>{filter.placeholder}</InputLabel>
            <Select
              label={filter.placeholder}
              autoWidth
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              {filter?.items?.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      ))}
    </div>
  );
};

export default SearchFilter;
