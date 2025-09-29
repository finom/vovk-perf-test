import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbls")
export default class CblController {
  @operation({
    summary: "Get Cbls",
  })
  @get()
  static getCbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbl",
  })
  @post("{id}")
  static createCbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
