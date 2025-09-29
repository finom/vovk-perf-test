import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifns")
export default class IfnController {
  @operation({
    summary: "Get Ifns",
  })
  @get()
  static getIfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifn",
  })
  @post("{id}")
  static createIfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
