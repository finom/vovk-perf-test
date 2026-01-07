import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvf")
export default class LvfController {
  @operation({
    summary: "Get Lvf",
  })
  @get()
  static getLvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvf",
  })
  @post("{id}")
  static createLvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
