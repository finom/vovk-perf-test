import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dows")
export default class DowController {
  @operation({
    summary: "Get Dows",
  })
  @get()
  static getDows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dow",
  })
  @post("{id}")
  static createDow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
