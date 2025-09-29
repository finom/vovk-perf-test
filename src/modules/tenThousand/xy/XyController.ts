import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xies")
export default class XyController {
  @operation({
    summary: "Get Xies",
  })
  @get()
  static getXies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xy",
  })
  @post("{id}")
  static createXy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
