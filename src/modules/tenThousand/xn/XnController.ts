import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xns")
export default class XnController {
  @operation({
    summary: "Get Xns",
  })
  @get()
  static getXns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xn",
  })
  @post("{id}")
  static createXn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
