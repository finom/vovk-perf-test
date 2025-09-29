import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eeks")
export default class EekController {
  @operation({
    summary: "Get Eeks",
  })
  @get()
  static getEeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eek",
  })
  @post("{id}")
  static createEek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
