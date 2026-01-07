import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkm")
export default class LkmController {
  @operation({
    summary: "Get Lkm",
  })
  @get()
  static getLkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkm",
  })
  @post("{id}")
  static createLkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
