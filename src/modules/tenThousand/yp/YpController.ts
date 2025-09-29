import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yps")
export default class YpController {
  @operation({
    summary: "Get Yps",
  })
  @get()
  static getYps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yp",
  })
  @post("{id}")
  static createYp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
