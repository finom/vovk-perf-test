import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdv")
export default class BdvController {
  @operation({
    summary: "Get Bdv",
  })
  @get()
  static getBdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdv",
  })
  @post("{id}")
  static createBdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
