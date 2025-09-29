import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bms")
export default class BmsController {
  @operation({
    summary: "Get Bms",
  })
  @get()
  static getBms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bms",
  })
  @post("{id}")
  static createBms = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
