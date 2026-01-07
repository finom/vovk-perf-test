import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bht")
export default class BhtController {
  @operation({
    summary: "Get Bht",
  })
  @get()
  static getBht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bht",
  })
  @post("{id}")
  static createBht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
