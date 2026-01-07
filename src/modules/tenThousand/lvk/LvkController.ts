import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvk")
export default class LvkController {
  @operation({
    summary: "Get Lvk",
  })
  @get()
  static getLvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvk",
  })
  @post("{id}")
  static createLvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
