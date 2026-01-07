import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvt")
export default class LvtController {
  @operation({
    summary: "Get Lvt",
  })
  @get()
  static getLvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvt",
  })
  @post("{id}")
  static createLvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
