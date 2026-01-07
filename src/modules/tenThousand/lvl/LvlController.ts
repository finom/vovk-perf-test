import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvl")
export default class LvlController {
  @operation({
    summary: "Get Lvl",
  })
  @get()
  static getLvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvl",
  })
  @post("{id}")
  static createLvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
