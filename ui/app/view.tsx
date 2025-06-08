"use client";
import React, {useEffect, useState} from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis,} from "recharts";
import SideBar from "./components/Sidebar";
import {AppGlyph} from "./components/SideBarItems";
import {Glyph, Icon, IconSize} from "./components/Icons";
import DataCard from "./components/DataCard";
import Button from "./components/Button";
import TopBar from "./components/TopBar";
import {motion} from "framer-motion";

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

export type SoilData = {
  soilMoisture: number;
  soilType: SoilType;
};

export type BarometricData = {
  hPa: number;
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

  const [soilData, setSoilData] = useState<SoilData | null>(null);

  const [barometricData, setBarometricData] = useState<BarometricData | null>(
    null
  );

  async function requestTrackingData() {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/altimetry`)
      .then((res) => res.json())
      .then((json) => setAltimetryData(json))
      .catch((err) => console.error(err));
  }

  async function requestSoilData() {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/soil`)
      .then((res) => res.json())
      .then((json) =>
        setSoilData({
          soilMoisture: json.soilMoisture,
          soilType:
            json.soilType === "SILTY"
              ? SoilType.SILTY
              : json.soilType === "SANDY"
              ? SoilType.SANDY
              : json.soilType === "ROCKY"
              ? SoilType.ROCKY
              : SoilType.CLAY,
        })
      )
      .catch((err) => console.error(err));
    setTimeout(() => {
      setStartedSoilAnalysis(false);
    }, 5000);
  }

  async function requestBarometricData() {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/barometry`)
      .then((res) => res.json())
      .then((json) =>
        setBarometricData({
          hPa: json.hPa,
        })
      )
      .catch((err) => console.error(err));
    setTimeout(() => {
      setStartedBarometricAnalysis(false);
    }, 5000);
  }

  async function requestViabilityData() {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/viability`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        totalLandArea: altimetryData?.totalLandArea ?? 0,
        highestPoint: altimetryData?.highestPoint ?? 0,
        lowestPoint: altimetryData?.lowestPoint ?? 0,
        soilMoisture: soilData?.soilMoisture ?? 0,
        soilType: soilData?.soilType ?? SoilType.SILTY,
        hPa: barometricData?.hPa ?? 0,
      }),
    })
      .then((res) => res.json())
      .then((json) =>
        setViability({
          totalCost: json.totalCost,
          costPerM2: json.costPerM2,
        })
      )
      .catch((err) => console.error(err));
  }

  const [startedTracking, setStartedTracking] = useState(false);

  const [startedSoilAnalysis, setStartedSoilAnalysis] = useState(false);

  const [startedBarometricAnalysis, setStartedBarometricAnalysis] =
    useState(false);

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
              <div className="flex items-center justify-between w-full">
                <h5 className="self-stretch col-span-1 text-displayxs text-label-light-primary font-semibold font-inter ">
                  Análise de solo
                </h5>
                <Button
                  label="Calcular viabilidade"
                  disabled={
                    altimetryData === null ||
                    soilData === null ||
                    barometricData === null ||
                    startedBarometricAnalysis ||
                    startedSoilAnalysis ||
                    startedTracking
                  }
                  onClick={() => {
                    requestViabilityData();
                  }}
                  iconPosition="trailing"
                  size="xs"
                  presetStyle="brand"
                  icon={{ glyph: Glyph.ArrowUp, size: IconSize.Small }}
                />
              </div>
            </div>
          </header>
          <main className="flex-1 flex min-w-0 h-full  items-start  overflow-x-hidden ">
            <div className="flex flex-1 flex-col min-w-0 min-h-0 h-full  overflow-y-auto">
              <div className="flex flex-col px-spacing-xl overflow-auto gap-y-spacing-2">
                <div className="flex py-spacing-lg gap-x-spacing-lg">
                  <DataCard
                    className="flex-1"
                    title="Área total do terreno"
                    data={
                      !startedTracking ? altimetryData?.totalLandArea ?? 0 : 0
                    }
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
                      data={!startedSoilAnalysis ? soilData?.soilMoisture ?? 0 : 0}
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
                          envolvidos. Abaixo, clique no botão rastrear caminho
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
                          data={
                            !startedTracking ? altimetryData.totalLandArea : 0
                          }
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
                        icon={{ glyph: Glyph.Checkmark, size: IconSize.Small }}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-1 h-full flex-col py-spacing-sm border-r-[1px] border-levels-200 border-dashed px-spacing-xl gap-y-spacing-lg">
                  <div className="flex flex-col bg-levels-25 border-[1px] border-levels-100 rounded-lg h-fit px-spacing-md py-spacing-sm gap-y-spacing-sm">
                    {startedSoilAnalysis ? (
                      <LoadingCircle />
                    ) : soilData === null ? (
                      <>
                        <p className="text-textsm font-regular text-label-light-primary">
                          Análise de tipo de solo.
                        </p>
                        <p className="text-textxs font-regular text-label-light-secondary">
                          Para realizar a análise de solo, é necessário
                          primeiramente identificar o tipo de solo presente no
                          terreno. Para isso, retire uma pequena amostra de solo
                          e posicione no sensor na parte inferior do
                          dispositivo. O sensor irá identificar o tipo de solo e
                          exibir na tela. Abaixo, você pode ver o tipo de solo
                          identificado e as informações relacionadas.
                        </p>
                        <div className="flex items-center justify-center mt-[-20px]">
                          <svg
                            width="300"
                            height="200"
                            viewBox="0 0 400 200"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 200 Q100 60, 200 120 Q300 180, 400 100 L400 200 Z"
                              fill="rgb(60, 60, 67, 40%)"
                              stroke="rgb(60, 60, 67, 70%)"
                              strokeWidth="2"
                              fillOpacity="0.3"
                            />
                          </svg>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col gap-y-spacing-md">
                        <DataCard
                          className="flex-1"
                          title="Tipo de solo"
                          data={
                            soilData.soilType === SoilType.SILTY
                              ? "Siltoso"
                              : soilData.soilType === SoilType.SANDY
                              ? "Arenoso"
                              : soilData.soilType === SoilType.ROCKY
                              ? "Pedregoso"
                              : "Argiloso"
                          }
                          unit={""}
                          unitPlacement="end"
                        />
                        <DataCard
                          className="flex-1"
                          title="Umidade do solo"
                          data={soilData.soilMoisture}
                          unit="%"
                          unitPlacement="end"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col bg-levels-25 border-[1px] border-levels-100 rounded-lg h-fit px-spacing-md py-spacing-sm gap-y-spacing-sm items-center">
                    {!startedSoilAnalysis && soilData === null ? (
                      <Button
                        label="Iniciar análise de solo"
                        onClick={() => {
                          setStartedSoilAnalysis(true);
                          requestSoilData();
                        }}
                        iconPosition="trailing"
                        size="sm"
                        presetStyle="floating"
                        icon={{ glyph: Glyph.Add, size: IconSize.Small }}
                      />
                    ) : !startedSoilAnalysis && soilData !== null ? (
                      <Button
                        label="Limpar dados"
                        onClick={() => setSoilData(null)}
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
                      <p className="text-textsm font-regular text-label-light-primary">
                        Análise de solo em andamento...
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-1 h-full flex-col  py-spacing-sm px-spacing-xl gap-y-spacing-lg">
                  <div className="flex flex-col bg-levels-25 border-[1px] border-levels-100 rounded-lg h-fit px-spacing-md py-spacing-sm gap-y-spacing-sm">
                    {startedBarometricAnalysis ? (
                      <LoadingCircle />
                    ) : barometricData === null ? (
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
                        <div className="flex items-center justify-center">
                          <svg
                            width="100"
                            height="300"
                            viewBox="0 0 100 300"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="40"
                              y="20"
                              width="20"
                              height="200"
                              rx="10"
                              ry="10"
                              fill="#ccc"
                              stroke="#555"
                              strokeWidth="2"
                            />

                            <rect
                              x="45"
                              y="100"
                              width="10"
                              height="120"
                              fill="rgb(60, 60, 67, 70%)"
                            />

                            <circle
                              cx="50"
                              cy="240"
                              r="20"
                              fill="rgb(60, 60, 67, 70%)"
                              stroke="#555"
                              strokeWidth="2"
                            />

                            <circle
                              cx="50"
                              cy="240"
                              r="22"
                              fill="none"
                              stroke="#555"
                              strokeWidth="2"
                            />

                            <line
                              x1="30"
                              y1="40"
                              x2="40"
                              y2="40"
                              stroke="#333"
                              strokeWidth="2"
                            />
                            <line
                              x1="30"
                              y1="80"
                              x2="40"
                              y2="80"
                              stroke="#333"
                              strokeWidth="2"
                            />
                            <line
                              x1="30"
                              y1="120"
                              x2="40"
                              y2="120"
                              stroke="#333"
                              strokeWidth="2"
                            />
                            <line
                              x1="30"
                              y1="160"
                              x2="40"
                              y2="160"
                              stroke="#333"
                              strokeWidth="2"
                            />
                            <line
                              x1="30"
                              y1="200"
                              x2="40"
                              y2="200"
                              stroke="#333"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col gap-y-spacing-md">
                        <DataCard
                          className="flex-1"
                          title="Pressão atmosférica"
                          data={barometricData.hPa}
                          unit="hPa"
                          unitPlacement="end"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col bg-levels-25 border-[1px] border-levels-100 rounded-lg h-fit px-spacing-md py-spacing-sm gap-y-spacing-sm items-center">
                    {!startedBarometricAnalysis && barometricData === null ? (
                      <Button
                        label="Iniciar análise de pressão atmosférica"
                        onClick={() => {
                          setStartedBarometricAnalysis(true);
                          requestBarometricData();
                        }}
                        iconPosition="trailing"
                        size="sm"
                        presetStyle="floating"
                        icon={{ glyph: Glyph.Add, size: IconSize.Small }}
                      />
                    ) : !startedBarometricAnalysis &&
                      barometricData !== null ? (
                      <Button
                        label="Limpar dados"
                        onClick={() => setBarometricData(null)}
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
                      <p className="text-textsm font-regular text-label-light-primary">
                        Análise de pressão em andamento...
                      </p>
                    )}
                  </div>
                </div>
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

export function LoadingCircle() {
  const circumference = 2 * Math.PI * 45;

  return (
    <div className="flex justify-center items-center h-48">
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="#e5e7eb" strokeWidth="10" />

        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="#ff004d"
          strokeWidth="10"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
