import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvr")
export default class LvrController {
  @operation({
    summary: "Get Lvr",
  })
  @get()
  static getLvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvr",
  })
  @post("{id}")
  static createLvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
