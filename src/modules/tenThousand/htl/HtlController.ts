import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htl")
export default class HtlController {
  @operation({
    summary: "Get Htl",
  })
  @get()
  static getHtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htl",
  })
  @post("{id}")
  static createHtl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
