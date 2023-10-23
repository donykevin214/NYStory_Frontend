export type Nullable<T> = T | null;

export type ApiSuccess = {
  success: true;
};

export type ApiError = {
  success: false;
  message?: string;
  errors?: {
    message: string;
  }[];
};
export type StoryData = {
    title: string;
    url: string;
    image: string;
}

export type StoryRequest = {
    type: string;
};

export type StoryResponse = {
    result: Array<StoryData>
}