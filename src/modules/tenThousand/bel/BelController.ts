import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bel")
export default class BelController {
  @operation({
    summary: "Get Bel",
  })
  @get()
  static getBel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bel",
  })
  @post("{id}")
  static createBel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
