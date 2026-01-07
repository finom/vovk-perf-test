import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdr")
export default class BdrController {
  @operation({
    summary: "Get Bdr",
  })
  @get()
  static getBdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdr",
  })
  @post("{id}")
  static createBdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
