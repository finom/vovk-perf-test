import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cils")
export default class CilController {
  @operation({
    summary: "Get Cils",
  })
  @get()
  static getCils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cil",
  })
  @post("{id}")
  static createCil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
