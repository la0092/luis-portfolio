import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSlider from './ProjectsSlider/ProjectsSlider';
import { web, mobile, design } from './Projects.constants';
import { projectsAnim } from './Projects.anim';
import { useChangeDocumentTitle } from '../../helpers/useChangeDocumentTitle';

export default function Projects({ pageTitle }) {
	useChangeDocumentTitle(pageTitle);

	return (
		<motion.section className='projects' variants={projectsAnim} initial='init' animate='anim' exit='end'>
			<ProjectsSlider category='WEB DEV' data={web} />
			<ProjectsSlider category='MOBILE DEV' data={mobile} />
			<ProjectsSlider category='DESIGN' data={design} />
		</motion.section>
	);
}
