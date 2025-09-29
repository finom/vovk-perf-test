import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqds")
export default class EqdController {
  @operation({
    summary: "Get Eqds",
  })
  @get()
  static getEqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqd",
  })
  @post("{id}")
  static createEqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
