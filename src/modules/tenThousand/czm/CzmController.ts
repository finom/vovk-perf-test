import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czm")
export default class CzmController {
  @operation({
    summary: "Get Czm",
  })
  @get()
  static getCzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czm",
  })
  @post("{id}")
  static createCzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
