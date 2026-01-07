import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlr")
export default class DlrController {
  @operation({
    summary: "Get Dlr",
  })
  @get()
  static getDlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlr",
  })
  @post("{id}")
  static createDlr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
