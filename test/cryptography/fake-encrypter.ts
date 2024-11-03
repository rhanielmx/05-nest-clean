import type { Encrypter } from '@/domain/forum/application/cryptography/encypter'
import type { HashComparer } from '@/domain/forum/application/cryptography/hash-comparer'
import type { HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'

export class FakeEncrypter implements Encrypter {
  async encrypt(payload: Record<string, unknown>): Promise<string> {
    return JSON.stringify(payload)
  }
}
