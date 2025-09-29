import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvls")
export default class JvlController {
  @operation({
    summary: "Get Jvls",
  })
  @get()
  static getJvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvl",
  })
  @post("{id}")
  static createJvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
