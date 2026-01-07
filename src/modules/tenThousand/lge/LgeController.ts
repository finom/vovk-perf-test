import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lge")
export default class LgeController {
  @operation({
    summary: "Get Lge",
  })
  @get()
  static getLge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lge",
  })
  @post("{id}")
  static createLge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
