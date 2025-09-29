import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csfs")
export default class CsfController {
  @operation({
    summary: "Get Csfs",
  })
  @get()
  static getCsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csf",
  })
  @post("{id}")
  static createCsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
