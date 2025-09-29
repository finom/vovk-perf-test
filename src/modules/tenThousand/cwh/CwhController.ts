import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwhs")
export default class CwhController {
  @operation({
    summary: "Get Cwhs",
  })
  @get()
  static getCwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwh",
  })
  @post("{id}")
  static createCwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
