import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvj")
export default class LvjController {
  @operation({
    summary: "Get Lvj",
  })
  @get()
  static getLvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvj",
  })
  @post("{id}")
  static createLvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
