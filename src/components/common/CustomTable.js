import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { Grid, styled, Typography } from "@mui/material";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    // FilterFn,
    // getFacetedRowModel,
    // getPaginationRowModel,
    // getSortedRowModel,
    // getFilteredRowModel,
    // getFacetedUniqueValues,
    // getFacetedMinMaxValues,
} from "@tanstack/react-table";
import { Box } from "@mui/system";
// import { SmallLoader } from "src/ui/small-loader";
// import { NoContentFound } from "src/ui/no-content-found/no-content-found";
import updown from "../../assets/updown.svg";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Tooltip } from "@mui/material";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#F8FCFF",
        color: "#1A141F",
        textAlign: "center",
        fontFamily: "Poppins",
        fontWeight: "600",
        textTransform: "capitalize",
        fontSize: 14,
        whiteSpace: "nowrap",
        borderBottom: "none",
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: 13,
        color: "#625E66",
        fontFamily: "Poppins",
        fontWeight: "600",
        textAlign: "center",
        borderBottom: "none",
        whiteSpace: "pre",
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
        backgroundColor: "#F8FCFF",
    },

    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));


const CustomTable = (props) => {
    const {
        columns,
        data,
        isLoading,
        isError,
        isSuccess,
        count,
        currentPage,
        setCurrentPage,
        setSortBy,
        setSort,
        res
    } = props;

    const handleSortBy = (column) => {
        setSortBy(column);
        setSort((previous) => (previous === 1 ? -1 : 1));
    };

    const table = useReactTable({
        data: data ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    if (isLoading) return <div>Loading ...</div>;

    return (
        <Grid container>
            <Grid xs={12} item>
                <Paper>
                    <Box sx={{ overflowX: "auto" }}>
                        <TableContainer
                            sx={{
                                "&::-webkit-scrollbar": {
                                    width: 5,
                                    height: 6,
                                },

                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor: "#19456A",
                                    borderRadius: 2,
                                },
                                maxHeight: 440,
                            }}
                        >
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    {table.getHeaderGroups().map((headerGroup) => (
                                        <TableRow key={headerGroup.id}>
                                            {headerGroup.headers.map((header) => (
                                                <StyledTableCell key={header.id}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            gap: "5px",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        {header.isPlaceholder
                                                            ? null
                                                            : flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext()
                                                            )}
                                                        {header.column.columnDef.sorticon ?? (
                                                            <Box
                                                                sx={{ cursor: "pointer" }}
                                                                onClick={() => handleSortBy(header?.id)}
                                                            >
                                                                <img src={updown} alt="" />
                                                            </Box>
                                                        )}
                                                    </Box>
                                                </StyledTableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableHead>

                                {isSuccess && table.getRowModel().rows.length > 0 && (
                                    <TableBody>
                                        {table.getRowModel().rows?.map((row) => (
                                            <StyledTableRow key={row?.id}>
                                                {row.getVisibleCells().map((cell) => (
                                                    <StyledTableCell key={cell?.id}>
                                                        {flexRender(
                                                            cell.column.columnDef.cell,
                                                            cell.getContext()
                                                        )}
                                                    </StyledTableCell>
                                                ))}
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                )}
                            </Table>
                            {(isError || table.getRowModel().rows.length === 0) && (
                                <Grid
                                    container
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    padding={5}
                                >
                                    <Grid item width={200}>
                                        {/* <NoContentFound /> */}
                                        No content found
                                    </Grid>
                                </Grid>
                            )}
                        </TableContainer>
                    </Box>
                    <Grid container>
                        <Grid xs={12} item>
                            {isSuccess && Boolean(table?.getRowModel()?.rows?.length) && (
                                <Box sx={{ display: "flex", my: "15px", px: "25px" }}>
                                    <Box>
                                        <Typography
                                            sx={{
                                                color: "#625E66",
                                                fontSize: "12px",
                                                fontFamily: "Roboto",
                                            }}
                                            component={"span"}
                                        >
                                            Showing "50" of {res?.recordsTotal}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginLeft: "auto" }}>
                                        <Pagination
                                            sx={{
                                                ".Mui-selected": {
                                                    backgroundColor: "#19456A !important",
                                                    color: "#FFFFFF",
                                                },
                                            }}
                                            showFirstButton
                                            showLastButton
                                            hidePrevButton
                                            hideNextButton
                                            size="small"
                                            variant="outlined"
                                            shape="rounded"
                                            count={count}
                                            page={currentPage}
                                            onChange={(e, page) => {
                                                console.log("page: ", page)
                                                setCurrentPage(page);
                                            }}
                                        />
                                    </Box>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default CustomTable;
