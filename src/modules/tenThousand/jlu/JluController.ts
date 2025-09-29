import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlus")
export default class JluController {
  @operation({
    summary: "Get Jlus",
  })
  @get()
  static getJlus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlu",
  })
  @post("{id}")
  static createJlu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
