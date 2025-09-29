import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isbs")
export default class IsbController {
  @operation({
    summary: "Get Isbs",
  })
  @get()
  static getIsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isb",
  })
  @post("{id}")
  static createIsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
