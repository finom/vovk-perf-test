import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xms")
export default class XmController {
  @operation({
    summary: "Get Xms",
  })
  @get()
  static getXms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xm",
  })
  @post("{id}")
  static createXm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
