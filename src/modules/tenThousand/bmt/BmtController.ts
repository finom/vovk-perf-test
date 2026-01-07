import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmt")
export default class BmtController {
  @operation({
    summary: "Get Bmt",
  })
  @get()
  static getBmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmt",
  })
  @post("{id}")
  static createBmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
