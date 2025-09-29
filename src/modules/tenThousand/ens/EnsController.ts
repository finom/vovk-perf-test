import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ens")
export default class EnsController {
  @operation({
    summary: "Get Ens",
  })
  @get()
  static getEns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ens",
  })
  @post("{id}")
  static createEns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
