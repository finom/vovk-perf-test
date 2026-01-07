import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cak")
export default class CakController {
  @operation({
    summary: "Get Cak",
  })
  @get()
  static getCak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cak",
  })
  @post("{id}")
  static createCak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
