import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dths")
export default class DthController {
  @operation({
    summary: "Get Dths",
  })
  @get()
  static getDths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dth",
  })
  @post("{id}")
  static createDth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
