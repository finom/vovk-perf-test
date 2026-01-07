import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvh")
export default class LvhController {
  @operation({
    summary: "Get Lvh",
  })
  @get()
  static getLvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvh",
  })
  @post("{id}")
  static createLvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
