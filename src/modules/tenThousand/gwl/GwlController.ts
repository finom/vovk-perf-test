import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwl")
export default class GwlController {
  @operation({
    summary: "Get Gwl",
  })
  @get()
  static getGwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwl",
  })
  @post("{id}")
  static createGwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
