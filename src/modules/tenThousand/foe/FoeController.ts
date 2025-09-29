import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("foes")
export default class FoeController {
  @operation({
    summary: "Get Foes",
  })
  @get()
  static getFoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Foe",
  })
  @post("{id}")
  static createFoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
