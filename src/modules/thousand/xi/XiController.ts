import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xis")
export default class XiController {
  @operation({
    summary: "Get Xis",
  })
  @get()
  static getXis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xi",
  })
  @post("{id}")
  static createXi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
