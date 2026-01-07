import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvx")
export default class LvxController {
  @operation({
    summary: "Get Lvx",
  })
  @get()
  static getLvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvx",
  })
  @post("{id}")
  static createLvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
