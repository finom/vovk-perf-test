import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrns")
export default class MrnController {
  @operation({
    summary: "Get Mrns",
  })
  @get()
  static getMrns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrn",
  })
  @post("{id}")
  static createMrn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
