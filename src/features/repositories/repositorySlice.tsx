import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { githubApi } from '../../app/services/ApiService';

interface Request {
    query?: string,
    language?: string;
    sort?: string;
    order?: string;
}

type OpenSnackbarAction = PayloadAction<any>;


const initialState = {
    list: [],
    isLoading: false
};


export const fetchRepoByQuery = createAsyncThunk(
    'repository/query',
    async (request: Request) => {
        let isLoading = true;
        try {
            let { items } = await githubApi.get(`search/repositories?q=${request.query}+language:${request.language}`);
            const filterList = items.map((item: any) => ({
                id: item?.id,
                repositoryId: item?.id ?? '-',
                userName: item?.owner?.login ?? '-',
                repoDescription: item?.description ?? '-',
                stars: item?.stargazers_count ?? '-',
                forks_count: item?.forks_count,
                updated_at: item?.updated_at
            }));
            isLoading = false;
            return { filterList, isLoading };
        } catch (error) {
            isLoading = false;
        }
    }
);
export const fetchRepoBySort = createAsyncThunk(
    'repository/sort',
    async (request: Request) => {
        let isLoading = true;
        try {
            let { items } = await githubApi.get(`search/repositories?q=${request.query}+language:${request.language}&sort=${request.sort}&order=${request.order}`);
            const filterList = items.map((item: any) => ({
                id: item?.id,
                repositoryId: item?.id ?? '-',
                userName: item?.owner?.login ?? '-',
                repoDescription: item?.description ?? '-',
                stars: item?.stargazers_count ?? '-',
                forks_count: item?.forks_count,
                updated_at: item?.updated_at
            }));
            isLoading = false;
            return { filterList, isLoading };
        } catch (error) {
            isLoading = false;
        }
    }
);

export const repositorySlice = createSlice({
    name: "repository",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRepoBySort.pending, (state, action: OpenSnackbarAction) => {
            state.isLoading = true;
        });
        builder.addCase(fetchRepoBySort.fulfilled, (state, action: OpenSnackbarAction) => {
            state.list = action.payload?.filterList ?? [];
            state.isLoading = false;
        });

        builder.addCase(fetchRepoByQuery.pending, (state, action: OpenSnackbarAction) => {
            state.isLoading = true;
        });
        builder.addCase(fetchRepoByQuery.fulfilled, (state, action: OpenSnackbarAction) => {
            state.list = action.payload?.filterList ?? [];
            state.isLoading = false;
        });
    },
});




export const repoList = (state: { repoList: { list: any; }; }) => state?.repoList.list;
export const isLoading = (state: { repoList: { isLoading: boolean; }; }) => state.repoList.isLoading;

export default repositorySlice.reducer;