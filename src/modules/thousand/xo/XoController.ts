import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xos")
export default class XoController {
  @operation({
    summary: "Get Xos",
  })
  @get()
  static getXos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xo",
  })
  @post("{id}")
  static createXo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
