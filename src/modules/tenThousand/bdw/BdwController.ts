import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdw")
export default class BdwController {
  @operation({
    summary: "Get Bdw",
  })
  @get()
  static getBdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdw",
  })
  @post("{id}")
  static createBdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
