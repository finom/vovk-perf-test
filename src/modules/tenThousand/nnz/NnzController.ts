import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnzs")
export default class NnzController {
  @operation({
    summary: "Get Nnzs",
  })
  @get()
  static getNnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnz",
  })
  @post("{id}")
  static createNnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
