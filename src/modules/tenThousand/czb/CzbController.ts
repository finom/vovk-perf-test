import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czb")
export default class CzbController {
  @operation({
    summary: "Get Czb",
  })
  @get()
  static getCzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czb",
  })
  @post("{id}")
  static createCzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
