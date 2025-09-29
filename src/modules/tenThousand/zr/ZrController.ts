import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zrs")
export default class ZrController {
  @operation({
    summary: "Get Zrs",
  })
  @get()
  static getZrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zr",
  })
  @post("{id}")
  static createZr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
