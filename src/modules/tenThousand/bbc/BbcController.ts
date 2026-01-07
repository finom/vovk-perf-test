import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbc")
export default class BbcController {
  @operation({
    summary: "Get Bbc",
  })
  @get()
  static getBbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbc",
  })
  @post("{id}")
  static createBbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
