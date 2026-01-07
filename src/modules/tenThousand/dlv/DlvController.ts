import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlv")
export default class DlvController {
  @operation({
    summary: "Get Dlv",
  })
  @get()
  static getDlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlv",
  })
  @post("{id}")
  static createDlv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
