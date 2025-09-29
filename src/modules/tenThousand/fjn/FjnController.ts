import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjns")
export default class FjnController {
  @operation({
    summary: "Get Fjns",
  })
  @get()
  static getFjns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjn",
  })
  @post("{id}")
  static createFjn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
