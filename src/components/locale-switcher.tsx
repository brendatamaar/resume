import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './locale-switcher-select';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect
            defaultValue={locale}
            items={[
                {
                    value: 'en',
                    label: t('en')
                },
                {
                    value: 'id',
                    label: t('id')
                }
            ]}
            label={t('label')}
            placeholder={t('placeholder')}
        />
    );
}