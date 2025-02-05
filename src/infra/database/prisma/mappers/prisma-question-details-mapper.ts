import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-author'
import { QuestionDetails } from '@/domain/forum/enterprise/entities/value-objects/question-details'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'
import {
  Attachment as PrismaAttachment,
  Question as PrismaQuestion,
  type User as PrismaUser
} from '@prisma/client'
import { PrismaAttachmentMapper } from './prisma-attachment-mapper'

type PrismaQuestionDetails = PrismaQuestion & { 
    author: PrismaUser
    attachments: PrismaAttachment[]
}

export class PrismaQuestionDetailsMapper {
  static toDomain(raw: PrismaQuestionDetails): QuestionDetails {
    return QuestionDetails.create({
      questionId: new UniqueEntityID(raw.id),
      authorId: new UniqueEntityID(raw.authorId),
      title: raw.title,
      content: raw.content,
      slug: Slug.create(raw.slug),
      author: raw.author.name,
      createdAt: raw.createdAt,
      bestAnswerId: raw.bestAnswerId ? new UniqueEntityID(raw.bestAnswerId) : null,
      updatedAt: raw.updatedAt,
      attachments: raw.attachments.map(PrismaAttachmentMapper.toDomain)
    })
  }
}
