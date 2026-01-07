import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvs")
export default class LvsController {
  @operation({
    summary: "Get Lvs",
  })
  @get()
  static getLvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvs",
  })
  @post("{id}")
  static createLvs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
