import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nows")
export default class NowController {
  @operation({
    summary: "Get Nows",
  })
  @get()
  static getNows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Now",
  })
  @post("{id}")
  static createNow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
