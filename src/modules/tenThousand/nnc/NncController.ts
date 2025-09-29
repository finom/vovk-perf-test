import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nncs")
export default class NncController {
  @operation({
    summary: "Get Nncs",
  })
  @get()
  static getNncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnc",
  })
  @post("{id}")
  static createNnc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
