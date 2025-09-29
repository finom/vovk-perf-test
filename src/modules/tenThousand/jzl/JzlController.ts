import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzls")
export default class JzlController {
  @operation({
    summary: "Get Jzls",
  })
  @get()
  static getJzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzl",
  })
  @post("{id}")
  static createJzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
