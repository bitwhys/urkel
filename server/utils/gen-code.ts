import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * Timestamp is serialized automatically when sent from our resolvers.
   * It should be a JS timpestamp integer (i.e. the result of Date.now)
 **/
  Timestamp: any,
};

export type Comment = {
  id: Scalars['ID'],
  dateCreated: Scalars['Timestamp'],
  dateUpdated: Scalars['Timestamp'],
  creator: User,
  body: Scalars['String'],
  parnet: CParentType,
  parentType: CommentParentType,
  userPermissions?: Maybe<Permission>,
};

export enum CommentParentType {
  Issue = 'ISSUE',
  Task = 'TASK'
}

export type CParentType = Issue | Task;

export type Issue = Resource & {
   __typename?: 'Issue',
  id: Scalars['ID'],
  dateCreated: Scalars['Timestamp'],
  dateUpdated: Scalars['Timestamp'],
  creator: User,
  title: Scalars['String'],
  body?: Maybe<Scalars['String']>,
  priority: Scalars['String'],
  status: Scalars['String'],
  type: Scalars['String'],
  project: Project,
  tags: Array<Maybe<Scalars['String']>>,
  userPermissions?: Maybe<Permission>,
};

export type IssueComment = Resource & Comment & {
   __typename?: 'IssueComment',
  id: Scalars['ID'],
  dateCreated: Scalars['Timestamp'],
  dateUpdated: Scalars['Timestamp'],
  creator: User,
  body: Scalars['String'],
  parnet: Issue,
  parentType: CommentParentType,
  userPermissions?: Maybe<Permission>,
};

export type Permission = {
   __typename?: 'Permission',
  id: Scalars['ID'],
  userID?: Maybe<Scalars['ID']>,
  level: Scalars['Int'],
  resouceID?: Maybe<Scalars['ID']>,
};

export type Project = Resource & {
   __typename?: 'Project',
  id: Scalars['ID'],
  dateCreated: Scalars['Timestamp'],
  dateUpdated: Scalars['Timestamp'],
  creator: User,
  name: Scalars['String'],
  alias?: Maybe<Scalars['String']>,
  userPermissions?: Maybe<Permission>,
};

export type Query = {
   __typename?: 'Query',
  user: Scalars['String'],
};

export type Resource = {
  id: Scalars['ID'],
  dateCreated: Scalars['Timestamp'],
  dateUpdated: Scalars['Timestamp'],
  creator: User,
  userPermissions?: Maybe<Permission>,
};

export type Task = Resource & {
   __typename?: 'Task',
  id: Scalars['ID'],
  dateCreated: Scalars['Timestamp'],
  dateUpdated: Scalars['Timestamp'],
  creator: User,
  title: Scalars['String'],
  body?: Maybe<Scalars['String']>,
  parent: Issue,
  completed: Scalars['Boolean'],
  userPermissions?: Maybe<Permission>,
};

export type TaskComment = Resource & Comment & {
   __typename?: 'TaskComment',
  id: Scalars['ID'],
  dateCreated: Scalars['Timestamp'],
  dateUpdated: Scalars['Timestamp'],
  creator: User,
  body: Scalars['String'],
  parnet: Task,
  parentType: CommentParentType,
  userPermissions?: Maybe<Permission>,
};


export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  joinDate: Scalars['Timestamp'],
  username: Scalars['String'],
  email: Scalars['String'],
  firstname: Scalars['String'],
  lastname: Scalars['String'],
  avatarUrl?: Maybe<Scalars['String']>,
  bio?: Maybe<Scalars['String']>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>,
  Resource: ResolverTypeWrapper<Resource>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  User: ResolverTypeWrapper<User>,
  Permission: ResolverTypeWrapper<Permission>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Issue: ResolverTypeWrapper<Issue>,
  Project: ResolverTypeWrapper<Project>,
  Task: ResolverTypeWrapper<Task>,
  CommentParentType: CommentParentType,
  CParentType: ResolversTypes['Issue'] | ResolversTypes['Task'],
  Comment: ResolverTypeWrapper<Omit<Comment, 'parnet'> & { parnet: ResolversTypes['CParentType'] }>,
  IssueComment: ResolverTypeWrapper<IssueComment>,
  TaskComment: ResolverTypeWrapper<TaskComment>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Timestamp: Scalars['Timestamp'],
  Resource: Resource,
  ID: Scalars['ID'],
  User: User,
  Permission: Permission,
  Int: Scalars['Int'],
  Issue: Issue,
  Project: Project,
  Task: Task,
  CommentParentType: CommentParentType,
  CParentType: ResolversParentTypes['Issue'] | ResolversParentTypes['Task'],
  Comment: Omit<Comment, 'parnet'> & { parnet: ResolversParentTypes['CParentType'] },
  IssueComment: IssueComment,
  TaskComment: TaskComment,
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  __resolveType: TypeResolveFn<'IssueComment' | 'TaskComment', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  dateUpdated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  parnet?: Resolver<ResolversTypes['CParentType'], ParentType, ContextType>,
  parentType?: Resolver<ResolversTypes['CommentParentType'], ParentType, ContextType>,
  userPermissions?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>,
};

export type CParentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CParentType'] = ResolversParentTypes['CParentType']> = {
  __resolveType: TypeResolveFn<'Issue' | 'Task', ParentType, ContextType>
};

export type IssueResolvers<ContextType = any, ParentType extends ResolversParentTypes['Issue'] = ResolversParentTypes['Issue']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  dateUpdated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  priority?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>,
  tags?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  userPermissions?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>,
};

export type IssueCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['IssueComment'] = ResolversParentTypes['IssueComment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  dateUpdated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  parnet?: Resolver<ResolversTypes['Issue'], ParentType, ContextType>,
  parentType?: Resolver<ResolversTypes['CommentParentType'], ParentType, ContextType>,
  userPermissions?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>,
};

export type PermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Permission'] = ResolversParentTypes['Permission']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  userID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  resouceID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  dateUpdated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userPermissions?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  user?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Resource'] = ResolversParentTypes['Resource']> = {
  __resolveType: TypeResolveFn<'Issue' | 'Project' | 'Task' | 'IssueComment' | 'TaskComment', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  dateUpdated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  userPermissions?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>,
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  dateUpdated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  parent?: Resolver<ResolversTypes['Issue'], ParentType, ContextType>,
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  userPermissions?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>,
};

export type TaskCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskComment'] = ResolversParentTypes['TaskComment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  dateCreated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  dateUpdated?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  parnet?: Resolver<ResolversTypes['Task'], ParentType, ContextType>,
  parentType?: Resolver<ResolversTypes['CommentParentType'], ParentType, ContextType>,
  userPermissions?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>,
};

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  joinDate?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers,
  CParentType?: CParentTypeResolvers,
  Issue?: IssueResolvers<ContextType>,
  IssueComment?: IssueCommentResolvers<ContextType>,
  Permission?: PermissionResolvers<ContextType>,
  Project?: ProjectResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Resource?: ResourceResolvers,
  Task?: TaskResolvers<ContextType>,
  TaskComment?: TaskCommentResolvers<ContextType>,
  Timestamp?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
