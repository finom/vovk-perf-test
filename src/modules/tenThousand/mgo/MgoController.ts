import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgos")
export default class MgoController {
  @operation({
    summary: "Get Mgos",
  })
  @get()
  static getMgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgo",
  })
  @post("{id}")
  static createMgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
