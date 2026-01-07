import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlg")
export default class DlgController {
  @operation({
    summary: "Get Dlg",
  })
  @get()
  static getDlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlg",
  })
  @post("{id}")
  static createDlg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
