import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jeds")
export default class JedController {
  @operation({
    summary: "Get Jeds",
  })
  @get()
  static getJeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jed",
  })
  @post("{id}")
  static createJed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
