import { Request, Response } from 'express';
import { addChatRoomPlayerId } from '../services';
import { ICharacter } from '../interface';
import { webSocketInitializer } from '../../../index';
import { AuthenticatedUserDataRequest } from '../../../interfaces';

export async function addChatRoomPlayer(req: Request, res: Response): Promise<void> {
  const param: ICharacter = req.body;

  if (!param.playerId) {
    param.playerId = (req as AuthenticatedUserDataRequest).userId;
  }

  const chatRoom = await addChatRoomPlayerId(param);

  if (!chatRoom.error) {
    const roomId = param.chatRoomId.toString();
    const clients = webSocketInitializer.roomClients.get(roomId) || [];
    const clientws = webSocketInitializer.userClients.get(param.playerId.toString());
    clients.push(clientws);
    webSocketInitializer.roomClients.set(roomId, clients);

    res.status(200).json(chatRoom);
    return;
  }

  res.status(chatRoom.error).json(chatRoom.message);
  return;
}
