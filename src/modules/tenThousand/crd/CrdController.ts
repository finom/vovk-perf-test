import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crd")
export default class CrdController {
  @operation({
    summary: "Get Crd",
  })
  @get()
  static getCrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crd",
  })
  @post("{id}")
  static createCrd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
