import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxas")
export default class LxaController {
  @operation({
    summary: "Get Lxas",
  })
  @get()
  static getLxas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxa",
  })
  @post("{id}")
  static createLxa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
