"use client";
import NeonEffect from "@/components/NeonEffect";
import React, { useState } from "react";
import { MdArrowDownward } from "react-icons/md";

const DatePickerForm = () => {
  const [isVisibleDatePicker, setIsVisibleDatePicker] = useState(true);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleToday = () => {
    const today = new Date().toISOString().split("T")[0];
    setStartDate(today);
    setEndDate(today);
  };

  const toggelDatePicker = () => {
    setIsVisibleDatePicker((prev) => !prev);
  };

  const handleLast7Days = () => {
    const today = new Date();
    const last7Days = new Date();
    last7Days.setDate(today.getDate() - 7);
    setStartDate(last7Days.toISOString().split("T")[0]);
    setEndDate(today.toISOString().split("T")[0]);
  };

  const handleLastMonth = () => {
    const today = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(today.getMonth() - 1);
    setStartDate(lastMonth.toISOString().split("T")[0]);
    setEndDate(today.toISOString().split("T")[0]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(endDate + " to " + startDate);
  };

  return (
    <div className="min-h-[500px] ">
      <div className="w-64 mx-auto mt-24">
        <NeonEffect left={false} right={false}>
          <button
            onClick={toggelDatePicker}
            className="px-4 py-2 hover:bg-gradient-to-tr hover:from-neon-greenish hover:to-neon-blue to-80% bg-clip-text hover:text-transparent duration-500 text-nowrap flex gap-4 items-center"
          >
            {startDate + " - " + endDate}
            <MdArrowDownward className="text-neon-blue" size={24} />
          </button>
        </NeonEffect>
      </div>
      {/* Date picker form */}
      {isVisibleDatePicker && (
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2 lg:mx-auto p-6 space-y-6  shadow-md rounded-lg bg-medium-gray/15 text-black dark:bg-black-bg border border-neon-blue dark:text-white mt-10"
        >
          <div className=" md:flex gap-4 ">
            {/* Buttons */}
            <div className=" flex md:flex-col gap-8">
              <NeonEffect left={false} right={false}>
                <button
                  type="button"
                  onClick={handleToday}
                  className="px-4 py-2 hover:bg-gradient-to-tr hover:from-neon-greenish hover:to-neon-blue to-80% bg-clip-text hover:text-transparent duration-500 text-nowrap"
                >
                  Today
                </button>
              </NeonEffect>

              <NeonEffect left={false} right={false}>
                <button
                  type="button"
                  onClick={handleLast7Days}
                  className="px-4 py-2 hover:bg-gradient-to-tr hover:from-neon-greenish hover:to-neon-blue to-80% bg-clip-text hover:text-transparent duration-500 text-nowrap"
                >
                  Last 7 Days
                </button>
              </NeonEffect>
              <NeonEffect left={false} right={false}>
                <button
                  type="button"
                  onClick={handleLastMonth}
                  className="px-4 py-2 hover:bg-gradient-to-tr hover:from-neon-greenish hover:to-neon-blue to-80% bg-clip-text hover:text-transparent duration-500 text-nowrap"
                >
                  Last 1 Month
                </button>
              </NeonEffect>
            </div>
            {/* Dates */}
            <div className="flex justify-between w-full gap-5 mt-10 md:mt-0">
              <div className="flex flex-col w-full ">
                <input
                  type="date"
                  id="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="p-2 border dark:bg-medium-gray dark:text-very-light-gray  rounded-lg focus:ring-2 focus:ring-neon-blue outline-none "
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <input
                  type="date"
                  id="end-date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="p-2 border dark:bg-medium-gray dark:text-very-light-gray  rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex justify-end">
            <div>
              <NeonEffect>
                <button
                  type="submit"
                  className="px-4 py-2 hover:bg-gradient-to-tr hover:from-neon-greenish hover:to-neon-blue to-80% bg-clip-text hover:text-transparent duration-500 text-nowrap"
                >
                  Apply
                </button>
              </NeonEffect>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default DatePickerForm;
