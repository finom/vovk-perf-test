import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlq")
export default class DlqController {
  @operation({
    summary: "Get Dlq",
  })
  @get()
  static getDlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlq",
  })
  @post("{id}")
  static createDlq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
