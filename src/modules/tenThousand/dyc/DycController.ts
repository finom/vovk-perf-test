import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dycs")
export default class DycController {
  @operation({
    summary: "Get Dycs",
  })
  @get()
  static getDycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyc",
  })
  @post("{id}")
  static createDyc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
