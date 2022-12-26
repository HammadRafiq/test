import React, { useMemo, useState } from "react";
import Card from "@mui/material/Card";
import CustomTable from "../components/common/CustomTable";
import { apiGetRequest, apiPostRequest } from "../helpers";
import { endpoints } from "../config/endpoints";
import { useTableData } from "../hooks/useTableData";


const MyTable = () => {

    const columns = React.useMemo(
        () => [
            //Geeting Dynamic Data From Mock Data
            {
                accessorFn: (row) => row.action,
                id: "action",
                cell: (info) => (
                    <div className="tooltipContainerStyle">
                        <div>View</div>
                        <div>Edit</div>
                    </div>
                ),
                header: () => <span>Actions</span>,
            },
            {
                accessorFn: (row) => row.term,
                id: "term",
                cell: (info) => info.getValue(),
                header: () => <div>Term</div>,
            },
            {
                accessorFn: (row) => row.docCount,
                id: "docCount",
                cell: (info) => info.getValue(),
                header: () => <div>Doc Count</div>,
            },
            {
                accessorFn: (row) => row.AdminID,
                id: "AdminID",
                cell: (info) => info.getValue(),
                header: () => <div>A-ID</div>,
            },
            {
                accessorFn: (row) => row.nameInDbsApplication,
                id: "dbs_application",
                cell: (info) => info.getValue(),
                header: () => <div>Name in Application</div>,
            },
            {
                accessorFn: (row) => row.postCode,
                id: "postCode",
                cell: (info) => info?.row?.original?.AddressDetails?.CurrentDetails?.postCode,
                header: () => <div>Postcode</div>,
            },
        ],
        []
    );

    const res = ({ limit, currentPage, ...rest }) => {
        let data = {
            maxResults: limit,
            page: currentPage,
            isOr: 0,
            library: "4c054a0b-714f-49dc-b7ed-204305f4b542",
            tableSearchTerm: "",
            entityType: "COM"
        }
        return apiPostRequest(
            endpoints.getTableData,
            data
        )
    }

    const querydata = useMemo(() => {
        return {
            key: "mytable",
            apiFunc: res,
        }
    }, [])

    const {
        data,
        isError,
        isSuccess,
        isLoading,
        // refetch,
        limit,
        filter,
        currentPage,
        setFilter,
        setCurrentPage,
        setLimit,
        setSortBy,
        setSort,
    } = useTableData(querydata)


    return (
        <Card>
            <CustomTable
                res={data?.data}
                data={data?.data?.data}
                columns={columns}
                isLoading={isLoading}
                isError={isError}
                isSuccess={isSuccess}
                count={Math.ceil(data?.data?.recordsTotal / limit)}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setSortBy={setSortBy}
                setSort={setSort}
            />
        </Card>
    );
};

export default MyTable
