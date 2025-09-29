import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahbs")
export default class AhbController {
  @operation({
    summary: "Get Ahbs",
  })
  @get()
  static getAhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahb",
  })
  @post("{id}")
  static createAhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
