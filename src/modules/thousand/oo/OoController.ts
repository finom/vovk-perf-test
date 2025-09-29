import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("oos")
export default class OoController {
  @operation({
    summary: "Get Oos",
  })
  @get()
  static getOos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Oo",
  })
  @post("{id}")
  static createOo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
