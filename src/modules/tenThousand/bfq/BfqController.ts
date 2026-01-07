import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfq")
export default class BfqController {
  @operation({
    summary: "Get Bfq",
  })
  @get()
  static getBfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfq",
  })
  @post("{id}")
  static createBfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
