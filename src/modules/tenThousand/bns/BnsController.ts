import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bns")
export default class BnsController {
  @operation({
    summary: "Get Bns",
  })
  @get()
  static getBns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bns",
  })
  @post("{id}")
  static createBns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
