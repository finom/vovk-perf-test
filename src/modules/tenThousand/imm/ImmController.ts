import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imms")
export default class ImmController {
  @operation({
    summary: "Get Imms",
  })
  @get()
  static getImms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imm",
  })
  @post("{id}")
  static createImm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
