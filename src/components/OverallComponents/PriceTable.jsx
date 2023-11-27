import React from 'react'
import HalfRadialGraph from '@/components/CustomGraphs/HalfRadialGraph'
import Dropdown from "@/components/ui/Dropdown";
import { Menu } from "@headlessui/react";
import Icon from "@/components/ui/Icon";

const PriceTable = () => {
  let dataTemp = [
    { name: "Alpha Dhabi", high: 20.9, low: 17.6, mid: 17.6},
    { name: "FAB", high: 13.9, low: 12.8, mid: 13.0 },
    { name: "IHC", high: 10.0, low: 8.5, mid: 9.0 },
    { name: "Multiply", high: 4.1, low: 3.2, mid: 3.2 },
    { name: "Burjeel", high: 3.1, low: 2.4, mid: 2.5 },
    { name: "Q", high: 3.7, low: 2.8, mid: 3.0 },
  ]

  const actions = [
    {
      name: "view",
      icon: "heroicons-outline:eye",
    },
    {
      name: "edit",
      icon: "heroicons:pencil-square",
    },
    {
      name: "delete",
      icon: "heroicons-outline:trash",
    },
  ];
  return (
    <>
    {
      dataTemp.map((item, index) => {
        return (
          <>
          <div className='flex justify-between items-center px-10'>
            <div className="text-sm text-left">{item.name}</div>
            <div className='flex'>
              <HalfRadialGraph high={item.high} low={item.low} mid={item.mid} />
            </div>
          </div>
            {
              index !== dataTemp.length - 1 && <hr className="border-gray-300" />
            }
          </>
        )
      })
    }
    </>
  )
}

export default PriceTable