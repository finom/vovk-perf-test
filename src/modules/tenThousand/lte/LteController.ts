import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lte")
export default class LteController {
  @operation({
    summary: "Get Lte",
  })
  @get()
  static getLte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lte",
  })
  @post("{id}")
  static createLte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
