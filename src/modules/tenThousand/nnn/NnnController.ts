import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnns")
export default class NnnController {
  @operation({
    summary: "Get Nnns",
  })
  @get()
  static getNnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnn",
  })
  @post("{id}")
  static createNnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
