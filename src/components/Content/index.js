import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  List,
  Avatar,
  Upload,
  Radio,
  message,
} from 'antd';
import {
  UploadOutlined,
  FileTextOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs'
import { parseDataFrame } from '../DataFrame/index'
import exampleCSV from './Ahorro_Export_Data_20210601.csv'

import './index.css';

dayjs.locale('zh-tw')

function Content() {
  const [fileList, setFileList] = useState([])
  const [excelFileArr, setExcelFileArr] = useState([])
  const [fileStyle, setFileStyle] = useState('life')

  // useEffect(() => {
  // })

  const onloadfile = (e) => {
    const textStr = e.target.result
    convertDataArr(textStr)
  }

  const convertDataArr = (textStr) => {
    let splitKey = ''
    let arrayKay = ''
    if (textStr.indexOf(' \r\n') !== -1) {
      splitKey = ' \r\n'
      arrayKay = '\r\n\r\n-- 收入 --'
    } else {
      splitKey = ' \n'
      arrayKay = '\n\n-- 收入 --'
    }

    const textArr = textStr.split(splitKey)
    let currentIndex = -1
    currentIndex = textArr.indexOf('-- 支出 --')
    if (currentIndex !== -1) {
      // remove
      textArr.splice(currentIndex, 1)
    }
    currentIndex = textArr.indexOf(arrayKay)
    if (currentIndex !== -1) {
      // remove
      textArr.splice(currentIndex)
    }
    const dataArr = textArr.map((e) => e.split(', '))
    convertExecl(dataArr)
  }

  const convertExecl = (dataArr) => {
    const newExcelFileArr = parseDataFrame(dataArr)
    console.log('newExcelFileArr', newExcelFileArr)

    setExcelFileArr([
      ...newExcelFileArr,
    ])
  }

  const saveToExcel = (toExcel) => {
    toExcel.saveExcel()
  }

  const onRadioChange = e => {
    setExcelFileArr([])
    setFileList([])
    setFileStyle(e.target.value)
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
              清除轉換檔案
            </Button>
            {/* <img src='/ledger-file-transform/test.jpg' /> */}
            <a href={exampleCSV} download="Ahorro_Export_Data_20210601.csv">
              <Button style={{ margin: '10px' }}>
                Download example
              </Button>
            </a>
            <br />
            <Radio.Group onChange={onRadioChange} value={fileStyle}>
              <Radio value="default" disabled>預設</Radio>
              <Radio value="life">區分生活費、餐飲費</Radio>
            </Radio.Group>
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
