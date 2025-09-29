import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epos")
export default class EpoController {
  @operation({
    summary: "Get Epos",
  })
  @get()
  static getEpos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epo",
  })
  @post("{id}")
  static createEpo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
