import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxls")
export default class BxlController {
  @operation({
    summary: "Get Bxls",
  })
  @get()
  static getBxls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxl",
  })
  @post("{id}")
  static createBxl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
