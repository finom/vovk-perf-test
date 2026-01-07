import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czd")
export default class CzdController {
  @operation({
    summary: "Get Czd",
  })
  @get()
  static getCzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czd",
  })
  @post("{id}")
  static createCzd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
