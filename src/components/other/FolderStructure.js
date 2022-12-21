import { FileCopyOutlined, FolderSpecial } from "@mui/icons-material"
import { Table } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"

const FolderStructure = () => {
    const [data, setData] = useState([])

    const getArchiveData = (path) => {
        axios({
            method: 'post',
            url: `https://proflow.at/rest/api/archiveView/loadFileExplorer`,
            data: {
                library: "f61177b3-0034-4263-815e-3c42956fcece",
                actualPath: path
            },
            headers: {
                Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0NUdUMVZqdXBRdzlZMXV4UDZELXVCUGQ4WnZOeDVveUI4MHJJUkZNc00wIn0.eyJleHAiOjE2NzE2NTk2MDcsImlhdCI6MTY3MTYyMzYwNywianRpIjoiZDkyM2U3ZDUtYzQyNi00NTY0LWJhOWYtZTIxZTZlOWYwNzMyIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmtleWNsb2FrLnN2Yy5jbHVzdGVyLmxvY2FsOjgwODAvYXV0aC9yZWFsbXMvUHJvZmxvdyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI3ZTI1Zjk1NC0xM2I2LTRjYTctODcxNi03OTNkNzIyZmMxN2QiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwcm9mbG93LmF0Iiwic2Vzc2lvbl9zdGF0ZSI6IjM5YWUyNTRhLTk0ZTYtNDJjNC1iN2MwLWE3YzMxNGRjYzRlMyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly93d3cucHJvZmxvdy5hdCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1wcm9mbG93Iiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiIzOWFlMjU0YS05NGU2LTQyYzQtYjdjMC1hN2MzMTRkY2M0ZTMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiJtdWhhbW1hZC5haXphekBwcm9mbG93LmF0IiwibmFtZSI6Im11aGFtbWFkLmFpemF6QHByb2Zsb3cuYXQgbXVoYW1tYWQuYWl6YXpAcHJvZmxvdy5hdCIsInByZWZlcnJlZF91c2VybmFtZSI6Im11aGFtbWFkLmFpemF6QHByb2Zsb3cuYXQiLCJnaXZlbl9uYW1lIjoibXVoYW1tYWQuYWl6YXpAcHJvZmxvdy5hdCIsImZhbWlseV9uYW1lIjoibXVoYW1tYWQuYWl6YXpAcHJvZmxvdy5hdCIsImVtYWlsIjoibXVoYW1tYWQuYWl6YXpAcHJvZmxvdy5hdCIsIm8iOlsiQ09NUEFOWTpQcm9mbG93IEdtYkgiLCJDT01QQU5ZSUQ6NjM3MzY0OTYxZjFmZGUwMDAxNzhlZTZmIiwiUE9MSUNZSUQ6NTQ2ZjQ4NTUtM2M3My00NzFiLTllMzYtYzRjMjc5ZWVkNTFjIl19.fKIwmcfvrIwkb4HxxGoL48K5GdDdZwq0e87DWLNFJn082MLLsKvVEZM9znzo-8d9arLWVFBTMhxSPde3EZXgim4d4-plAlgdr1zIvK-ZGyabG_wZQ3wRqqQ35F-9t4mY0bkGrTi0q7D4VtU4Zk0vgKHfD5kp_RjVe9zw2EeXgjwwKv25wnZgS6nYdmyjIHYzPTIEK3YNSAy0eOkcz8ECDhADFh2WQuBnjX6L4MJaECTfcDUqfxue-kszMlF1LWYZuVBROsNwA2EwYx2-qU3P_hA9knrAOCAFEhzwwiiSSWYWoc6MoisdAeYpJW4qD_k2oz1uHT6g5DrABTFFWJwj8A`,
            }
        }).then(response => {
            // console.log("response: ", response?.data)
            setData(response?.data)
        }).catch(error => {
        })
    }

    useEffect(() => {
        getArchiveData("/")
    }, [])

    const columns = [
        {
            dataIndex: "show",
            render: (text, record) => text === "folder" ?
                <FolderSpecial
                    style={{ cursor: "pointer" }}
                    onClick={() => getArchiveData(record.path)}
                /> :
                <FileCopyOutlined />
        },
        {
            title: "Term",
            dataIndex: "term",
        }
    ]

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default FolderStructure
