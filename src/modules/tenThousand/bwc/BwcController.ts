import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwc")
export default class BwcController {
  @operation({
    summary: "Get Bwc",
  })
  @get()
  static getBwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwc",
  })
  @post("{id}")
  static createBwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
