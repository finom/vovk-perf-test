import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmos")
export default class GmoController {
  @operation({
    summary: "Get Gmos",
  })
  @get()
  static getGmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmo",
  })
  @post("{id}")
  static createGmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
