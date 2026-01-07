import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkt")
export default class MktController {
  @operation({
    summary: "Get Mkt",
  })
  @get()
  static getMkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkt",
  })
  @post("{id}")
  static createMkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
