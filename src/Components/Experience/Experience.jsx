import { VerticalTimeline , VerticalTimelineElement, } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from './constants';
import { SectionWrapper } from './hoc';
import { textVariant } from './utils/motion';
  
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
    background: '#fff',
    color: '#000',
    boxShadow:'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #fff',
    }}
    date={
      <div>
        <h3 className="text-red-600 text-[20px] font-bold ">{experience.date}</h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[70%] h-[70%] object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-[24px] font-bold font-beckman tracking-[2px]">{experience.title}</h3>
      <p
        className="text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    </VerticalTimelineElement>
  );
  
  const Experience = () => {
    const title ="Education"
    return (
      <>
      <div name ="Experience">
        <motion.div variants={textVariant()} >
          <div className='flex flex-col w-full gap-3 z-10'>
            <h1 className='text-7xl font-bold text-red-500'>          
              {title.split("").map((char, index) => {
                if(char === " ") {
                  return " ";
                }
                return <span key={index} className="bounce">{char}</span>
                })
            }
            </h1>
            <h2 className='text-white text-5xl'>academic career</h2>
          </div>
        </motion.div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline className="vertical-timeline-custom-line">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
            </VerticalTimeline>
        </div>
      </div>
      </>
    );
  };
  
  export default SectionWrapper(Experience, '');
  