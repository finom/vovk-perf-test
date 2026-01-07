import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bav")
export default class BavController {
  @operation({
    summary: "Get Bav",
  })
  @get()
  static getBav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bav",
  })
  @post("{id}")
  static createBav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
