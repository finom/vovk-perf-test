import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amos")
export default class AmoController {
  @operation({
    summary: "Get Amos",
  })
  @get()
  static getAmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amo",
  })
  @post("{id}")
  static createAmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
