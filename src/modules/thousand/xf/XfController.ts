import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xfs")
export default class XfController {
  @operation({
    summary: "Get Xfs",
  })
  @get()
  static getXfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xf",
  })
  @post("{id}")
  static createXf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
