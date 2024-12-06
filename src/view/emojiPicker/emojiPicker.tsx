import { useState } from 'react';
import {
    Container,
    TabList,
    Tab,
    SearchBar,
    EmojiGrid,
    EmojiItem
} from './emojiPicker.style';
import { observer } from 'mobx-react';
import { TemplateStore } from '../../mobx/templateStore';

interface EmojiPickerViewProps {
    templateStore: TemplateStore;
    onSelect: (emoji: string) => void;
}

const EmojiPicker: React.FC<EmojiPickerViewProps> = ({ templateStore, onSelect }) => {
    const [activeCategory, setActiveCategory] = useState<string>(Object.keys(templateStore.emojis)[0]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const SEARCH_PLACEHOLDER = 'Search emoji...';

    const filteredEmojis = searchTerm
        ? Object.values(templateStore.emojis).flat().filter(emoji => 
            emoji.toLowerCase().includes(searchTerm.toLowerCase()))
        : templateStore.emojis[activeCategory];

    if (templateStore.emojis.isEmpty) return <></>;
    
    return (
        <Container>
            <TabList>
                {Object.keys(templateStore.emojis).map(category => (
                    <Tab
                        key={category}
                        $isActive={category === activeCategory}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </Tab>
                ))}
            </TabList>
            <SearchBar
                placeholder={SEARCH_PLACEHOLDER}
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
            <EmojiGrid>
                {filteredEmojis.map((emoji: string, index: number) => (
                    <EmojiItem
                        key={index}
                        onClick={() => onSelect(emoji)}
                    >
                        {emoji}
                    </EmojiItem>
                ))}
            </EmojiGrid>
        </Container>
    );
};

export default observer(EmojiPicker);