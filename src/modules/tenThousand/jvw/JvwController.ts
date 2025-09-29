import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvws")
export default class JvwController {
  @operation({
    summary: "Get Jvws",
  })
  @get()
  static getJvws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvw",
  })
  @post("{id}")
  static createJvw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
