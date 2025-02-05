import type { Question } from '@/domain/forum/enterprise/entities/question'
import { QuestionDetails } from '@/domain/forum/enterprise/entities/value-objects/question-details'
import { AttachmentPresenter } from './attachment-presenter'

export class QuestionDetailsPresenter {
  static toHTTP(questionDetails: QuestionDetails) {
    return {
      id: questionDetails.questionId.toString(),
      authorId: questionDetails.authorId.toString(),
      author: questionDetails.author,
      title: questionDetails.title,
      slug: questionDetails.slug.value,
      bestAnswerId: questionDetails.bestAnswerId?.toString(),
      createdAt: questionDetails.createdAt,
      updatedAt: questionDetails.updatedAt,
      attachments: questionDetails.attachments.map(AttachmentPresenter.toHTTP)
    }
  }
}
