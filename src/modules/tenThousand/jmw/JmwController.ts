import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmws")
export default class JmwController {
  @operation({
    summary: "Get Jmws",
  })
  @get()
  static getJmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmw",
  })
  @post("{id}")
  static createJmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
