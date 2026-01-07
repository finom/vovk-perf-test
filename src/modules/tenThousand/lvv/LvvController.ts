import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvv")
export default class LvvController {
  @operation({
    summary: "Get Lvv",
  })
  @get()
  static getLvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvv",
  })
  @post("{id}")
  static createLvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
