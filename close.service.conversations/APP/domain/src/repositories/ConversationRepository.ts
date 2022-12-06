import Conversation from '../models/Conversation';
import Id from '../ValueObjects/Id';

export default interface ConversationRepository {
  get(id: Id): Promise<Conversation>
  save(conversation: Conversation): Promise<Conversation>;
  update(conversation: Conversation): Promise<Conversation>;
  delete(id: Id): Promise<void>;
  list(): Promise<Conversation[]>;
}