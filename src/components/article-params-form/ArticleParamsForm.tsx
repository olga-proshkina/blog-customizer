import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { useState } from 'react';
import { RadioGroup } from 'src/ui/radio-group';
import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { Separator } from 'src/ui/separator';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	// ArticleStateType,
	// defaultArticleState,
} from 'src/constants/articleProps';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedFont, setSelectedFont] = useState(fontFamilyOptions[0]);
	const [selectedFontSize, setSelectedFontSize] = useState(fontSizeOptions[0]);
	const [selectedFontColor, setSelectedFontColor] = useState(fontColors[0]);
	const [selectedBackgroundColor, setBackgroundColor] = useState(
		backgroundColors[0]
	);
	const [selectedContentStyle, setSelectedContentStyle] = useState(
		contentWidthArr[0]
	);

	// const handleApply = () => {
	// 	styles={'--font-family': selectedFont.value,
	// 	'--font-size': selectedFontSize.value,
	// 	'--font-color': selectedFontColor.value,
	// 	'--container-width': selectedContentStyle.value,
	// 	'--bg-color': selectedBackgroundColor.value}
	// };
	// const handleClear = () => {

	// 	handleApply();
	// };

	// const handleClear = () => {

	// 	handleApply();
	// };

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<h2 className={styles.title}>Задайте параметры</h2>
					<Select
						selected={selectedFont}
						onChange={setSelectedFont}
						options={fontFamilyOptions}
						title='Шрифт'
					/>
					<RadioGroup
						selected={selectedFontSize}
						name='font-size'
						onChange={setSelectedFontSize}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>
					<Select
						selected={selectedFontColor}
						onChange={setSelectedFontColor}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={selectedBackgroundColor}
						onChange={setBackgroundColor}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Select
						selected={selectedContentStyle}
						onChange={setSelectedContentStyle}
						options={contentWidthArr}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							// onClick={handleClear}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							// onClick={handleApply}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
