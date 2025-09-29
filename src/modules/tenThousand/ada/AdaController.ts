import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adas")
export default class AdaController {
  @operation({
    summary: "Get Adas",
  })
  @get()
  static getAdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ada",
  })
  @post("{id}")
  static createAda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
