import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esos")
export default class EsoController {
  @operation({
    summary: "Get Esos",
  })
  @get()
  static getEsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eso",
  })
  @post("{id}")
  static createEso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
