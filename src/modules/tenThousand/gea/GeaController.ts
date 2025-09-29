import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("geas")
export default class GeaController {
  @operation({
    summary: "Get Geas",
  })
  @get()
  static getGeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gea",
  })
  @post("{id}")
  static createGea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
