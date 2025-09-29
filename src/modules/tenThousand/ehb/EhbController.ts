import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehbs")
export default class EhbController {
  @operation({
    summary: "Get Ehbs",
  })
  @get()
  static getEhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehb",
  })
  @post("{id}")
  static createEhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
