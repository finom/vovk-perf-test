import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bon")
export default class BonController {
  @operation({
    summary: "Get Bon",
  })
  @get()
  static getBon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bon",
  })
  @post("{id}")
  static createBon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
