import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drks")
export default class DrkController {
  @operation({
    summary: "Get Drks",
  })
  @get()
  static getDrks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drk",
  })
  @post("{id}")
  static createDrk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
