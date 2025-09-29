import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clns")
export default class ClnController {
  @operation({
    summary: "Get Clns",
  })
  @get()
  static getClns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cln",
  })
  @post("{id}")
  static createCln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
