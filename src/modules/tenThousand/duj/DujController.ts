import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dujs")
export default class DujController {
  @operation({
    summary: "Get Dujs",
  })
  @get()
  static getDujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Duj",
  })
  @post("{id}")
  static createDuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
