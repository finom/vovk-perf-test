import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nses")
export default class NseController {
  @operation({
    summary: "Get Nses",
  })
  @get()
  static getNses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nse",
  })
  @post("{id}")
  static createNse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
