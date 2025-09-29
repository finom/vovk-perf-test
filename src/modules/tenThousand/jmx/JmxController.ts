import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmxes")
export default class JmxController {
  @operation({
    summary: "Get Jmxes",
  })
  @get()
  static getJmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmx",
  })
  @post("{id}")
  static createJmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
