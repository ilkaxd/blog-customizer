import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';

import { useState } from 'react';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

// type ArticleParamsFormProps = {};

export const ArticleParamsForm = () => {
	// TODO: Верни на False
	const [open, setOpen] = useState(true);

	const toggleOpen = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const className = clsx(styles.container, {
		[styles.container_open]: open,
	});

	return (
		<>
			<ArrowButton onClick={toggleOpen} />
			<aside className={className}>
				<form className={styles.form}>
					<Text as={'h2'} size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						selected={fontFamilyOptions[0]} // TODO: Перенести в пропс
						options={fontFamilyOptions}
						placeholder='Выберите шрифт'
						title='шрифт'
					/>
					<RadioGroup
						name={'fontSize'}
						options={fontSizeOptions}
						selected={fontSizeOptions[0]} // TODO: Перенести в пропс
						title={'размер шрифта'}
					/>
					<Select
						selected={fontColors[0]} // TODO: Перенести в пропс
						options={fontColors}
						placeholder='Выберите цвет'
						title='цвет шрифта'
					/>
					<Separator />
					<Select
						selected={backgroundColors[0]} // TODO: Перенести в пропс
						options={backgroundColors}
						placeholder='Выберите цвет'
						title='цвет фона'
					/>
					<Select
						selected={contentWidthArr[0]} // TODO: Перенести в пропс
						options={contentWidthArr}
						placeholder='Выберите ширину'
						title='ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
