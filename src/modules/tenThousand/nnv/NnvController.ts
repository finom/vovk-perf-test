import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnv")
export default class NnvController {
  @operation({
    summary: "Get Nnv",
  })
  @get()
  static getNnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnv",
  })
  @post("{id}")
  static createNnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
