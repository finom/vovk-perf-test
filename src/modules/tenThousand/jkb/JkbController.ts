import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkbs")
export default class JkbController {
  @operation({
    summary: "Get Jkbs",
  })
  @get()
  static getJkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkb",
  })
  @post("{id}")
  static createJkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
