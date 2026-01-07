import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcq")
export default class BcqController {
  @operation({
    summary: "Get Bcq",
  })
  @get()
  static getBcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcq",
  })
  @post("{id}")
  static createBcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
