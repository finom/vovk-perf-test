import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nees")
export default class NeeController {
  @operation({
    summary: "Get Nees",
  })
  @get()
  static getNees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nee",
  })
  @post("{id}")
  static createNee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
