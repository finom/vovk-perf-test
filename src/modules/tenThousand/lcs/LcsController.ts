import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcs")
export default class LcsController {
  @operation({
    summary: "Get Lcs",
  })
  @get()
  static getLcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcs",
  })
  @post("{id}")
  static createLcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
