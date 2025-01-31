import React from 'react';
import { SvgProps } from 'react-native-svg';
import HomeIcon from '@assets/icons/home.svg';
import CheckBoxIcon from '@assets/icons/select_check_box.svg';
import AddBoxIcon from '@assets/icons/add_box.svg';
import TrophyIcon from '@assets/icons/trophy.svg';
import LeaderboardIcon from '@assets/icons/leaderboard.svg';
import ultimatePlayerTheme from 'src/core/utils/theme';

type TabBarIconProps = {
  route: string;
  focused: boolean;
  size: number;
};

const icons: Record<string, React.FC<SvgProps>> = {
  Feed: HomeIcon,
  Tasks: CheckBoxIcon,
  CreateChallenge: AddBoxIcon,
  Challenges: TrophyIcon,
  Rankings: LeaderboardIcon,
};

const TabBarIcon: React.FC<TabBarIconProps> = ({ route, focused, size }) => {
  const IconComponent = icons[route];
  const fill = focused ? ultimatePlayerTheme.colors.text : ultimatePlayerTheme.colors.inactive;

  return IconComponent ? <IconComponent width={size} height={size} fill={fill} /> : null;
};

export default TabBarIcon;
