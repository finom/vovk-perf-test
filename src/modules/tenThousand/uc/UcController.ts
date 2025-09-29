import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ucs")
export default class UcController {
  @operation({
    summary: "Get Ucs",
  })
  @get()
  static getUcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Uc",
  })
  @post("{id}")
  static createUc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
