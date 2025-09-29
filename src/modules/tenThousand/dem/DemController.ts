import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dems")
export default class DemController {
  @operation({
    summary: "Get Dems",
  })
  @get()
  static getDems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dem",
  })
  @post("{id}")
  static createDem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
