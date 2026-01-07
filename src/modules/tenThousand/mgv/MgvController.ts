import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgv")
export default class MgvController {
  @operation({
    summary: "Get Mgv",
  })
  @get()
  static getMgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgv",
  })
  @post("{id}")
  static createMgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
