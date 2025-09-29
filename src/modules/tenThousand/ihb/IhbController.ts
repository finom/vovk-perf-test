import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihbs")
export default class IhbController {
  @operation({
    summary: "Get Ihbs",
  })
  @get()
  static getIhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihb",
  })
  @post("{id}")
  static createIhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
