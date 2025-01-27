import { useState } from 'react';
import { ScrollView } from 'react-native';
import FeedPostCard from '@components/feed/FeedPostCard';

const feedItems = [
  {
    id: 1,
    user: { name: 'Alice', avatar: 'A' },
    challengeId: '1',
    challenge: '30-Day Fitness Challenge',
    task: '30-minute cardio',
    content: 'Completed my cardio session for today! Feeling great!',
    timestamp: '1 minute ago',
    images: [
      'https://picsum.photos/1080/1350',
      'https://picsum.photos/1080/1350?text=Image+2',
      'https://picsum.photos/1080/1350?text=Image+3',
    ],
    likes: 22,
    logged: '35 minutes', // O usuário registrou 35 minutos
  },
  {
    id: 2,
    user: { name: 'Bob', avatar: 'B' },
    challengeId: '2',
    challenge: 'Reading Challenge',
    task: 'Read for 1 hour',
    content: 'Finished another chapter of my book. Making good progress!',
    timestamp: '4 hours ago',
    images: [
      'https://picsum.photos/1080/1350',
      'https://picsum.photos/1080/1350?text=Image+2',
      'https://picsum.photos/1080/1350?text=Image+3',
    ],
    likes: 0,
    logged: '1.5 hours', // O usuário registrou 1 hora e meia
  },
  {
    id: 3,
    user: { name: 'Charlie', avatar: 'C' },
    challengeId: '1',
    challenge: '30-Day Fitness Challenge',
    task: 'Cook a nutritious meal',
    content: 'Prepared a delicious and healthy dinner tonight!',
    timestamp: '6 hours ago',
    images: [
      'https://picsum.photos/1080/1350',
      'https://picsum.photos/1080/1350?text=Image+2',
      'https://picsum.photos/1080/1350?text=Image+3',
    ],
    likes: 0,
    logged: null, // Nenhum dado logado para essa tarefa
  },
  {
    id: 4,
    user: { name: 'Diana', avatar: 'D' },
    challengeId: '3',
    challenge: 'Hydration Challenge',
    task: 'Drink 2 liters of water',
    content: 'Hit my hydration goal for the day! Feeling refreshed!',
    timestamp: '1 hour ago',
    images: [
      'https://picsum.photos/1080/1350',
      'https://picsum.photos/1080/1350?text=Image+2',
      'https://picsum.photos/1080/1350?text=Image+3',
    ],
    likes: 0,
    logged: '2.2 liters', // O usuário registrou 2.2 litros
  },
  {
    id: 5,
    user: { name: 'Eve', avatar: 'E' },
    challengeId: '4',
    challenge: 'Meditation Challenge',
    task: 'Meditate for 10 minutes',
    content: 'Had a peaceful and calming meditation session this morning.',
    timestamp: '3 hours ago',
    images: [
      'https://picsum.photos/1080/1350',
      'https://picsum.photos/1080/1350?text=Image+2',
      'https://picsum.photos/1080/1350?text=Image+3',
    ],
    likes: 0,
    logged: '12 minutes', // O usuário registrou 12 minutos
  },
  {
    id: 6,
    user: { name: 'Frank', avatar: 'F' },
    challengeId: '1',
    challenge: '30-Day Fitness Challenge',
    task: 'Stretching and flexibility',
    content: 'Feeling much better after a good stretching session.',
    timestamp: '5 hours ago',
    images: [
      'https://picsum.photos/1080/1350',
      'https://picsum.photos/1080/1350?text=Image+2',
      'https://picsum.photos/1080/1350?text=Image+3',
    ],
    likes: 0,
    logged: '15 minutes', // O usuário registrou 15 minutos
  },
  {
    id: 7,
    user: { name: 'Grace', avatar: 'G' },
    challengeId: '5',
    challenge: 'Healthy Cooking Challenge',
    task: 'Prepare a vegan meal',
    content: 'Tried a new vegan recipe today, and it turned out amazing!',
    timestamp: '7 hours ago',
    images: [
      'https://picsum.photos/1080/1350',
      'https://picsum.photos/1080/1350?text=Image+2',
      'https://picsum.photos/1080/1350?text=Image+3',
    ],
    likes: 0,
    logged: 'done', // Nenhum dado logado para essa tarefa
  },
  {
    id: 8,
    user: { name: 'Henry', avatar: 'H' },
    challengeId: '2',
    challenge: 'Reading Challenge',
    task: 'Read for 1 hour',
    content: 'Got lost in the story! Can’t wait to read more tomorrow.',
    timestamp: '8 hours ago',
    images: [
      'https://picsum.photos/1080/1350',
      'https://picsum.photos/1080/1350?text=Image+2',
      'https://picsum.photos/1080/1350?text=Image+3',
    ],
    likes: 0,
    logged: '2 hours', // O usuário registrou 2 horas
  },
  {
    id: 9,
    user: { name: 'Ivy', avatar: 'I' },
    challengeId: '6',
    challenge: 'Step Count Challenge',
    task: '10,000 steps',
    content: 'Hit my step goal for the day! Great walk with beautiful views.',
    timestamp: '2 hours ago',
    images: [
      'https://picsum.photos/1080/1350',
      'https://picsum.photos/1080/1350?text=Image+2',
      'https://picsum.photos/1080/1350?text=Image+3',
    ],
    likes: 0,
    logged: '12,000 steps', // O usuário registrou 12,000 passos
  },
  {
    id: 10,
    user: { name: 'Jack', avatar: 'J' },
    challengeId: '7',
    challenge: 'Creative Writing Challenge',
    task: 'Write for 30 minutes',
    content:
      'Finished writing the outline of my short story. Feeling inspired!',
    timestamp: '6 hours ago',
    images: [
      'https://picsum.photos/1080/1350',
      'https://picsum.photos/1080/1350?text=Image+2',
      'https://picsum.photos/1080/1350?text=Image+3',
    ],
    likes: 0,
    logged: '40 minutes', // O usuário registrou 40 minutos
  },
];

export default function FeedScreen() {
  const [items, setItems] = useState(feedItems);

  return (
    <ScrollView>
      {items.map((item) => (
        <FeedPostCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
}
