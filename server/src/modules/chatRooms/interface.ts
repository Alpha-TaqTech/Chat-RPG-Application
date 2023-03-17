import { Types } from 'mongoose';
import { PlayerCharacters } from '../users/interface';

export interface ChatRoomsModel {
  feedMessageOrigin: Types.ObjectId;
  owner: Types.ObjectId;
  title: string;
  content: string;
  image?: string;
  numberOfPlayers: number;
  playerCharacters: Omit<PlayerCharacters, 'deletedAt'>[];
  waitingForResponse: boolean;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface ICharacter {
  chatRoomId: Types.ObjectId;
  playerCharacterId: number;
  playerId: Types.ObjectId;
}
