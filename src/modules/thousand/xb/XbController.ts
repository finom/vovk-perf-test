import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xbs")
export default class XbController {
  @operation({
    summary: "Get Xbs",
  })
  @get()
  static getXbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xb",
  })
  @post("{id}")
  static createXb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
