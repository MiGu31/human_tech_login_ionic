export interface View {
    showLoading();
    hideLoading();
    showError(error: string);
}
