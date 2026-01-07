import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lv")
export default class LvController {
  @operation({
    summary: "Get Lv",
  })
  @get()
  static getLv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lv",
  })
  @post("{id}")
  static createLv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
