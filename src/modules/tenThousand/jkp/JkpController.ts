import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkps")
export default class JkpController {
  @operation({
    summary: "Get Jkps",
  })
  @get()
  static getJkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkp",
  })
  @post("{id}")
  static createJkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
