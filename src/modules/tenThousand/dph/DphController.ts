import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dphs")
export default class DphController {
  @operation({
    summary: "Get Dphs",
  })
  @get()
  static getDphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dph",
  })
  @post("{id}")
  static createDph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
