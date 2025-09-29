import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drts")
export default class DrtController {
  @operation({
    summary: "Get Drts",
  })
  @get()
  static getDrts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drt",
  })
  @post("{id}")
  static createDrt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
