import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cches")
export default class CchController {
  @operation({
    summary: "Get Cches",
  })
  @get()
  static getCches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cch",
  })
  @post("{id}")
  static createCch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
