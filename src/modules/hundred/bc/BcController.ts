import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bc")
export default class BcController {
  @operation({
    summary: "Get Bc",
  })
  @get()
  static getBc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bc",
  })
  @post("{id}")
  static createBc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
