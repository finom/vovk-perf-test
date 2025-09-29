import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cums")
export default class CumController {
  @operation({
    summary: "Get Cums",
  })
  @get()
  static getCums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cum",
  })
  @post("{id}")
  static createCum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
