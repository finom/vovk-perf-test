import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpks")
export default class CpkController {
  @operation({
    summary: "Get Cpks",
  })
  @get()
  static getCpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpk",
  })
  @post("{id}")
  static createCpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
