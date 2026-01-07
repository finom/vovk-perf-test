import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gem")
export default class GemController {
  @operation({
    summary: "Get Gem",
  })
  @get()
  static getGem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gem",
  })
  @post("{id}")
  static createGem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
