import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dge")
export default class DgeController {
  @operation({
    summary: "Get Dge",
  })
  @get()
  static getDge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dge",
  })
  @post("{id}")
  static createDge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
