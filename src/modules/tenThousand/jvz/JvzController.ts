import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvzs")
export default class JvzController {
  @operation({
    summary: "Get Jvzs",
  })
  @get()
  static getJvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvz",
  })
  @post("{id}")
  static createJvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
