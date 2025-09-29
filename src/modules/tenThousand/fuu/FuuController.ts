import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuus")
export default class FuuController {
  @operation({
    summary: "Get Fuus",
  })
  @get()
  static getFuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fuu",
  })
  @post("{id}")
  static createFuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
