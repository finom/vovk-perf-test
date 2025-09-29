import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnfs")
export default class NnfController {
  @operation({
    summary: "Get Nnfs",
  })
  @get()
  static getNnfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnf",
  })
  @post("{id}")
  static createNnf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
