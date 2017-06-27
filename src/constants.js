export const keys = {
  task: {
    created: Symbol('TASK_CREATED'),
    removed: Symbol('TASK_REMOVED'),
    fetched: Symbol('TASK_FETCHED'),
  },
  error: {
    title: Symbol('TITLE_ERROR'),
    api: Symbol('API_ERROR'),
    clear: Symbol('ERROR_CLEARED')
  }
};

export const messages = {
  error: {
    api: 'API 接続に失敗しました。',
    title: 'Title が不正です。',
  },
};

export const config = {
  endpoint: 'http://localhost:3000'
};
