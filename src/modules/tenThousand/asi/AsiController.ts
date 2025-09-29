import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asis")
export default class AsiController {
  @operation({
    summary: "Get Asis",
  })
  @get()
  static getAsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asi",
  })
  @post("{id}")
  static createAsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
