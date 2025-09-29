import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgms")
export default class JgmController {
  @operation({
    summary: "Get Jgms",
  })
  @get()
  static getJgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgm",
  })
  @post("{id}")
  static createJgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
