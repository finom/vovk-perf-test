import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzps")
export default class JzpController {
  @operation({
    summary: "Get Jzps",
  })
  @get()
  static getJzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzp",
  })
  @post("{id}")
  static createJzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
