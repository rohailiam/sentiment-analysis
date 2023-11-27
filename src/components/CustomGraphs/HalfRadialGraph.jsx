import React from "react";
import Chart from "react-apexcharts";
import Icon from "@/components/ui/Icon";
import Dropdown from "@/components/ui/Dropdown";
import { Menu } from "@headlessui/react";

const HalfRadialGraph = ({ low = 0, high = 0, mid = 0 }) => {
    const series = [mid];

    const options = {
        chart: {
            height: 390,
            width: 10,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: -20,
                startAngle: -90,
                endAngle: 90,
                hollow: {
                    margin: 0,
                    size: '45%',
                    background: 'transparent',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
    }

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
        <div className="flex relative max-w-max content-center max-h-max">
            <div className="text-left flex flex-col max-h-max justify-center">
                <div>Low</div>
                <span>{low}</span>
            </div>
            <Chart
                options={options}
                series={series}
                type="radialBar"
                height={170}
                width={120}
            />
            <div className="text-right flex flex-col max-h-max justify-center">
                <div>High</div>
                <span>{high}</span>
            </div>
            <span className="absolute left-1/2 bottom-6 translate-x-[-50%]">{mid}</span>
        </div>
    )
}

export default HalfRadialGraph