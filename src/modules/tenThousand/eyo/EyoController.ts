import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyos")
export default class EyoController {
  @operation({
    summary: "Get Eyos",
  })
  @get()
  static getEyos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyo",
  })
  @post("{id}")
  static createEyo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
