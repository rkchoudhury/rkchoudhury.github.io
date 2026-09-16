import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./style.css";

interface IProps {
    title: string;
    icon: string;
    organisation?: string;
    stack: string[];
    description: React.JSX.Element | string;
    github?: string;
    period?: string;
}

const ProjectCard = (props: IProps) => {
    const { title, icon, organisation, description, stack, github, period } = props;

    return (
        <motion.article
            className="project-card"
            key={title}
            whileHover={{ y: -7 }}
            transition={{ duration: .2 }}
        >
            <div className="project-top">
                <span>{icon}</span>
                {organisation && <small>{organisation}</small>}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tags">{stack.map((s) => <span key={s}>{s}</span>)}</div>
            {github && (
                <div className="project-footer">
                    <span>{period}</span>
                    <a href={github} target="_blank" rel="noreferrer">
                        Source <ArrowUpRight size={15} />
                    </a>
                </div>
            )}
        </motion.article>
    );
}

export default ProjectCard;