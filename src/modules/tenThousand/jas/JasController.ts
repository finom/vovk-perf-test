import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jas")
export default class JasController {
  @operation({
    summary: "Get Jas",
  })
  @get()
  static getJas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jas",
  })
  @post("{id}")
  static createJas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
