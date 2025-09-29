import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cabs")
export default class CabController {
  @operation({
    summary: "Get Cabs",
  })
  @get()
  static getCabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cab",
  })
  @post("{id}")
  static createCab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
