import { Dimensions, StyleSheet } from 'react-native';
import ultimatePlayerTheme from '@utils/theme';

const screenWidth = Dimensions.get('window').width;

const feedPostCardStyles = StyleSheet.create({
  card: {
    backgroundColor: ultimatePlayerTheme.colors.card,
    paddingLeft: 0,
    paddingRight: 0,
    padding: 16,
    marginVertical: 0,
    borderTopWidth: 0.15,
    borderTopColor: '#2E2E2E',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3a3a3c',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#F5F5F7',
    fontWeight: 'bold',
  },
  username: {
    color: '#F5F5F7',
    fontWeight: '600',
    fontSize: 16,
  },
  description: {
    color: '#A1A1A3',
    fontSize: 14,
  },
  challengeName: {
    fontWeight: 'bold',
    color: '#F5F5F7',
  },
  body: {
    marginBottom: 0,
    padding: 4,
  },
  taskTitle: {
    color: '#F5F5F7',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  loggedTime: {
    color: '#A1A1A3',
    fontSize: 14,
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
  imageWrapper: {
    width: screenWidth - 8,
    aspectRatio: 4 / 5,
    overflow: 'hidden',
    position: 'relative',
  },
  heartAnimation: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -110 }, { translateY: -110 }],
    zIndex: 2,
    opacity: 0.7,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 8,
  },
  timeAgo: {
    color: '#A1A1A3',
    fontSize: 12,
    paddingBottom: 8,
    paddingRight: 8,
    paddingTop: 8,
    alignSelf: 'center',
    alignContent: 'flex-end',
  },
  actions: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    padding: 8,
  },
  actionText: {
    color: '#F5F5F7',
    marginLeft: 8,
    fontSize: 18,
  },
});

export default feedPostCardStyles;
