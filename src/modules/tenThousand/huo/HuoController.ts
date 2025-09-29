import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huos")
export default class HuoController {
  @operation({
    summary: "Get Huos",
  })
  @get()
  static getHuos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Huo",
  })
  @post("{id}")
  static createHuo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
