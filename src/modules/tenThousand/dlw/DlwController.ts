import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlw")
export default class DlwController {
  @operation({
    summary: "Get Dlw",
  })
  @get()
  static getDlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlw",
  })
  @post("{id}")
  static createDlw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
