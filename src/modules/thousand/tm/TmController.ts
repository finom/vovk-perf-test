import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tms")
export default class TmController {
  @operation({
    summary: "Get Tms",
  })
  @get()
  static getTms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tm",
  })
  @post("{id}")
  static createTm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
