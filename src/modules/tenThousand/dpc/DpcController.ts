import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpcs")
export default class DpcController {
  @operation({
    summary: "Get Dpcs",
  })
  @get()
  static getDpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpc",
  })
  @post("{id}")
  static createDpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
