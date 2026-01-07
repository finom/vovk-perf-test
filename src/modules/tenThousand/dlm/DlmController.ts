import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlm")
export default class DlmController {
  @operation({
    summary: "Get Dlm",
  })
  @get()
  static getDlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlm",
  })
  @post("{id}")
  static createDlm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
