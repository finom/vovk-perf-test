import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cps")
export default class CpController {
  @operation({
    summary: "Get Cps",
  })
  @get()
  static getCps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cp",
  })
  @post("{id}")
  static createCp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
