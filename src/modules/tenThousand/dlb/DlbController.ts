import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlb")
export default class DlbController {
  @operation({
    summary: "Get Dlb",
  })
  @get()
  static getDlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlb",
  })
  @post("{id}")
  static createDlb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
