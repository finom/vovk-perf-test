import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdl")
export default class BdlController {
  @operation({
    summary: "Get Bdl",
  })
  @get()
  static getBdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdl",
  })
  @post("{id}")
  static createBdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
