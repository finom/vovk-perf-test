import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbes")
export default class CbeController {
  @operation({
    summary: "Get Cbes",
  })
  @get()
  static getCbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbe",
  })
  @post("{id}")
  static createCbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
