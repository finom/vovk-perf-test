import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmcs")
export default class JmcController {
  @operation({
    summary: "Get Jmcs",
  })
  @get()
  static getJmcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmc",
  })
  @post("{id}")
  static createJmc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
