import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqs")
export default class BqsController {
  @operation({
    summary: "Get Bqs",
  })
  @get()
  static getBqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqs",
  })
  @post("{id}")
  static createBqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
