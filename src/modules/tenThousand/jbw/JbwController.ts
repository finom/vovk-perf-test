import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbws")
export default class JbwController {
  @operation({
    summary: "Get Jbws",
  })
  @get()
  static getJbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbw",
  })
  @post("{id}")
  static createJbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
