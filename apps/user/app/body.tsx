import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faPlay,
  faTrophy,
  faUsers,
  faBriefcase,
  faBuilding,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
// import { ExploreCard } from "@neatcode/ui";

export default function Body(): JSX.Element {
  return (
    <div>
      <div className="explore-section-container min-h-[400px] mt-[20px]">
        {/* <div className="explore-section"> */}
        <div className="explore-section-content flex w-full px-[140px]">
          <div className="w-[596px] h-full flex flex-col items-end pr-8">
            <div className="w-full h-24 flex justify-end items-center text-[#1da09c]">
              <h2 className="text-2xl mr-6 font-normal">Start Exploring</h2>
              <div className="w-16 h-16">
                <div className="relative w-[38px] h-full mx-auto">
                  <div className="absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br from-[#4db6ac] to-[#00796b] rounded-[0.625rem] text-[#34a297]" />
                  <div className="absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br from-[#4db6ac] to-[#00796b] rounded-[0.625rem] text-[#34a297] rotate-[60deg]" />
                  <div className="absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br from-[#4db6ac] to-[#00796b] rounded-[0.625rem] text-[#34a297] -rotate-[60deg]" />
                  <div className="absolute top-[12px] left-[1px]  w-9 h-9 bg-white rounded-full pl-[6px] pt-[5px] ">
                    <FontAwesomeIcon
                      color="#34a297"
                      height={18}
                      icon={faGraduationCap}
                      width={24}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="w-full text-right text-[0.9375rem] font-normal opacity-50 leading-7 pr-9">
              Explore is a well-organized tool that helps you get the most out
              of NeatCode by providing structure to guide your progress towards
              the next step in your programming career.
            </p>
            <div className="w-full h-10 ">
              <p className="text-[0.9375rem] font-normal text-[#1890ff] pr-9 pt-4 flex justify-end items-center">
                <span className="text-sm">Get Started &nbsp;</span>
                <FontAwesomeIcon icon={faChevronRight} width={5} />
              </p>
            </div>
          </div>
          <div className="relative explore-cards-container w-1/2 h-full transition-all delay-[400ms]">
            <div className="absolute scale-50">
              <div className="animate-float">
                <ExploreCard v="v3" />
              </div>
            </div>
            <div className="absolute scale-75 left-20">
              <div className="animate-float animation-delay-[800ms]">
                <ExploreCard v="v2" />
              </div>
            </div>
            <div className="absolute left-44 animate-float animation-delay-[1600ms]">
              <ExploreCard v="v1" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="feature-section-container w-[73.125rem] h-80 mx-auto px-1 flex">
        <div className="w-1/2 h-full border-r-2 border-r-white px-12">
          <div className="relative w-full h-[5.785rem] flex items-center">
            <div className="absolute left-20">
              <CustomIcons icon={faTrophy} v="v4" />
            </div>
            <div className="absolute left-10">
              <CustomIcons icon={faUsers} v="v3" />
            </div>
            <div className="absolute">
              <div className="w-16 h-16">
                <div className="relative w-[38px] h-full mx-auto">
                  <div className="absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br from-[#2196f3] to-[#4fc3f7] rounded-[0.5rem]" />
                  <div className="absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br from-[#2196f3] to-[#4fc3f7] rounded-[0.5rem] rotate-[60deg]" />
                  <div className="absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br from-[#2196f3] to-[#4fc3f7] rounded-[0.5rem] -rotate-[60deg]" />
                  <div className="absolute top-[12px] left-[1px]  w-9 h-9 bg-white rounded-full pl-[0.1rem] pt-[5px] ">
                    <b className="text-[#259af3] font-TypoRound text-sm text-center">
                      3200
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mt-2.5 mb-5 font-NimbusSans text-[1.375rem] text-[#1890ff] font-medium">
              Questions, Community & Contests
            </h2>
            <p className="text-[0.9375rem] leading-[1.9rem] tracking-normal opacity-30 font-normal">
              Over 3200 questions for you to practice. Come and join one of the
              largest tech communities with hundreds of thousands of active
              users and participate in our contests to challenge yourself and
              earn rewards.
            </p>
          </div>
          <div className="w-full text-[#1890ff] mt-4">
            <p className="flex items-center text-[0.9375rem] font-normal">
              <span>View Questions &nbsp;</span>
              <FontAwesomeIcon icon={faChevronRight} width={5} />
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full px-12">
          <div className="relative w-full h-[5.785rem] flex items-center">
            <div className="absolute ml-10">
              <CustomIcons icon={faBuilding} v="v6" />
            </div>
            <div className="absolute">
              <CustomIcons icon={faBriefcase} v="v5" />
            </div>
          </div>
          <div>
            <h2 className="mt-2.5 mb-5 font-NimbusSans text-[1.375rem] text-[#b7892b] font-medium">
              Companies & Candidates
            </h2>
            <p className="text-[0.9375rem] leading-[1.9rem] tracking-normal opacity-30 font-normal">
              Not only does LeetCode prepare candidates for technical
              interviews, we also help companies identify top technical talent.
              From sponsoring contests to providing online assessments and
              training, we offer numerous services to businesses.
            </p>
          </div>
          <div className="w-full text-[#1890ff] mt-4">
            <p className="flex text-[0.9375rem] items-center font-normal">
              <span>Business Opportunities &nbsp;</span>
              <FontAwesomeIcon icon={faChevronRight} width={5} />
            </p>
          </div>
        </div>
      </div>
      <div className="developer-section-container">developer</div>
      <div className="story-section-container">story</div>
    </div>
  );
}

export function ExploreCard({
  v = "v1",
}: {
  v: "v1" | "v2" | "v3";
}): JSX.Element {
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
    <div className="explore-card w-64 h-[19rem] rounded-[1.4rem] bg-white shadow rotY">
      <div
        className={`bg-gradient-to-t ${col[v]} w-full h-[13.65rem] rounded-t-[1.4rem] p-5 pb-0 ${opacity[v]}`}
      >
        <div
          className={`flex ${
            v === "v2" ? "flex-row-reverse justify-end" : ""
          } pb-5 gap-2`}
        >
          <div className="w-28 h-4 bg-white opacity-50 rounded-md" />
          <div
            className={`${
              v === "v2" ? "w-5" : "w-12"
            } h-4 bg-white opacity-50 rounded-md`}
          />
        </div>
        <div
          className={`flex ${
            v !== "v1" ? "flex-row-reverse justify-end" : ""
          } gap-4`}
        >
          <div className="w-11 h-11 bg-white opacity-70 rounded-[0.625rem]" />
          <div className="w-36 h-11 bg-white opacity-70 rounded-[0.625rem]" />
        </div>
        {v === "v3" ? (
          <div className="w-11 h-11 bg-white opacity-50 rounded-[0.625rem] mt-5" />
        ) : (
          ""
        )}
      </div>
      <div className="relative">
        <div className="absolute w-24 h-4 bg-[#F5F6F8] m-5 mt-9 rounded-[0.625rem]" />
        <div className="absolute -top-12 right-3">
          <div className="w-[4.75rem] h-[4.75rem] rounded-full bg-white shadow">
            <div className="w-full h-full flex justify-center items-center">
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
    v1: "from-[#4db6ac] to-[#00796b] ",
    v2: "from-[#2196f3] to-[#4fc3f7] ",
    v3: "from-[#cddc39] to-[#8bc34a] ",
    v4: "from-[#ffeb3b] to-[#fbc02d] ",
    v5: "from-[#e6ce6a] to-[#b7892b] ",
    v6: "from-[#e0e0e0] to-[#bdbdbd] ",
    v7: "from-[#f4511e] to-[#b71c1c] ",
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
    <div className="w-16 h-16">
      <div className="relative w-[38px] h-full mx-auto">
        <div
          className={`absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br ${bg[v]} rounded-[0.5rem]`}
        />
        <div
          className={`absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br ${bg[v]} rounded-[0.5rem] rotate-[60deg]`}
        />
        <div
          className={`"absolute w-[38px] h-[60px] p-0 m-0 bg-gradient-to-br ${bg[v]} rounded-[0.5rem] -rotate-[60deg]`}
        />
        <div className="absolute top-[12px] left-[1px]  w-9 h-9 bg-white rounded-full pl-[6px] pt-[5px] ">
          <FontAwesomeIcon
            color={colors[v]}
            height={18}
            icon={icon}
            width={24}
          />
        </div>
      </div>
    </div>
  );
}
