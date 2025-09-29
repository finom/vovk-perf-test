import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xvs")
export default class XvController {
  @operation({
    summary: "Get Xvs",
  })
  @get()
  static getXvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xv",
  })
  @post("{id}")
  static createXv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
