import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import feedPostCardStyles from 'src/modules/feed/components/FeedPostCard.styles';

interface FeedPostCardProps {
  item: {
    id: number;
    user: { name: string; avatar: string };
    challengeId: string;
    challenge: string;
    task: string;
    content: string;
    timestamp: string;
    images: string[];
    logged: string | null;
    likes: number;
  };
}

export default function FeedPostCard({ item }: FeedPostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(item.likes);
  const [showHeart, setShowHeart] = useState(false);

  let tapTimer: any;

  const handleLike = () => {
    setLiked((prevLiked) => {
      const isLiked = !prevLiked;
      setLikeCount((prevCount) => (isLiked ? prevCount + 1 : prevCount - 1));
      return isLiked;
    });
  };

  const handleDoubleTap = () => {
    if (tapTimer) {
      clearTimeout(tapTimer);
      tapTimer = null;
      handleLike();
      triggerHeartAnimation();
    } else {
      tapTimer = setTimeout(() => {
        tapTimer = null;
      }, 300);
    }
  };

  const triggerHeartAnimation = () => {
    setShowHeart(true);
    setTimeout(() => {
      setShowHeart(false);
    }, 600);
  };

  return (
    <View key={item.id} style={feedPostCardStyles.card}>
      {/* Header */}
      <View style={feedPostCardStyles.header}>
        <View style={feedPostCardStyles.avatar}>
          <Text style={feedPostCardStyles.avatarText}>{item.user.avatar}</Text>
        </View>
        <View>
          <Text style={feedPostCardStyles.username}>{item.user.name}</Text>
          <Text style={feedPostCardStyles.description}>
            completed a task in{' '}
            <Text style={feedPostCardStyles.challengeName}>
              {item.challenge}
            </Text>
          </Text>
        </View>
      </View>

      {/* Task Details */}
      <View style={feedPostCardStyles.body}>
        <Text style={feedPostCardStyles.taskTitle}>{item.task}</Text>
        <Text style={feedPostCardStyles.loggedTime}>Logged: {item.logged}</Text>
        <FlatList
          data={item.images}
          horizontal
          keyExtractor={(image, index) => `${item.id}-image-${index}`}
          renderItem={({ item: image }) => (
            <TouchableWithoutFeedback onPress={handleDoubleTap}>
              <View style={feedPostCardStyles.imageWrapper}>
                <Image
                  source={{ uri: image }}
                  style={feedPostCardStyles.image}
                />
              </View>
            </TouchableWithoutFeedback>
          )}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
      </View>

      {/* Footer */}
      <View style={feedPostCardStyles.footer}>
        <View style={feedPostCardStyles.actions}>
          <TouchableOpacity
            style={feedPostCardStyles.actionButton}
            onPress={() => handleLike()}
          >
            <FontAwesome
              name="heart"
              size={18}
              color={liked ? 'red' : '#F5F5F7'}
            />
            <Text style={feedPostCardStyles.actionText}>{likeCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={feedPostCardStyles.actionButton}>
            <FontAwesome name="comments" size={18} color="#F5F5F7" />
            <Text style={feedPostCardStyles.actionText}>3</Text>
          </TouchableOpacity>
        </View>
        <Text style={feedPostCardStyles.timeAgo}>{item.timestamp}</Text>
      </View>
    </View>
  );
}
