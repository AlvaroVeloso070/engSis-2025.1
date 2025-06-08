"use client";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import SideBar from "./components/Sidebar";
import { AppGlyph } from "./components/SideBarItems";
import { Glyph, Icon, IconSize } from "./components/Icons";
import DataCard from "./components/DataCard";
import Button from "./components/Button";
import TopBar from "./components/TopBar";
import { start } from "repl";

const sideBarItems = [
  {
    name: "Resumo",
    icon: AppGlyph.Dashboard,
    index: 0,
  },
  {
    name: "Receita",
    icon: AppGlyph.Revenue,
    index: 1,
  },
  {
    name: "Custos",
    icon: AppGlyph.Costs,
    index: 2,
  },
  {
    name: "Despesas",
    icon: AppGlyph.Revenue,
    index: 3,
  },
  {
    name: "Financiamento",
    icon: AppGlyph.Financing,
    index: 4,
  },
  {
    name: "Societário",
    icon: AppGlyph.Partners,
    index: 5,
  },
  {
    name: "Análise de solo",
    icon: AppGlyph.Costs,
    index: 6,
  },
];

export type Viability = {
  totalCost: number;
  costPerM2: number;
};

export type AltimetryData = {
  totalLandArea: number;
  highestPoint: number;
  lowestPoint: number;
};

enum SoilType {
  SILTY = "SILTY",
  SANDY = "SANDY",
  ROCKY = "ROCKY",
  CLAY = "CLAY",
}

