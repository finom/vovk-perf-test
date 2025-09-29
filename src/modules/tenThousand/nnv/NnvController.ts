import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnvs")
export default class NnvController {
  @operation({
    summary: "Get Nnvs",
  })
  @get()
  static getNnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnv",
  })
  @post("{id}")
  static createNnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
