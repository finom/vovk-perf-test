import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjbs")
export default class FjbController {
  @operation({
    summary: "Get Fjbs",
  })
  @get()
  static getFjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjb",
  })
  @post("{id}")
  static createFjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
