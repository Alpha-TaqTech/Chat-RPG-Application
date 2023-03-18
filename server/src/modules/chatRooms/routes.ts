/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import authenticate from '../../middlewares/authenticate';
import * as chatRoomControllers from './controllers';

const router = Router();

router.post('/new-chatroom/:feedMessageId', authenticate, chatRoomControllers.createChatRoom);
router.get('/chatroom-feed/:feedMessageId', authenticate, chatRoomControllers.getChatRoomByFeed);
router.get('/chatroom-id/:chatRoomId', authenticate, chatRoomControllers.getChatRoomById);
router.get('/chatroom-owner/:ownerId', authenticate, chatRoomControllers.getChatRoomByOwner);
router.get('/chatroom-user', authenticate, chatRoomControllers.getChatRoomByUser);
router.get('/chatroom-list', authenticate, chatRoomControllers.getChatRoomListByUser);
router.put('/chatroom-player', authenticate, chatRoomControllers.addChatRoomPlayer);

export default router;
