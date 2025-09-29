import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aals")
export default class AalController {
  @operation({
    summary: "Get Aals",
  })
  @get()
  static getAals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aal",
  })
  @post("{id}")
  static createAal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
