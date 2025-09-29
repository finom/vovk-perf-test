import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bis")
export default class BisController {
  @operation({
    summary: "Get Bis",
  })
  @get()
  static getBis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bis",
  })
  @post("{id}")
  static createBis = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
