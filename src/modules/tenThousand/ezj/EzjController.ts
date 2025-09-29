import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezjs")
export default class EzjController {
  @operation({
    summary: "Get Ezjs",
  })
  @get()
  static getEzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezj",
  })
  @post("{id}")
  static createEzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
