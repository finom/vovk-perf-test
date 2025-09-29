import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eas")
export default class EasController {
  @operation({
    summary: "Get Eas",
  })
  @get()
  static getEas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eas",
  })
  @post("{id}")
  static createEas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
