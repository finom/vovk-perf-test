import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzjs")
export default class MzjController {
  @operation({
    summary: "Get Mzjs",
  })
  @get()
  static getMzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzj",
  })
  @post("{id}")
  static createMzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
