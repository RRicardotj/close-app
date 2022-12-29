import ConversationRequest from '../models/ConversationRequest';
import Id from '../ValueObjects/Id';

export default interface ConversationRequestRepository {
  get(id: Id): Promise<ConversationRequest>
  save(conversationRequest: ConversationRequest): Promise<ConversationRequest>;
  update(conversationRequest: ConversationRequest): Promise<ConversationRequest>;
  list(): Promise<ConversationRequest[]>
  delete(id: Id): Promise<void>;
}