import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnos")
export default class BnoController {
  @operation({
    summary: "Get Bnos",
  })
  @get()
  static getBnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bno",
  })
  @post("{id}")
  static createBno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