export default function MainView() {
  const [viability, setViability] = useState<Viability>({
    totalCost: 0,
    costPerM2: 0,
  });

  const [altimetryData, setAltimetryData] = useState<AltimetryData | null>(
    null
  );
  async function requestTrackingData() {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/altimetry`)
      .then((res) => res.json())
      .then((json) => setAltimetryData(json))
      .catch((err) => console.error(err));
  }

  const [startedTracking, setStartedTracking] = useState(false);

  return (
    <section className="flex flex-col h-screen">
      <TopBar />
      <div className="flex flex-1 h-full overflow-hidden">
        <SideBar items={sideBarItems} />
        <div className="flex flex-1 font-inter h-full flex-col shadow-overlay border-l border-levels-100 w-full">
          <header
            className={
              "flex px-spacing-xl py-spacing-md shrink-0 items-end w-full " +
              "relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-levels-100"
            }
          >
            <div className="flex flex-col flex-1">
              <div className="flex gap-x-spacing-2 items-center">
                <div className="hover:bg-levels-100 rounded-xs p-spacing-2 cursor-pointer">
                  <Icon glyph={Glyph.Rocket} primaryColor="fill-brand-500" />
                </div>

                <Icon
                  glyph={Glyph.ChevronRight}
                  primaryColor="fill-label-light-secondary"
                  size={IconSize.XSmall}
                />
                <p className="text-textxs text-label-light-secondary font-regular ml-spacing-2">
                  Projeto de Engenharia de Sistemas
                </p>
              </div>
              <h5 className="self-stretch col-span-1 text-displayxs text-label-light-primary font-semibold font-inter ">
                Análise de solo
              </h5>
            </div>
          </header>
          <main className="flex-1 flex min-w-0 h-full  items-start  overflow-x-hidden ">
            <div className="flex flex-1 flex-col min-w-0 min-h-0 h-full  overflow-y-auto">
              <div className="flex flex-col px-spacing-xl overflow-auto gap-y-spacing-2">
                <div className="flex py-spacing-lg gap-x-spacing-lg">
                  <DataCard
                    className="flex-1"
                    title="Área total do terreno"
                    data={1000}
                    unit="m²"
                    unitPlacement="end"
                  />
                  <span className="flex gap-x-spacing-lg flex-1">
                    <div className="w-[1px] h-full bg-levels-100" />
                    <DataCard
                      className="flex-1"
                      title="Custo total da obra"
                      data={viability.totalCost}
                      unit="R$"
                      unitPlacement="start"
                    />
                  </span>
                  <span className="flex gap-x-spacing-lg flex-1">
                    <div className="w-[1px] h-full bg-levels-100" />
                    <DataCard
                      className="flex-1"
                      title="Custo por metro quadrado"
                      data={viability.costPerM2}
                      unit="R$/m²"
                      unitPlacement="start"
                    />
                  </span>
                  <span className="flex gap-x-spacing-lg flex-1">
                    <div className="w-[1px] h-full bg-levels-100" />
                    <DataCard
                      className="flex-1"
                      title="Umidade do solo"
                      data={1000}
                      unit="%"
                      unitPlacement="end"
                    />
                  </span>
                </div>
              </div>
              <div className="flex w-full h-[1px] border-t-[1px] border-levels-200 border-dashed my-spacing-lg" />
              <div className="flex px-spacing-xl overflow-auto h-full">
                <div className="flex flex-1 h-full flex-col pl-spacing-2 pr-spacing-xl py-spacing-sm border-r-[1px] border-levels-200 border-dashed gap-y-spacing-lg">
                  <div className="flex flex-col bg-levels-25 border-[1px] border-levels-100 rounded-lg h-fit px-spacing-md py-spacing-sm gap-y-spacing-sm">
                    {startedTracking ? (
                      <TrackingLoadingAnimation />
                    ) : altimetryData === null ? (
                      <>
                        <p className="text-textsm font-regular text-label-light-primary">
                          Levantamento de área e altimetria.
                        </p>
                        <p className="text-textxs font-regular text-label-light-secondary">
                          Para realizar a análise de solo, é necessário o
                          levantamento da área total do terreno e a altimetria
                          do local. Essas informações são essenciais para
                          determinar a viabilidade da obra e os custos
                          envolvidos. A baixo, cliquei no botão rastrear caminho
                          e percorra o perímetro do terreno, clicando nos pontos
                          de interesse. Após finalizar o percurso, clique em
                          "Finalizar" para calcular a área total do terreno e a
                          altimetria do local.
                        </p>
                        <div className="flex items-center justify-center mt-[-60px]">
                          <svg
                            width="300"
                            height="300"
                            viewBox="0 0 300 300"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline
                              points=" 150,80 200,100 240,140 240,200 200,240 150,260 100,240 60,200 60,140 100,100 150,80"
                              fill="none"
                              stroke="rgb(60, 60, 67, 70%)"
                              strokeWidth="2"
                              strokeDasharray="10,6"
                            />

                            <line
                              x1="144"
                              y1="74"
                              x2="156"
                              y2="86"
                              stroke="#ff004d"
                              strokeWidth="2"
                            />
                            <line
                              x1="156"
                              y1="74"
                              x2="144"
                              y2="86"
                              stroke="#ff004d"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col gap-y-spacing-md">
                        <DataCard
                          className="flex-1"
                          title="Área total do terreno"
                          data={altimetryData.totalLandArea}
                          unit="m²"
                          unitPlacement="end"
                        />
                        <DataCard
                          className="flex-1"
                          title="Ponto mais alto"
                          data={altimetryData.highestPoint}
                          unit="m"
                          unitPlacement="end"
                        />
                        <DataCard
                          className="flex-1"
                          title="Ponto mais baixo"
                          data={altimetryData.lowestPoint}
                          unit="m"
                          unitPlacement="end"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col bg-levels-25 border-[1px] border-levels-100 rounded-lg h-fit px-spacing-md py-spacing-sm gap-y-spacing-sm items-center">
                    {!startedTracking && altimetryData === null ? (
                      <Button
                        label="Iniciar rastreio"
                        onClick={() => {
                          setStartedTracking(true);
                          requestTrackingData();
                        }}
                        iconPosition="trailing"
                        size="sm"
                        presetStyle="floating"
                        icon={{ glyph: Glyph.Add, size: IconSize.Small }}
                      />
                    ) : !startedTracking && altimetryData !== null ? (
                      <Button
                        label="Limpar dados"
                        onClick={() => setAltimetryData(null)}
                        iconPosition="trailing"
                        size="sm"
                        presetStyle="dangerous"
                        icon={{
                          glyph: Glyph.Delete,
                          size: IconSize.Small,
                          primaryColor: "fill-white",
                        }}
                      />
                    ) : (
                      <Button
                        label="Finalizar rastreio"
                        onClick={() => setStartedTracking(false)}
                        iconPosition="trailing"
                        size="sm"
                        presetStyle="brand"
                        icon={{ glyph: Glyph.Add, size: IconSize.Small }}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-1 h-full flex-col px-spacing-xs py-spacing-sm border-r-[1px] border-levels-200 border-dashed"></div>
                <div className="flex flex-1 h-full flex-col px-spacing-xs py-spacing-sm"></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

function TrackingLoadingAnimation() {
  type SeriesRange = {
    count: number | null;
    range: number | null;
  };
  const [series, setSeries] = useState<SeriesRange[]>(seriesSample());
  const array = new Array(10).fill(0);

  function seriesSample(): SeriesRange[] {
    const raw = Array.from({ length: 10 }, () => Math.random());
    const total = raw.reduce((sum, val) => sum + val, 0);
    const cumulative: SeriesRange[] = [];
    let acc = 0;
    raw.forEach((value, index) => {
      acc += (value / total) * 100;
      cumulative.push({
        count: index + 1,
        range: acc,
      });
    });
    cumulative[cumulative.length - 1].range = 100;
    cumulative[0].range = 0;
    return cumulative;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setSeries(seriesSample());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <ResponsiveContainer height={316} className="flex-1">
      <LineChart
        width={500}
        height={300}
        data={series}
        margin={{ top: 12, right: 5, bottom: 0, left: 0 }}
      >
        <CartesianGrid stroke="#ECECED" strokeWidth={1} />
        <XAxis dataKey="count" fontSize={10} hide />
        <YAxis
          fontSize={10}
          width={42}
          padding={{ top: 0, bottom: 0 }}
          domain={[0, 100]}
          hide
        />
        <Line
          type="linear"
          dataKey="range"
          stroke="#FF004D"
          strokeWidth={1.5}
          dot={false}
          animationBegin={0}
          animationDuration={600}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
