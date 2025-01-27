import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { Pressable } from 'react-native';
import TabBarIcon from '@components/common/TabBarIcon';
import ChallengesScreen from '@screens/app/challenges/ChallengesScreen';
import FeedScreen from '@screens/app/feed/FeedScreen';
import RankingScreen from '@screens/app/rankings/RankingsScreen';
import TasksScreen from '@screens/app/tasks/TasksScreen';
import { tabBarStyle, tabBarButtonStyle } from '@styles/TabNavigator.styles';
import CreateChallengeNavigator from './CreateChallengeNavigator';

const Tab = createBottomTabNavigator();

const screenOptions = ({
  route,
}: {
  route: any;
}): BottomTabNavigationOptions => ({
  tabBarShowLabel: false,
  headerTitleStyle: { fontSize: 18, fontWeight: '900', fontStyle: 'italic' },
  tabBarStyle,
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBarIcon route={route.name} focused={focused} size={32} />
  ),
  tabBarButton: (props: any) => (
    <Pressable
      {...props}
      android_ripple={null}
      style={() => [props.style, tabBarButtonStyle]}
    />
  ),
});

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{ title: 'Ultimate Player' }}
      />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen
        name="CreateChallenge"
        component={CreateChallengeNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Challenges" component={ChallengesScreen} />
      <Tab.Screen name="Rankings" component={RankingScreen} />
    </Tab.Navigator>
  );
}
