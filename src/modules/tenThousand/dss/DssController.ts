import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsses")
export default class DssController {
  @operation({
    summary: "Get Dsses",
  })
  @get()
  static getDsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dss",
  })
  @post("{id}")
  static createDss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
