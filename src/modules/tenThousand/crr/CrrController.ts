import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crrs")
export default class CrrController {
  @operation({
    summary: "Get Crrs",
  })
  @get()
  static getCrrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crr",
  })
  @post("{id}")
  static createCrr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
