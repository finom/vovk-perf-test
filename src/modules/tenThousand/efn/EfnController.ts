import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efns")
export default class EfnController {
  @operation({
    summary: "Get Efns",
  })
  @get()
  static getEfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efn",
  })
  @post("{id}")
  static createEfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
