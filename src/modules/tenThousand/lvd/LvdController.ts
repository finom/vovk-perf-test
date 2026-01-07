import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvd")
export default class LvdController {
  @operation({
    summary: "Get Lvd",
  })
  @get()
  static getLvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvd",
  })
  @post("{id}")
  static createLvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
