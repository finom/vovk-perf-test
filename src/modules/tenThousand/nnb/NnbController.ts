import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnb")
export default class NnbController {
  @operation({
    summary: "Get Nnb",
  })
  @get()
  static getNnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnb",
  })
  @post("{id}")
  static createNnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
