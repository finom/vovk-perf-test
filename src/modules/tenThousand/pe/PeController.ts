import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pes")
export default class PeController {
  @operation({
    summary: "Get Pes",
  })
  @get()
  static getPes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pe",
  })
  @post("{id}")
  static createPe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
