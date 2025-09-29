import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clms")
export default class ClmController {
  @operation({
    summary: "Get Clms",
  })
  @get()
  static getClms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clm",
  })
  @post("{id}")
  static createClm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
