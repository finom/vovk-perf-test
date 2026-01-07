import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bni")
export default class BniController {
  @operation({
    summary: "Get Bni",
  })
  @get()
  static getBni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bni",
  })
  @post("{id}")
  static createBni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
