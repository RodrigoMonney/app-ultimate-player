import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { Pressable } from 'react-native';
import TabBarIcon from 'src/shared/components/TabBarIcon';
import {
  tabBarStyle,
  tabBarButtonStyle,
} from 'src/core/styles/TabNavigator.styles';
import ChallengesScreen from 'src/modules/challenges/screens/ChallengesScreen';
import FeedScreen from 'src/modules/feed/FeedScreen';
import RankingScreen from 'src/modules/rankings/RankingsScreen';
import TasksScreen from 'src/modules/tasks/TasksScreen';
import CreateChallengeNavigator from '../../modules/challenges/navigation/CreateChallengeNavigator';

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
