import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czh")
export default class CzhController {
  @operation({
    summary: "Get Czh",
  })
  @get()
  static getCzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czh",
  })
  @post("{id}")
  static createCzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
