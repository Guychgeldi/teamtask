export const getTaskList = state => state.tasks.tasks;
export const getTotalTaskCount = state => state.tasks.total_task_count;
export const getSortField = state => state.tasks.sort_field;
export const getSortDirection = state => state.tasks.sort_direction;
export const getPage = state => state.tasks.page;
export const getLoading = state => state.tasks.loading;
export const getErrors = state => state.tasks.errors