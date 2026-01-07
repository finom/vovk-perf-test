import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcl")
export default class LclController {
  @operation({
    summary: "Get Lcl",
  })
  @get()
  static getLcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcl",
  })
  @post("{id}")
  static createLcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
