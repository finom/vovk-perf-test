import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mccs")
export default class MccController {
  @operation({
    summary: "Get Mccs",
  })
  @get()
  static getMccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcc",
  })
  @post("{id}")
  static createMcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
