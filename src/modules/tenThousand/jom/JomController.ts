import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("joms")
export default class JomController {
  @operation({
    summary: "Get Joms",
  })
  @get()
  static getJoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jom",
  })
  @post("{id}")
  static createJom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
