import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmls")
export default class JmlController {
  @operation({
    summary: "Get Jmls",
  })
  @get()
  static getJmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jml",
  })
  @post("{id}")
  static createJml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
