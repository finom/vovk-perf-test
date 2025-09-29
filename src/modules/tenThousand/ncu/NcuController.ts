import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncus")
export default class NcuController {
  @operation({
    summary: "Get Ncus",
  })
  @get()
  static getNcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncu",
  })
  @post("{id}")
  static createNcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
