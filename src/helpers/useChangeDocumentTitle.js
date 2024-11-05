import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Luis Alonso | Personal Portfolio - ${pageTitle}`;
	}, [pageTitle]);
};
