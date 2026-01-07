import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvw")
export default class LvwController {
  @operation({
    summary: "Get Lvw",
  })
  @get()
  static getLvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvw",
  })
  @post("{id}")
  static createLvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
