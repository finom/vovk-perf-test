import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("giys")
export default class GiyController {
  @operation({
    summary: "Get Giys",
  })
  @get()
  static getGiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Giy",
  })
  @post("{id}")
  static createGiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
