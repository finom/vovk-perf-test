import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fihs")
export default class FihController {
  @operation({
    summary: "Get Fihs",
  })
  @get()
  static getFihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fih",
  })
  @post("{id}")
  static createFih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
