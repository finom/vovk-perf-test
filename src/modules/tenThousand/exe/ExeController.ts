import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exes")
export default class ExeController {
  @operation({
    summary: "Get Exes",
  })
  @get()
  static getExes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exe",
  })
  @post("{id}")
  static createExe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
