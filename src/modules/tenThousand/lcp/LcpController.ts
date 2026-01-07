import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcp")
export default class LcpController {
  @operation({
    summary: "Get Lcp",
  })
  @get()
  static getLcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcp",
  })
  @post("{id}")
  static createLcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
