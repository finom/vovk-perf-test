import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgas")
export default class BgaController {
  @operation({
    summary: "Get Bgas",
  })
  @get()
  static getBgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bga",
  })
  @post("{id}")
  static createBga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
