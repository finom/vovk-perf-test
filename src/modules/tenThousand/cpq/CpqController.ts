import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpqs")
export default class CpqController {
  @operation({
    summary: "Get Cpqs",
  })
  @get()
  static getCpqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpq",
  })
  @post("{id}")
  static createCpq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
