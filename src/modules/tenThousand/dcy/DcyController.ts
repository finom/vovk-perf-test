import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcies")
export default class DcyController {
  @operation({
    summary: "Get Dcies",
  })
  @get()
  static getDcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcy",
  })
  @post("{id}")
  static createDcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
