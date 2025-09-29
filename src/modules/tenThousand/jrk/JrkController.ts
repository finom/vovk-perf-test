import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrks")
export default class JrkController {
  @operation({
    summary: "Get Jrks",
  })
  @get()
  static getJrks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrk",
  })
  @post("{id}")
  static createJrk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
