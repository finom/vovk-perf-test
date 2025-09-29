import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dats")
export default class DatController {
  @operation({
    summary: "Get Dats",
  })
  @get()
  static getDats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dat",
  })
  @post("{id}")
  static createDat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
