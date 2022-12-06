import ConversationRequest from '../models/ConversationRequest';
import Id from '../ValueObjects/Id';

export default interface MessageRequestRepository {
  get(id: Id): Promise<ConversationRequest>
  save(messageRequest: ConversationRequest): Promise<ConversationRequest>;
  update(messageRequest: ConversationRequest): Promise<ConversationRequest>;
  list(): Promise<ConversationRequest[]>
  delete(id: Id): Promise<void>;
}