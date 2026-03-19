import { Article } from 'src/components/article/Article';
import clsx from 'clsx';
import { ArticleParamsForm } from 'src/components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from 'src/constants/articleProps';
import styles from 'src/components/app/app.module.scss';
import { CSSProperties, useState } from 'react';
import 'src/styles/index.scss';

export const App = () => {
	const [articleState, setArticleState] = useState<ArticleStateType>({
		...defaultArticleState,
	});
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setArticleState={setArticleState} />
			<Article />
		</main>
	);
};
