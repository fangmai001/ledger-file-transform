import React, { Component } from 'react';
import DataFrame from 'dataframe-js';
import dayjs from 'dayjs'
import ExportJsonExcel from 'js-export-excel'

dayjs.locale('zh-tw')

const excelPackage = (sheetData, sheetHeader, representedAt) => {
  const df = new DataFrame(
    sheetData,
    sheetHeader,
  ).map((row) => row.set('金額', parseFloat(row.get('金額'))))

  // "日期", "帳戶", "帳戶貨幣", "類別", "金額", "描述"
  const foodDF = new DataFrame(
    [
      ['', '', '', '早餐', df.where(row => row.get('類別') === '早餐').stat.sum('金額'), ''],
      ['', '', '', '午餐', df.where(row => row.get('類別') === '午餐').stat.sum('金額'), ''],
      ['', '', '', '晚餐', df.where(row => row.get('類別') === '晚餐').stat.sum('金額'), ''],
    ],
    sheetHeader,
  )
  const lifeDF = df.where(row => {
    return (row.get('帳戶') === '生活費') && (row.get('類別') !== '早餐') && (row.get('類別') !== '午餐') && (row.get('類別') !== '晚餐')
  })
  const nonLifeDF = df.where(row => row.get('帳戶') === '非生活費')

  const toExcel = new ExportJsonExcel({
    fileName: `ledger_${representedAt}`,
    datas: [
      {
        sheetData: foodDF.toArray(),
        sheetHeader,
        sheetName: '餐飲費',
      },
      {
        sheetData: lifeDF.toArray(),
        sheetHeader,
        sheetName: '生活費',
      },
      {
        sheetData: nonLifeDF.toArray(),
        sheetHeader,
        sheetName: '非生活費',
      },
      {
        sheetData: df.toArray(),
        sheetHeader,
        sheetName: '全部',
      },
    ]
  })

  return toExcel
}

const dataFrameTotle = (sheetData, sheetHeader) => {
  // "日期", "帳戶", "帳戶貨幣", "類別", "金額", "描述"
  const df = new DataFrame(
    sheetData,
    sheetHeader,
  )

  return df.stat.sum('金額')
}

export const parseDataFrame = (inputData) => {
  const headerArr = inputData[0]
  const dataArr = inputData.slice(1)
  const df = new DataFrame(
    dataArr,
    headerArr,
  )
  const dfSize = df.count()
  
  const splitExcel = []
  const splitData = [
    {
      date: dayjs(df.getRow(0).get('日期')),
      source: [df.getRow(0).toArray()],
    },
  ]

  df.sortBy('日期').map((row, index) => {
    const currentDate = dayjs(row.get('日期'))
    const dataIndex = splitData.findIndex((e) => e.date.month() === currentDate.month())

    if (dataIndex === -1 || (index + 1) === dfSize) {
      const lastData = splitData[(splitData.length - 1)]
      const representedAt = lastData.date.startOf('month').format('YYYY-MM')

      splitExcel.push({
        toExcel: excelPackage(lastData.source, headerArr, representedAt),
        representedAt,
        total: dataFrameTotle(lastData.source, headerArr),
      })

      splitData.push({
        date: currentDate,
        source: [row.toArray()],
      })
    } else {
      splitData[dataIndex].source.push(row.toArray())
    }
  })

  return splitExcel.reverse()
}
