import React, { useState } from 'react';
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Select, { components } from 'react-select';
import { newsSources } from '@/constant/data';
import Flatpickr from "react-flatpickr";
import PriceTable from '@/components/OverallComponents/PriceTable';
import Icon from "@/components/ui/Icon";

const InputOption = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  
  // styles
  let bg = "transparent";
  if (isFocused) bg = "#eee";
  if (isActive) bg = "#B2D4FF";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex "
  };

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input type="checkbox" className='mr-2' checked={isSelected} />
      {children}
    </components.Option>
  );
};

const Overall = () => {
  const [picker3, setPicker3] = useState(new Date());

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "14px",
    }),
  };

  return (
    <>
      <div className="grid grid-cols-1 mb-2">
        <div className="col-span-1">
          <Card bodyClass="p-2">
            <div className="flex col-span-1 gap-2">
              <div className='border-r-[3px] border-solid border-black pe-5'>
                <div className="flex">
                  <p className='text-sm font-semibold'>Asset Reputation Tracker</p>
                  <span className="text-lg inline-flex h-6 w-6 flex-col mt-1 ms-4 items-center hover:bg-slate-200 cursor-pointer justify-center border">
                    <Icon icon="heroicons-outline:clipboard-document-check" />
                  </span>
                  <span className="text-lg inline-flex h-6 w-6 flex-col mt-1 ms-1 items-center hover:bg-slate-200 cursor-pointer justify-center border">
                    <Icon icon="heroicons-outline:bars-3-bottom-right" />
                  </span>
                  <span className="text-lg inline-flex h-6 w-6 flex-col mt-1 ms-1 items-center hover:bg-slate-200 cursor-pointer justify-center border">
                    <Icon icon="heroicons-outline:dots-horizontal" />
                  </span>
                </div>
                <div className="flex mt-2 items-center">
                  <span className="text-lg inline-flex h-6 w-6 flex-col mt-1 ms-1 items-center justify-center border">
                    <Icon icon="heroicons-outline:clock" />
                  </span>
                  <p className='text-xs mt-1 ms-2'>Data Last Updated on: 02-Nov-23 03:00 PM</p>
                </div>
              </div>
              <div className=" flex gap-2 px-5">
                <div style={{ minWidth: '200px' }}>
                  <div className='flex'>
                    <label className="text-sm ms-1 font-bold w-full cursor-default">
                      Sector
                    </label>
                    <div className='float-right'>
                      <span className="text-lg inline-flex h-6 w-6 flex-col items-center hover:bg-slate-200 cursor-pointer justify-center">
                        <Icon icon="heroicons-outline:x-circle" />
                      </span>
                    </div>
                  </div>
                  <Select
                    className="react-select min-w-[200px] text-sm"
                    classNamePrefix="select"
                    options={[
                      { value: "bank", label: "Bank" },
                      { value: "Investment", label: "Investment" }
                    ]}
                    isMulti={true}
                    components={{
                      Option: InputOption
                    }}
                  />
                </div>

                <div style={{ minWidth: '200px' }}>
                  <div className='flex'>
                    <label className="text-sm ms-1 font-bold w-full cursor-default">
                      Company
                    </label>
                    <div className='float-right'>
                      <span className="text-lg inline-flex h-6 w-6 flex-col items-center hover:bg-slate-200 cursor-pointer justify-center">
                        <Icon icon="heroicons-outline:x-circle" />
                      </span>
                    </div>
                  </div>
                  <Select
                    className="react-select min-w-[200px]"
                    classNamePrefix="select"
                    options={[
                      { value: "aldar", label: "Aldar" },
                      { value: "Alpha Dhabi", label: "Alpha Dhabi" },
                      { value: "Burjeel", label: "Burjeel" },
                      { value: "FAB", label: "FAB" },
                      { value: "IHC", label: "IHC" },
                      { value: "Multiply", label: "Multiply" },
                      { value: "Q", label: "Q" },
                    ]}
                    isMulti={true}
                  />
                </div>

                <div style={{ minWidth: '200px' }}>

                  <div className='flex'>
                    <label className="text-sm ms-1 font-bold w-full cursor-default">
                      Sources
                    </label>
                    <div className='float-right'>
                      <span className="text-lg inline-flex h-6 w-6 flex-col items-center hover:bg-slate-200 cursor-pointer justify-center">
                        <Icon icon="heroicons-outline:x-circle" />
                      </span>
                    </div>
                  </div>

                  <Select
                    className="react-select min-w-[200px]"
                    classNamePrefix="select"
                    options={newsSources}
                    isMulti={true}
                  />
                </div>

                <div style={{ minWidth: '200px' }}>
                  <div className='flex'>
                    <label className="text-sm ms-1 font-bold w-full cursor-default">
                      Sentiment Category
                    </label>
                    <div className='float-right'>
                      <span className="text-lg inline-flex h-6 w-6 flex-col items-center hover:bg-slate-200 cursor-pointer justify-center">
                        <Icon icon="heroicons-outline:x-circle" />
                      </span>
                    </div>
                  </div>
                  <Select
                    className="react-select min-w-[200px]"
                    classNamePrefix="select"
                    options={[
                      { value: "all", label: "All" },
                      { value: "positive", label: "Positive" },
                      { value: "negative", label: "Negative" },
                      { value: "neutral", label: "Neutral" },
                    ]}
                    isMulti={true}
                  />
                </div>

                <div>
                  <div className='flex'>
                    <label className="text-sm ms-1 font-bold w-full cursor-default">
                      Range
                    </label>
                    <div className='float-right flex mb-[3px]'>
                      <span className="text-lg inline-flex h-6 w-6 flex-col items-center hover:bg-slate-200 cursor-pointer justify-center">
                        <Icon icon="heroicons-outline:bars-3" />
                      </span>
                      <span className="text-lg inline-flex h-6 w-6 flex-col items-center hover:bg-slate-200 cursor-pointer justify-center">
                        <Icon icon="heroicons-outline:arrow-top-right-on-square" />
                      </span>
                      <span className="text-lg inline-flex h-6 w-6 flex-col items-center hover:bg-slate-200 cursor-pointer justify-center">
                        <Icon icon="heroicons-outline:x-circle" />
                      </span>
                    </div>
                  </div>
                  <Flatpickr
                    value={picker3}
                    id="range-picker"
                    className="form-control py-2"
                    onChange={(date) => setPicker3(date)}
                    options={{
                      mode: "range",
                      defaultDate: ["2020-02-01", "2020-02-15"],
                    }}
                  />
                </div>

                <div className='flex justify-end align-bottom items-end content-end p-[1px]'>
                  <Button
                    text="More Filters"
                    className='ps-6 py-[7px] ms-2 bg-gray-800 hover:bg-gray-900 text-white'
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className='grid grid-cols-12 grid-rows-2 gap-2 mx-2'>
        {/* Price */}
        <div className='col-span-4 row-span-2 rounded-lg bg-white shadow'>
          <div className='text-center font-black text-sm'>Price</div>
          <hr className='border-1 border-gray-300' />
          <PriceTable />
        </div>
        {/* Distribution of sentiment */}
        <div className='bg-white shadow rounded-lg col-span-2 row-span-1'>
          <div className='text-center font-black text-sm'>Distribution of sentiment</div>
          <hr className='border-1 border-gray-300' />
        </div>
        {/* Monthly Average Sentiment */}
        <div className='col-span-3 row-span-2 rounded-lg bg-white shadow'>
          <div className='text-center font-black text-sm'>Monthly Average Positive Sentiment</div>
          <hr className='border-1 border-gray-300' />
        </div>
        {/* Performance tracking */}
        <div className='col-span-3 row-span-2 rounded-lg bg-white shadow'>
          <div className='text-center font-black text-sm'>Company Performance: Tracking +ive% & -ive% Sentiments</div>
          <hr className='border-1 border-gray-300' />
        </div>
        {/* Weekly Sentiment */}
        <div className='bg-white shadow rounded-lg col-span-2 row-span-1'>
          <div className='text-center font-black text-sm'>Weekly Sentiment</div>
          <hr className='border-1 border-gray-300' />
        </div>
        {/* Details */}
        <div className='col-span-9 row-span-1 rounded-lg bg-white shadow'>
          <div className='text-center font-black text-sm'>Details</div>
          <hr className='border-1 border-gray-300' />
        </div>
        {/* Sources with pos/neg sentiment */}
        <div className='col-span-3 row-span-1 rounded-lg bg-white shadow'>
          <div className='text-center font-black text-sm'>Sources with Pos/Neg Sentiment</div>
          <hr className='border-1 border-gray-300' />
        </div>
        {/* negative sentiment articles */}
        <div className='col-span-12 row-span-1 rounded-lg bg-white shadow'>
          <div className='text-center font-black text-sm'>Negative Sentiment Articles</div>
          <hr className='border-1 border-gray-300' />
        </div>
        {/* negative reputation keywords */}
        <div className='col-span-5 row-span-1 rounded-lg bg-white shadow'>
          <div className='text-center font-black text-sm'>Negative Reputation Keywords - Minimum of two occurances</div>
          <hr className='border-1 border-gray-300' />
        </div>
        {/* negative reputation key phrases */}
        <div className='col-span-7 row-span-1 rounded-lg bg-white shadow'>
          <div className='text-center font-black text-sm'>Negative Reputation Key Phrases</div>
          <hr className='border-1 border-gray-300' />
        </div>
      </div>
    </>
  )
}

export default Overall