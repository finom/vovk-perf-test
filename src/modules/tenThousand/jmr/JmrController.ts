import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmrs")
export default class JmrController {
  @operation({
    summary: "Get Jmrs",
  })
  @get()
  static getJmrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmr",
  })
  @post("{id}")
  static createJmr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
