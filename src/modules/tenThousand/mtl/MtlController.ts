import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtl")
export default class MtlController {
  @operation({
    summary: "Get Mtl",
  })
  @get()
  static getMtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtl",
  })
  @post("{id}")
  static createMtl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
