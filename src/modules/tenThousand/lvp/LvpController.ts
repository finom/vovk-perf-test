import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvp")
export default class LvpController {
  @operation({
    summary: "Get Lvp",
  })
  @get()
  static getLvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvp",
  })
  @post("{id}")
  static createLvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
