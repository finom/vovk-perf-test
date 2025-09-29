import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hres")
export default class HreController {
  @operation({
    summary: "Get Hres",
  })
  @get()
  static getHres = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hre",
  })
  @post("{id}")
  static createHre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
