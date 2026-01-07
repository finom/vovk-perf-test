import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpo")
export default class BpoController {
  @operation({
    summary: "Get Bpo",
  })
  @get()
  static getBpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpo",
  })
  @post("{id}")
  static createBpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
