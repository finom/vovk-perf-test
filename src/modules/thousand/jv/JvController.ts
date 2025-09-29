import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvs")
export default class JvController {
  @operation({
    summary: "Get Jvs",
  })
  @get()
  static getJvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jv",
  })
  @post("{id}")
  static createJv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
