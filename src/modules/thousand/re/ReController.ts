import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("res")
export default class ReController {
  @operation({
    summary: "Get Res",
  })
  @get()
  static getRes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Re",
  })
  @post("{id}")
  static createRe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
