import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvz")
export default class LvzController {
  @operation({
    summary: "Get Lvz",
  })
  @get()
  static getLvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvz",
  })
  @post("{id}")
  static createLvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
