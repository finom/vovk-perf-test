import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtl")
export default class GtlController {
  @operation({
    summary: "Get Gtl",
  })
  @get()
  static getGtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtl",
  })
  @post("{id}")
  static createGtl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
