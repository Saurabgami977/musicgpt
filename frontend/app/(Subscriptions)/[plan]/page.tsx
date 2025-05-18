"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import DarkBackdrop from "../../components/Backdrop/DarkBackdrop";

import defaultImage from "../../assets/images/main.png";
import checkmark from "../../assets/icons/checkmark.png";
import info from "../../assets/icons/info.png";

import { fetchPlans } from "../../../services/apis/plans";

const pro = () => {
  const [activePlan, setActivePlan] = React.useState("Pro");
  const [modalOpen, setModalOpen] = React.useState(true);
  const [activeFeatureImage, setActiveFeatureImage] = React.useState(
    {} as {
      image: string;
      title: string;
      index: number;
    }
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["plan"],
    queryFn: fetchPlans,
  });

  const handleClose = () => {
    setModalOpen(false);
  };

  const handlePlanClick = (plan: string) => {
    setActivePlan(plan);
    console.log(plan);
    console.log(data?.data?.plans.find((plan: any) => console.log(plan?.name)));

    if (activeFeatureImage?.index !== undefined) {
      setActiveFeatureImage({
        image: `${
          "http://localhost:4000/v1/uploads" +
          data?.data?.plans.find((plan: any) => plan.name === plan)?.features[
            activeFeatureImage.index
          ]?.image
        }`,
        title: data?.data?.plans.find((plan: any) => plan.name === activePlan)
          ?.features[activeFeatureImage.index]?.title,
        index: activeFeatureImage.index,
      });
    }
  };

  return (
    <>
      {modalOpen && (
        <DarkBackdrop onClose={handleClose}>
          <div className="flex justify-center">
            <div className="left rounded-bl-4xl">
              <Image
                width={400}
                height={600}
                src={activeFeatureImage?.image || defaultImage}
                alt="Main"
                className="w-full h-auto rounded-bl-4xl rounded-tl-4xl"
              />
            </div>

            <div className="bg-[#14181C]   p-6 max-w-sm rounded-br-4xl rounded-tr-4xl text-white flex flex-col justify-center">
              {isLoading && (
                <div className="flex justify-center items-center h-full">
                  <p className="text-white text-lg">Loading...</p>
                </div>
              )}

              {isError && (
                <div className="flex justify-center items-center h-full">
                  <p className="text-white text-lg">Error loading data</p>
                </div>
              )}

              {!isLoading && !isError && data && (
                <>
                  <h2 className="text-3xl font-semibold mb-4 text-white">
                    {
                      data?.data?.plans.find(
                        (plan: any) => plan.name === activePlan
                      )?.tagline
                    }
                  </h2>

                  {/* Plans Button */}
                  <div className="plans flex justify-between pt-7 gap-2">
                    {data?.data?.plans.map((plan: any, index: number) => (
                      <button
                        key={index}
                        className={`px-[15px] py-[12px] rounded-[12px] bg- text-white font-semibold text-[16px]  border-[#3A3E42] border-1 w-[104px] h-[59px] cursor-pointer relative ${
                          activePlan === plan.name && "border-2 border-white"
                        }`}
                        onClick={() => handlePlanClick(plan.name)}
                      >
                        {plan.name}
                        {plan.is_popular === true && (
                          <span className="absolute top-0 right-0 bg-[#ffffff] text-black text-xs font-semibold px-1 w-[71px] h-[25px] border-solid rounded-[100px] justify-center items-center flex mt-[-10px] mr-[10px]">
                            Popular
                          </span>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* plans features */}
                  <ul className="list-disc list-inside pt-7">
                    {data?.data?.plans
                      .find((plan: any) => plan.name === activePlan)
                      ?.features.map(
                        (
                          feature: { title: string; image: string },
                          index: number
                        ) => (
                          <li
                            key={index}
                            className="flex gap-2 items-center cursor-pointer"
                          >
                            <Image
                              src={checkmark}
                              alt="checkmark"
                              className="w-3 h-2.5"
                            ></Image>
                            <div
                              className="flex gap-1 items-center"
                              onMouseEnter={() => {
                                setActiveFeatureImage({
                                  image: `${
                                    "http://localhost:4000/v1/uploads" +
                                    feature?.image
                                  }`,
                                  title: feature?.title,
                                  index: index,
                                });
                              }}
                            >
                              <span
                                className={`text-[14px] font-medium hover:text-[#ffffff] transition duration-300 ease-in-out ${
                                  activeFeatureImage?.index === index
                                    ? "text-[#ffffff]"
                                    : "text-[#777A80]"
                                }`}
                                style={{
                                  lineHeight: "150%",
                                }}
                              >
                                {feature?.title}
                              </span>
                              <Image
                                src={info}
                                alt="info"
                                className="w-4 h-2.4"
                              ></Image>
                            </div>
                          </li>
                        )
                      )}
                  </ul>

                  <div className="mt-7">
                    <span className="text-[32px] font-semibold text-[#E4E6E8]">
                      {data?.data?.plans
                        .find((plan: any) => plan.name === activePlan)
                        ?.monthly_price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                    </span>
                    <p className="text-[14px] font-medium text-[#BFC2C8] leading-[150%]">
                      USD per{" "}
                      {
                        data?.data?.plans.find(
                          (plan: any) => plan.name === activePlan
                        )?.billing_cycle
                      }
                      , billed{" "}
                      {
                        data?.data?.plans.find(
                          (plan: any) => plan.name === activePlan
                        )?.billed
                      }
                    </p>
                  </div>

                  <button className="mt-6 bg-white  py-2 px-4 rounded-xl h-[56px] w-[336px] text-[#16191C] text-lg font-semibold">
                    Unlock Pro features →
                  </button>
                </>
              )}
            </div>
          </div>
        </DarkBackdrop>
      )}
    </>
  );
};

export default pro;
