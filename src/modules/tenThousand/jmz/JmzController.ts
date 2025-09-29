import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmzs")
export default class JmzController {
  @operation({
    summary: "Get Jmzs",
  })
  @get()
  static getJmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmz",
  })
  @post("{id}")
  static createJmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
