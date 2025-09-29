import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzrs")
export default class JzrController {
  @operation({
    summary: "Get Jzrs",
  })
  @get()
  static getJzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzr",
  })
  @post("{id}")
  static createJzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
