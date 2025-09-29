import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfjs")
export default class CfjController {
  @operation({
    summary: "Get Cfjs",
  })
  @get()
  static getCfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfj",
  })
  @post("{id}")
  static createCfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
