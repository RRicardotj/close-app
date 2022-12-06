import MessageRequest from '../models/MessageRequest';
import Id from '../ValueObjects/Id';

export default interface MessageRequestRepository {
  get(id: Id): Promise<MessageRequest>
  save(messageRequest: MessageRequest): Promise<MessageRequest>;
  update(messageRequest: MessageRequest): Promise<MessageRequest>;
  list(): Promise<MessageRequest[]>
  delete(id: Id): Promise<void>;
}