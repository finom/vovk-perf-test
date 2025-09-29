import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpzs")
export default class CpzController {
  @operation({
    summary: "Get Cpzs",
  })
  @get()
  static getCpzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpz",
  })
  @post("{id}")
  static createCpz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
