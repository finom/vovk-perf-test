import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlx")
export default class DlxController {
  @operation({
    summary: "Get Dlx",
  })
  @get()
  static getDlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlx",
  })
  @post("{id}")
  static createDlx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
