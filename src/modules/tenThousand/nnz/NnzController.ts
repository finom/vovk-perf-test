import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnz")
export default class NnzController {
  @operation({
    summary: "Get Nnz",
  })
  @get()
  static getNnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnz",
  })
  @post("{id}")
  static createNnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
