import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gays")
export default class GayController {
  @operation({
    summary: "Get Gays",
  })
  @get()
  static getGays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gay",
  })
  @post("{id}")
  static createGay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
