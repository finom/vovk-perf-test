import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjzs")
export default class FjzController {
  @operation({
    summary: "Get Fjzs",
  })
  @get()
  static getFjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjz",
  })
  @post("{id}")
  static createFjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
