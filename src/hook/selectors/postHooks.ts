import {
  CategoryStore,
  MediaResponse,
  PostResponse
} from 'flux/modules/post/types';
import { useSelector } from 'flux/selector';
import { RootState } from 'flux/store';
import { IRequest } from 'models/iRequest';

export const usePosts = (): IRequest<PostResponse> =>
  useSelector((state: RootState) => state.post.general);

export const useMedia = (): IRequest<MediaResponse> =>
  useSelector((state: RootState) => state.post.media);

export const useCategory = (): IRequest<CategoryStore> =>
  useSelector((state: RootState) => state.post.category);
