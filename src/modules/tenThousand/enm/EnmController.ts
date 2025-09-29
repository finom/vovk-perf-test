import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enms")
export default class EnmController {
  @operation({
    summary: "Get Enms",
  })
  @get()
  static getEnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enm",
  })
  @post("{id}")
  static createEnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
