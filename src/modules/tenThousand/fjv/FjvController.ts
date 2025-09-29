import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjvs")
export default class FjvController {
  @operation({
    summary: "Get Fjvs",
  })
  @get()
  static getFjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjv",
  })
  @post("{id}")
  static createFjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
