import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hoys")
export default class HoyController {
  @operation({
    summary: "Get Hoys",
  })
  @get()
  static getHoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hoy",
  })
  @post("{id}")
  static createHoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
