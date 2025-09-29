import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnms")
export default class NnmController {
  @operation({
    summary: "Get Nnms",
  })
  @get()
  static getNnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnm",
  })
  @post("{id}")
  static createNnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
