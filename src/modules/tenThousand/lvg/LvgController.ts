import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvg")
export default class LvgController {
  @operation({
    summary: "Get Lvg",
  })
  @get()
  static getLvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvg",
  })
  @post("{id}")
  static createLvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
