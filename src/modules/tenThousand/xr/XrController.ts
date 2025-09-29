import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xrs")
export default class XrController {
  @operation({
    summary: "Get Xrs",
  })
  @get()
  static getXrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xr",
  })
  @post("{id}")
  static createXr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
