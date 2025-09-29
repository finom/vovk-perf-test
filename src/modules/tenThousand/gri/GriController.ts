import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gris")
export default class GriController {
  @operation({
    summary: "Get Gris",
  })
  @get()
  static getGris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gri",
  })
  @post("{id}")
  static createGri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
