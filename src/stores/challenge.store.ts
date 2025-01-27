import { create } from 'zustand';

type ChallengeData = {
  title: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
};

type ChallengeStore = {
  challenge: ChallengeData;
  setChallenge: (data: Partial<ChallengeData>) => void;
};

const useChallengeStore = create<ChallengeStore>((set) => ({
  challenge: {
    title: '',
    description: '',
    startDate: null,
    endDate: null,
  },
  setChallenge: (data: Partial<ChallengeData>) =>
    set((state) => ({
      challenge: { ...state.challenge, ...data },
    })),
}));

export default useChallengeStore;
