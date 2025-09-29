import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjts")
export default class FjtController {
  @operation({
    summary: "Get Fjts",
  })
  @get()
  static getFjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjt",
  })
  @post("{id}")
  static createFjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
