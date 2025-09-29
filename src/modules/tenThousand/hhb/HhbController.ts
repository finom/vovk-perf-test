import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhbs")
export default class HhbController {
  @operation({
    summary: "Get Hhbs",
  })
  @get()
  static getHhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhb",
  })
  @post("{id}")
  static createHhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
