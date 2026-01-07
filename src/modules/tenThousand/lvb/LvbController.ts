import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvb")
export default class LvbController {
  @operation({
    summary: "Get Lvb",
  })
  @get()
  static getLvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvb",
  })
  @post("{id}")
  static createLvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
