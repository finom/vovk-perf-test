import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpps")
export default class DppController {
  @operation({
    summary: "Get Dpps",
  })
  @get()
  static getDpps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpp",
  })
  @post("{id}")
  static createDpp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
