import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncws")
export default class NcwController {
  @operation({
    summary: "Get Ncws",
  })
  @get()
  static getNcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncw",
  })
  @post("{id}")
  static createNcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
