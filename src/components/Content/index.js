import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  List,
  Avatar,
  Upload,
  message,
} from 'antd';
import {
  UploadOutlined,
  FileTextOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs'
import { parseDataFrame } from '../DataFrame/index'

import './index.css';

dayjs.locale('zh-tw')

function Content() {
  const [fileList, setFileList] = useState([])
  const [excelFileArr, setExcelFileArr] = useState([])

  // useEffect(() => {
  // })

  const onloadfile = (e) => {
    const textStr = e.target.result
    convertDataArr(textStr)
  }

  const convertDataArr = (textStr) => {
    const textArr = textStr.split(' \r\n')
    let currentIndex = -1
    currentIndex = textArr.indexOf('-- 支出 --')
    if (currentIndex !== -1) {
      // remove
      textArr.splice(currentIndex, 1)
    }
    currentIndex = textArr.indexOf('\r\n\r\n-- 收入 --')
    if (currentIndex !== -1) {
      // remove
      textArr.splice(currentIndex)
    }
    const dataArr = textArr.map((e) => e.split(', '))
    convertExecl(dataArr)
  }

  const convertExecl = (dataArr) => {
    const newExcelFileArr = parseDataFrame(dataArr)

    setExcelFileArr([
      ...newExcelFileArr,
    ])
  }

  const saveToExcel = (toExcel) => {
    toExcel.saveExcel()
  }

  const colLayout = { xs: 24, sm: 12 }

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col {...colLayout}>
          <Card title="上傳檔案">
            <Upload
              customRequest={() => {}}
              fileList={fileList}
              onChange={(info) => {
                const { fileList } = info
                const newFileList = fileList.map((file) => {
                  const fileReader = new FileReader()
                  fileReader.onload = onloadfile
                  fileReader.readAsText(file.originFileObj)
                  file.status = 'success'
                  return file
                })
                setFileList(newFileList)
              }}
            >
              <Button icon={<UploadOutlined />}>檔案上傳</Button>
            </Upload>
            <Button
              onClick={() => {
                setExcelFileArr([])
                setFileList([])
              }}
            >
              清除
            </Button>
          </Card>
        </Col>
        <Col {...colLayout}>
          <Card title="下載轉換檔案">
            <List
              itemLayout="horizontal"
              dataSource={excelFileArr}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<FileTextOutlined />} />}
                    title="記帳紀錄"
                    description={(
                      <div>
                        <Button icon={<DownloadOutlined />} onClick={() => saveToExcel(item.toExcel)}>
                          檔案下載
                        </Button>
                        {' '}
                        <span>日期: {item.representedAt}</span>
                        {' '}
                        <span>總額: {item.total}$</span>
                      </div>
                    )}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Content;
