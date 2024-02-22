"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faPlay,
  faTrophy,
  faUsers,
  faBriefcase,
  faBuilding,
  faChevronRight,
  faCode,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { EditorPlayground } from "@/components/editor-playground";
// import { ExploreCard } from "@neatcode/ui";

export default function Body(): JSX.Element {
  const [activeTopicId, setActiveTopicId] = useState<number>(0);
  return (
    <div>
      <div className="explore-section-container relative min-h-[400px] transition-all duration-[400ms] max-sm:mt-0 max-sm:min-h-[300px] max-sm:pt-0 sm:mt-[30px] sm:max-md:pt-[60px] md:mt-[80px] md:pt-[30px]">
        <div className="explore-section-content relative m-auto mx-auto px-[50px] transition-all duration-[400ms] max-sm:px-[15px] sm:w-[750px] md:w-[970px] lg:w-[1170px]">
          <div className="mx-[-15px] flex transition-all duration-[400ms] max-sm:flex-col-reverse">
            <div className="px-[15px]  text-end transition-all duration-[400ms] sm:w-1/2">
              <div className="flex w-full text-[#1da09c] transition-all duration-[400ms] max-sm:-mt-[30px] max-sm:justify-center max-sm:py-[20px] sm:items-center sm:justify-end md:mt-[10px]">
                <h2 className="relative inline-block text-[1.375rem] font-normal transition-all duration-[400ms] sm:my-auto sm:mr-2.5">
                  Start Exploring
                </h2>
                <div className=" inline-block h-24 w-24 scale-[0.7] transition-all duration-[400ms] max-sm:hidden sm:mr-[-63px]">
                  <div className="relative mx-auto h-[87px] w-[56px] transition-all duration-[400ms]">
                    <div className="absolute h-[87px] w-[56px] rounded-[0.625rem] bg-gradient-to-br from-[#4db6ac] to-[#00796b] text-[#34a297]" />
                    <div className="absolute h-[87px] w-[56px] rotate-[60deg] rounded-[0.625rem] bg-gradient-to-br from-[#4db6ac] to-[#00796b] text-[#34a297]" />
                    <div className="absolute h-[87px] w-[56px] -rotate-[60deg] rounded-[0.625rem] bg-gradient-to-br from-[#4db6ac] to-[#00796b] text-[#34a297]" />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[53px] w-[53px] rounded-full bg-white text-center">
                      <FontAwesomeIcon
                        className="mt-[14px]"
                        color="#34a297"
                        icon={faGraduationCap}
                        size="xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="m-auto max-w-[600px] text-right text-[0.9375rem] font-normal leading-7 tracking-[0.03em] opacity-50 transition-all duration-[400ms] max-sm:text-center sm:mr-[-17px]">
                Explore is a well-organized tool that helps you get the most out of NeatCode by providing
                structure to guide your progress towards the next step in your programming career.
              </p>
              <Link className="" href="/getStarted">
                <p className="mt-[15px] flex items-center text-[0.9375rem] font-normal leading-[1.813rem] text-[#1890ff] transition-all duration-[400ms] max-sm:justify-center sm:-mr-[17px] sm:justify-end">
                  Get Started &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} width={5} />
                </p>
              </Link>
            </div>
            <div className="explore-cards-container px-[15px] transition-all duration-[400ms] sm:w-1/2">
              <div className="relative ml-[auto] h-[18.75rem] w-[16.25rem] transition-all duration-[400ms] max-sm:m-auto max-sm:scale-[0.6] sm:max-md:scale-[0.8]">
                <div className="absolute h-full w-full origin-left scale-[0.6] transition-all duration-[400ms]">
                  <div className="animate-float absolute -left-[70px] transition-all duration-[400ms] lg:-left-[210px]">
                    <ExploreCard v="v3" />
                  </div>
                </div>
                <div className="absolute h-full w-full origin-left scale-[0.8] transition-all duration-[400ms]">
                  <div className="animate-float animation-delay-[800ms] absolute -left-[30px] transition-all duration-[400ms] lg:-left-[90px]">
                    <ExploreCard v="v2" />
                  </div>
                </div>
                <div className="animate-float animation-delay-[1600ms] absolute h-full w-full origin-left transition-all duration-[400ms]">
                  <ExploreCard v="v1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-section-container mx-auto px-[15px] sm:-mt-[20px] sm:w-[750px] md:w-[970px] lg:w-[73.125rem]">
        <div className="-mx-[15px] flex max-sm:flex-col">
          <div className="mt-[50px] w-1/2 max-sm:mx-auto max-sm:mt-[80px] max-sm:w-full max-sm:px-[15px] sm:border-r-2 sm:border-r-white sm:px-[50px] sm:pb-[20px] sm:pt-[17px]">
            <div className="sm:-mt-[13px]">
              <div className="scale-[0.7] text-start leading-[0] max-sm:text-center sm:origin-left">
                <div className="relative z-[2] inline-block">
                  <div className="h-24 w-24">
                    <div className="relative mx-auto h-[87px] w-[56px]">
                      <div className="absolute h-[87px] w-[56px] rounded-[0.625rem] bg-gradient-to-br from-[#4fc3f7] to-[#2196f3]" />
                      <div className="absolute h-[87px] w-[56px] rotate-[60deg] rounded-[0.625rem] bg-gradient-to-br from-[#4fc3f7] to-[#2196f3]" />
                      <div className="absolute h-[87px] w-[56px] -rotate-[60deg] rounded-[0.625rem] bg-gradient-to-br from-[#4fc3f7] to-[#2196f3]" />
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[53px] w-[53px] rounded-full bg-white pt-[13px] text-center">
                        <b className="font-TypoRound relative text-center text-xl text-[#259af3]">
                          3200<span className="relative -top-[11px] right-[4px] text-base">+</span>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative z-[1] -ml-[30px] inline-block">
                  <CustomIcons icon={faUsers} v="v3" />
                </div>
                <div className="relative -ml-[30px] inline-block">
                  <CustomIcons icon={faTrophy} v="v4" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-NimbusSans mb-5 mt-2.5 text-[1.375rem] font-medium text-[#1890ff] max-sm:text-center">
                Questions, Community & Contests
              </h2>
              <p className="max-w-[600px] text-[0.9375rem] font-normal leading-[1.9em] tracking-[0.03em] text-[#333333] opacity-50 max-sm:mx-auto max-sm:text-center">
                Over 3250 questions for you to practice. Come and join one of the largest tech communities
                with hundreds of thousands of active users and participate in our contests to challenge
                yourself and earn rewards.
              </p>
            </div>
            <Link className="w-full text-[#1890ff]" href="/problems">
              <p className="mt-[15px] flex items-center text-[0.9375rem] font-normal leading-[1.9em] tracking-[0.03em] max-sm:justify-center">
                <span>View Questions &nbsp;</span>
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
              </p>
            </Link>
          </div>
          <div className="mt-[50px] w-1/2 max-sm:mx-auto max-sm:mt-[80px] max-sm:w-full max-sm:px-[15px] sm:px-[50px] sm:pb-[20px] sm:pt-[17px]">
            <div className="sm:-mt-[13px]">
              <div className="scale-[0.7] text-start leading-[0] max-sm:text-center sm:origin-left">
                <div className="relative z-[1] inline-block">
                  <CustomIcons icon={faBriefcase} v="v5" />
                </div>
                <div className="relative -ml-[30px] inline-block">
                  <CustomIcons icon={faBuilding} v="v6" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-NimbusSans mb-5 mt-2.5 text-[1.375rem] font-medium text-[#b7892b] max-sm:text-center">
                Companies & Candidates
              </h2>
              <p className="max-w-[600px] text-[0.9375rem] font-normal leading-[1.9em] tracking-[0.03em] text-[#333333] opacity-50 max-sm:mx-auto max-sm:text-center">
                Not only does NeatCode prepare candidates for technical interviews, we also help companies
                identify top technical talent. From sponsoring contests to providing online assessments and
                training, we offer numerous services to businesses.
              </p>
            </div>
            <Link className="w-full text-[#1890ff]" href="/bussiness">
              <p className="mt-[15px] flex items-center text-[0.9375rem] font-normal leading-[1.9em] tracking-[0.03em] max-sm:justify-center">
                <span>Business Opportunities &nbsp;</span>
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="developer-section-container mx-auto px-2.5 lg:w-[73.125rem]">
        <DeveloperSection activeTopicId={activeTopicId} setActiveTopicId={setActiveTopicId} />
      </div>
      <div className="story-section-container">
        <StorySection />
      </div>
    </div>
  );
}

export function ExploreCard({ v = "v1" }: { v: "v1" | "v2" | "v3" }): JSX.Element {
  const col: Record<string, string> = {
    v1: "from-[#00cded] to-[#96d1f9]",
    v2: "from-[#8dc63f] to-[#b9f4bc]",
    v3: "from-[#ffb601] to-[#ffd57f]",
  };
  const opacity: Record<string, string> = {
    v1: "opaity-100",
    v2: "opacity-60",
    v3: "opacity-20",
  };
  return (
    <div className="explore-card rotY h-[19rem] w-64 rounded-[1.4rem] bg-white shadow">
      <div
        className={`bg-gradient-to-t ${col[v]} h-[13.65rem] w-full rounded-t-[1.4rem] p-5 pb-0 ${opacity[v]}`}>
        <div
          className={`flex ${
            v === "v2" ? "flex-row-reverse justify-end" : ""
          } gap-2 pb-5 transition-all duration-[400ms]`}>
          <div className="h-4 w-28 rounded-md bg-white opacity-50" />
          <div className={`${v === "v2" ? "w-5" : "w-12"} h-4 rounded-md bg-white opacity-50`} />
        </div>
        <div
          className={`flex ${
            v !== "v1" ? "flex-row-reverse justify-end" : ""
          } gap-4 transition-all duration-[400ms]`}>
          <div className="h-11 w-11 rounded-[0.625rem] bg-white opacity-70" />
          <div className="h-11 w-36 rounded-[0.625rem] bg-white opacity-70" />
        </div>
        {v === "v3" ? <div className="mt-5 h-11 w-11 rounded-[0.625rem] bg-white opacity-50" /> : ""}
      </div>
      <div className="relative">
        <div className="absolute m-5 mt-9 h-4 w-24 rounded-[0.625rem] bg-[#F5F6F8]" />
        <div className="absolute -top-12 right-3">
          <div className="h-[4.75rem] w-[4.75rem] rounded-full bg-white shadow">
            <div className="flex h-full w-full items-center justify-center">
              <FontAwesomeIcon color="#e6eaef" icon={faPlay} size="xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomIcons({
  v,
  icon = faGraduationCap,
}: {
  v: "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7";
  icon: IconDefinition;
}): JSX.Element {
  const bg = {
    v1: "from-[#4db6ac] to-[#00796b]",
    v2: "from-[#4fc3f7] to-[#2196f3]",
    v3: "from-[#cddc39] to-[#8bc34a]",
    v4: "from-[#ffeb3b] to-[#fbc02d]",
    v5: "from-[#e6ce6a] to-[#b7892b]",
    v6: "from-[#e0e0e0] to-[#bdbdbd]",
    v7: "from-[#f4511e] to-[#b71c1c]",
  };
  const colors = {
    v1: "#34a297",
    v2: "#259af3",
    v3: "#7cb342",
    v4: "#ffb300",
    v5: "#b7892b",
    v6: "#9e9e9e",
    v7: "#34a297",
  };
  return (
    <div className="h-24 w-24">
      <div className="relative mx-auto h-[87px] w-[56px]">
        <div className={`absolute h-[87px] w-[56px] bg-gradient-to-br ${bg[v]} rounded-[0.625rem]`} />
        <div
          className={`absolute h-[87px] w-[56px] bg-gradient-to-br ${bg[v]} rotate-[60deg] rounded-[0.625rem]`}
        />
        <div
          className={`"absolute h-[87px] w-[56px] bg-gradient-to-br ${bg[v]} -rotate-[60deg] rounded-[0.625rem]`}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[53px] w-[53px] rounded-full bg-white text-center">
          <FontAwesomeIcon className="mt-[14px]" color={colors[v]} icon={icon} size="xl" />
        </div>
      </div>
    </div>
  );
}

function DeveloperSection({
  activeTopicId,
  setActiveTopicId,
}: {
  activeTopicId: number;
  setActiveTopicId: (id: number) => void;
}): JSX.Element {
  const listData = [
    { id: 0, name: "Linked List" },
    { id: 1, name: "Binary Tree" },
    { id: 2, name: "Fibonacci" },
  ];
  // const [activeId, setActiveId] = useState<number>(1);
  return (
    <div className="mx-auto mt-20  w-[83.3333%]  pt-3">
      <div className="flex w-full flex-col items-center">
        <CustomIcons icon={faCode} v="v1" />
        <h2 className="font-NimbusSans mb-5 mt-2.5 text-[1.375rem] font-medium text-[#1da09c]">Developer</h2>
        <p className="m-auto max-w-[37.5rem] text-center text-[0.9375rem] font-normal leading-[1.9rem] tracking-normal opacity-30">
          We now support 14 popular coding languages. At our core, NeatCode is about developers. Our powerful
          development tools such as Playground help you test, debug and even write your own projects online.
        </p>
      </div>
      <div className="playground-demo mt-[1.875rem] flex w-full">
        <div className="editor w-[calc(100%-12.5rem)] overflow-hidden rounded-[0.313rem] border-[1px] border-[#dddddd] bg-[#ecf0f1]">
          <EditorDemo topic={listData[activeTopicId].name} />
        </div>
        <div className="list font-NimbusSans ml-5 w-[12.5rem] text-sm font-normal">
          <ul className="w-full">
            {listData.map((topic) => {
              return (
                <button
                  className={`h-[2.625rem] w-full px-2.5 py-[0.688rem] text-left ${
                    activeTopicId === topic.id
                      ? "rounded-[0.313rem] bg-white text-[#1da09c] shadow"
                      : "text-[#1890ff] hover:text-[#3fbbff]"
                  } `}
                  key={topic.id}
                  onClick={() => {
                    setActiveTopicId(topic.id);
                  }}
                  type="button">
                  <FontAwesomeIcon className="pt-1" icon={faCode} width={15} />
                  &nbsp;{topic.name}
                </button>
              );
            })}
          </ul>
          <div className="mt-2.5 w-full cursor-pointer border-t-[1px] border-[#dddddd] px-2.5 py-5 text-[#1890ff] hover:text-[#3fbbff]">
            Create Playground &nbsp;
            <FontAwesomeIcon className="pt-1" icon={faChevronRight} width={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

type Language = "c++" | "java" | "python";
function EditorDemo({ topic }: { topic: string }): JSX.Element {
  const [language, setLanguage] = useState<Language>("c++");
  const [code, setCode] = useState("");
  const languages: Language[] = ["c++", "java", "python"];

  const fetchCode = async (): Promise<void> => {
    try {
      const topicPath = topic.toLowerCase().replace(" ", "-");
      const res = await fetch(`api/templates/${topicPath}/${encodeURIComponent(language)}`);
      const data = (await res.json()) as { code: string };
      setCode(data.code);
    } catch (e) {
      if (e instanceof Error) setCode(`// ${e.message}`);
    }
  };
  useEffect(() => {
    void fetchCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- no need to add fetchCode
  }, [topic, language]);

  return (
    <div className="editor w-full bg-white">
      <div className="toolbar flex w-full items-center justify-between bg-[#ecf0f1] px-2.5 pt-2.5">
        <div className="flex overflow-hidden rounded-t border-[1px] border-b-0 border-[#dddddd] text-[0.813rem]">
          {languages.map((lang, idx) => {
            return (
              <button
                className={`h-9 min-w-[3.438rem] border-b-2 border-t-2 px-[0.313rem] py-1.5 text-center capitalize ${
                  language === lang
                    ? "border-b-white border-t-[#1da09c] bg-white "
                    : "border-b-[#dddddd] border-t-transparent hover:bg-[#fafafa] hover:text-[#333]"
                } 
                ${idx > 0 ? "border-l-2 border-r-[#dddddd]" : ""}
                `}
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                }}
                type="button">
                {lang}
              </button>
            );
          })}
        </div>
        <div className="mb-auto flex text-[0.813rem]">
          <button
            className="mr-1.5 flex h-[1.875rem] items-center rounded border-[1px] border-[#dddd] bg-white px-2 hover:border-[#adadad] hover:bg-[#e6e6e6] hover:text-[#333]"
            type="button">
            <Image alt="paste icon" height={13} src="/paste-icon.svg" width={13} />
            <span className="mt-1">&nbsp; Copy</span>
          </button>
          <button
            className="mr-1.5 flex h-[1.875rem]  items-center rounded border-[1px] border-[#4cae4c] bg-[#5cb85c] px-2 text-white hover:border-[#398439] hover:bg-[#449d44]"
            type="button">
            <FontAwesomeIcon className="my-auto" height={13} icon={faPlayCircle} width={13} />
            <span className="my-1 mt-2">&nbsp; Run</span>
          </button>
          <button
            className="flex h-[1.875rem] items-center rounded border-[1px] border-black bg-black px-2 text-white hover:bg-[#464646]"
            type="button">
            <Image alt="playground icon" height={14} src="/leetcode-playground.png" width={14} />
            <span className="mt-1">&nbsp; Playground</span>
          </button>
        </div>
      </div>
      <div className="editor mb-[0.0625rem] h-[25rem] w-full">
        <EditorPlayground code={code} language={language} setCode={setCode} />
      </div>
    </div>
  );
}

function StorySection(): JSX.Element {
  return <div>Story</div>;
}
