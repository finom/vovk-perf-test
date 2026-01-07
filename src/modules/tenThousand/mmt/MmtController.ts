import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmt")
export default class MmtController {
  @operation({
    summary: "Get Mmt",
  })
  @get()
  static getMmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmt",
  })
  @post("{id}")
  static createMmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
