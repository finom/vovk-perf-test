import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzas")
export default class JzaController {
  @operation({
    summary: "Get Jzas",
  })
  @get()
  static getJzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jza",
  })
  @post("{id}")
  static createJza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
