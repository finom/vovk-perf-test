import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncks")
export default class NckController {
  @operation({
    summary: "Get Ncks",
  })
  @get()
  static getNcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nck",
  })
  @post("{id}")
  static createNck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
