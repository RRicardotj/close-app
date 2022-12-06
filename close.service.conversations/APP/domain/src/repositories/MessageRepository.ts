import Message from '../models/Message';
import Id from '../ValueObjects/Id';

export default interface MessageRepository {
  get(id: Id): Promise<Message>
  save(message: Message): Promise<Message>;
  update(message: Message): Promise<Message>;
  delete(id: Id): Promise<void>;
  list(): Promise<Message[]>;
}